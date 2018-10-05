"use strict";
var shaders = {}; 
shaders ["accumulator"] = `#version 100
precision highp float;

attribute vec3 aPosition;

void main() {
    gl_Position = vec4(aPosition, 1);
}


// __split__


#version 100
precision highp float;

uniform sampler2D uSceneDepth;
uniform sampler2D uSceneNormal;
uniform sampler2D uRandRotDepth;
uniform sampler2D uAccumulator;
uniform mat4 uRot;
uniform mat4 uInvRot;
uniform vec2 uSceneBottomLeft;
uniform vec2 uSceneTopRight;
uniform vec2 uRotBottomLeft;
uniform vec2 uRotTopRight;
uniform float uDepth;
uniform float uRes;
uniform int uSampleCount;

void main() {

    float dScene = texture2D(uSceneDepth, gl_FragCoord.xy/uRes).r;

    vec3 r = vec3(uSceneBottomLeft + (gl_FragCoord.xy/uRes) * (uSceneTopRight - uSceneBottomLeft), 0.0);

    r.z = -(dScene - 0.5) * uDepth;
    r = vec3(uRot * vec4(r, 1));
    float depth = -r.z/uDepth + 0.5;

    vec2 p = (r.xy - uRotBottomLeft)/(uRotTopRight - uRotBottomLeft);

    float dRandRot = texture2D(uRandRotDepth, p).r;

    float ao = step(dRandRot, depth * 0.99);

    vec3 normal = texture2D(uSceneNormal, gl_FragCoord.xy/uRes).rgb * 2.0 - 1.0;
    vec3 dir = vec3(uInvRot * vec4(0, 0, 1, 0));
    float mag = dot(dir, normal);
    float sampled = step(0.0, mag);

    ao *= sampled;

    vec4 acc = texture2D(uAccumulator, gl_FragCoord.xy/uRes);

    if (uSampleCount < 256) {
        acc.r += ao/255.0;
    } else if (uSampleCount < 512) {
        acc.g += ao/255.0;
    } else if (uSampleCount < 768) {
        acc.b += ao/255.0;
    } else {
        acc.a += ao/255.0;
    }
        
    gl_FragColor = acc;

}
`; 
shaders ["ao"] = `#version 100
precision highp float;

attribute vec3 aPosition;

void main() {
    gl_Position = vec4(aPosition, 1);
}


// __split__


#version 100
precision highp float;

uniform sampler2D uSceneColor;
uniform sampler2D uSceneDepth;
uniform sampler2D uAccumulatorOut;
uniform float uRes;
uniform float uAO;
uniform float uBrightness;
uniform float uOutlineStrength;

void main() {
    vec2 p = gl_FragCoord.xy/uRes;
    vec4 sceneColor = texture2D(uSceneColor, p);
    if (uOutlineStrength > 0.0) {
        float depth = texture2D(uSceneDepth, p).r;
        float r = 1.0/511.0;
        float d0 = abs(texture2D(uSceneDepth, p + vec2(-r,  0)).r - depth);
        float d1 = abs(texture2D(uSceneDepth, p + vec2( r,  0)).r - depth);
        float d2 = abs(texture2D(uSceneDepth, p + vec2( 0, -r)).r - depth);
        float d3 = abs(texture2D(uSceneDepth, p + vec2( 0,  r)).r - depth);
        float d = max(d0, d1);
        d = max(d, d2);
        d = max(d, d3);
        sceneColor.rgb *= pow(1.0 - d, uOutlineStrength * 32.0);
        sceneColor.a = max(step(0.003, d), sceneColor.a);
    }
    vec4 dAccum = texture2D(uAccumulatorOut, p);
    float shade = max(0.0, 1.0 - (dAccum.r + dAccum.g + dAccum.b + dAccum.a) * 0.25 * uAO);
    shade = pow(shade, 2.0);
    gl_FragColor = vec4(uBrightness * sceneColor.rgb * shade, sceneColor.a);
}
`; 
shaders ["atom"] = `#version 100
precision highp float;

attribute vec3 aImposter;
attribute vec3 aPosition;
attribute float aRadius;
attribute vec3 aColor;

uniform mat4 uView;
uniform mat4 uProjection;
uniform mat4 uModel;
uniform float uAtomScale;
uniform float uRelativeAtomScale;
uniform float uAtomShade;

varying vec3 vColor;
varying vec3 vPosition;
varying float vRadius;

void main() {
    vRadius = uAtomScale * (1.0 + (aRadius - 1.0) * uRelativeAtomScale);
    gl_Position = uProjection * uView * uModel * vec4(vRadius * aImposter + aPosition, 1.0);
    vColor = mix(aColor, vec3(1,1,1), uAtomShade);
    vPosition = vec3(uModel * vec4(aPosition, 1));
}


// __split__


#version 100
#extension GL_EXT_frag_depth: enable
precision highp float;

uniform vec2 uBottomLeft;
uniform vec2 uTopRight;
uniform float uRes;
uniform float uDepth;
uniform int uMode;

varying vec3 vPosition;
varying float vRadius;
varying vec3 vColor;

vec2 res = vec2(uRes, uRes);

float raySphereIntersect(vec3 r0, vec3 rd) {
    float a = dot(rd, rd);
    vec3 s0_r0 = r0 - vPosition;
    float b = 2.0 * dot(rd, s0_r0);
    float c = dot(s0_r0, s0_r0) - (vRadius * vRadius);
    float disc = b*b - 4.0*a*c;
    if (disc <= 0.0) {
        return -1.0;
    }
    return (-b - sqrt(disc))/(2.0*a);
}

void main() {
    vec3 r0 = vec3(uBottomLeft + (gl_FragCoord.xy/res) * (uTopRight - uBottomLeft), 0.0);
    vec3 rd = vec3(0, 0, -1);
    float t = raySphereIntersect(r0, rd);
    if (t < 0.0) {
        discard;
    }
    vec3 coord = r0 + rd * t;
    vec3 normal = normalize(coord - vPosition);
    if (uMode == 0) {
        gl_FragColor = vec4(vColor, 1);
    } else if (uMode == 1) {
        gl_FragColor = vec4(normal * 0.5 + 0.5, 1.0);
    }
    gl_FragDepthEXT = -coord.z/uDepth;
}
`; 
shaders ["blur"] = `#version 100
precision highp float;

attribute vec3 aPosition;

void main() {
    gl_Position = vec4(aPosition, 1);
}


// __split__


#version 100
precision highp float;

uniform sampler2D uTexture;
uniform float uRes;
uniform int leftRight;

void main() {
    vec2 dir;
    if (leftRight == 1) {
        dir = vec2(1,0)/uRes;
    } else {
        dir = vec2(0,1)/uRes;
    }
    const int range = 16;
    vec4 sample = vec4(0,0,0,0);
    for (int i = -range; i <= range; i++) {
        vec2 p = gl_FragCoord.xy/uRes + dir * float(i);
        sample += texture2D(uTexture, p);
    }
    sample /= float(range) * 2.0 + 1.0;
    gl_FragColor = sample;
}
`; 
shaders ["bond"] = `#version 100
precision highp float;

attribute vec3 aImposter;
attribute vec3 aPosA;
attribute vec3 aPosB;
attribute float aRadA;
attribute float aRadB;
attribute vec3 aColA;
attribute vec3 aColB;

uniform mat4 uView;
uniform mat4 uProjection;
uniform mat4 uModel;
uniform mat4 uRotation;
uniform float uBondRadius;
uniform float uAtomScale;
uniform float uRelativeAtomScale;

varying vec3 vNormal;
varying vec3 vPosA, vPosB;
varying float vRadA, vRadB;
varying vec3 vColA, vColB;
varying float vRadius;

mat3 alignVector(vec3 a, vec3 b) {
    vec3 v = cross(a, b);
    float s = length(v);
    float c = dot(a, b);
    mat3 I = mat3(
        1, 0, 0,
        0, 1, 0,
        0, 0, 1
    );
    mat3 vx = mat3(
        0, v.z, -v.y,
        -v.z, 0, v.x,
        v.y, -v.x, 0
    );
    return I + vx + vx * vx * ((1.0 - c) / (s * s));
}

void main() {
    vRadius = uBondRadius;
    vec3 pos = vec3(aImposter);
    // Scale the box in x and z to be bond-radius.
    pos = pos * vec3(vRadius, 1, vRadius);
    // Shift the origin-centered cube so that the bottom is at the origin.
    pos = pos + vec3(0, 1, 0);
    // Stretch the box in y so that it is the length of the bond.
    pos = pos * vec3(1, length(aPosA - aPosB) * 0.5, 1);
    // Find the rotation that aligns vec3(0, 1, 0) with vec3(uPosB - uPosA) and apply it.
    vec3 a = normalize(vec3(-0.000001, 1.000001, 0.000001));
    vec3 b = normalize(aPosB - aPosA);
    mat3 R = alignVector(a, b);
    pos = R * pos;
    // Shift the cube so that the bottom is centered at the middle of atom A.
    pos = pos + aPosA;

    vec4 position = uModel * vec4(pos, 1);
    gl_Position = uProjection * uView * position;
    vPosA = aPosA;
    vPosB = aPosB;
    vRadA = uAtomScale * (1.0 + (aRadA - 1.0) * uRelativeAtomScale);
    vRadB = uAtomScale * (1.0 + (aRadB - 1.0) * uRelativeAtomScale);
    vColA = aColA;
    vColB = aColB;
}


// __split__


#version 100
#extension GL_EXT_frag_depth: enable
precision highp float;

uniform mat4 uRotation;
uniform vec2 uBottomLeft;
uniform vec2 uTopRight;
uniform float uDepth;
uniform float uRes;
uniform float uBondShade;
uniform int uMode;

varying vec3 vPosA, vPosB;
varying float vRadA, vRadB;
varying vec3 vColA, vColB;
varying float vRadius;

mat3 alignVector(vec3 a, vec3 b) {
    vec3 v = cross(a, b);
    float s = length(v);
    float c = dot(a, b);
    mat3 I = mat3(
        1, 0, 0,
        0, 1, 0,
        0, 0, 1
    );
    mat3 vx = mat3(
        0, v.z, -v.y,
        -v.z, 0, v.x,
        v.y, -v.x, 0
    );
    return I + vx + vx * vx * ((1.0 - c) / (s * s));
}

void main() {

    vec2 res = vec2(uRes, uRes);
    vec3 r0 = vec3(uBottomLeft + (gl_FragCoord.xy/res) * (uTopRight - uBottomLeft), uDepth/2.0);
    vec3 rd = vec3(0, 0, -1);

    vec3 i = normalize(vPosB - vPosA);
         i = vec3(uRotation * vec4(i, 0));
    vec3 j = normalize(vec3(-0.000001, 1.000001, 0.000001));
    mat3 R = alignVector(i, j);

    vec3 r0p = r0 - vec3(uRotation * vec4(vPosA, 0));
    r0p = R * r0p;
    vec3 rdp = R * rd;

    float a = dot(rdp.xz, rdp.xz);
    float b = 2.0 * dot(rdp.xz, r0p.xz);
    float c = dot(r0p.xz, r0p.xz) - vRadius*vRadius;
    float disc = b*b - 4.0*a*c;
    if (disc <= 0.0) {
        discard;
    }
    float t = (-b - sqrt(disc))/(2.0*a);
    if (t < 0.0) {
        discard;
    }

    vec3 coord = r0p + rdp * t;
    if (coord.y < 0.0 || coord.y > length(vPosA - vPosB)) {
        discard;
    }

    vec3 color;
    if (coord.y < vRadA + 0.5 * (length(vPosA - vPosB) - (vRadA + vRadB))) {
        color = vColA;
    } else {
        color = vColB;
    }

    color = mix(color, vec3(1,1,1), uBondShade);

    R = alignVector(j, i);
    vec3 normal = normalize(R * vec3(coord.x, 0, coord.z));

    coord = r0 + rd * t;
    if (uMode == 0) {
        gl_FragColor = vec4(color, 1);
    } else if (uMode == 1) {
        gl_FragColor = vec4(normal * 0.5 + 0.5, 1.0);
    }
    gl_FragDepthEXT = -(coord.z - uDepth/2.0)/uDepth;
}
`; 
shaders ["dof"] = `#version 100
precision highp float;

attribute vec3 aPosition;

void main() {
    gl_Position = vec4(aPosition, 1);
}


// __split__


#version 100
precision highp float;

uniform sampler2D uColor;
uniform sampler2D uDepth;
uniform float uRes;
uniform float uDOFPosition;
uniform float uDOFStrength;
uniform int leftRight;

void main() {

    vec2 samples[64];
    samples[0] = vec2(0.857612, 0.019885);
    samples[1] = vec2(0.563809, -0.028071);
    samples[2] = vec2(0.825599, -0.346856);
    samples[3] = vec2(0.126584, -0.380959);
    samples[4] = vec2(0.782948, 0.594322);
    samples[5] = vec2(0.292148, -0.543265);
    samples[6] = vec2(0.130700, 0.330220);
    samples[7] = vec2(0.236088, 0.159604);
    samples[8] = vec2(-0.305259, 0.810505);
    samples[9] = vec2(0.269616, 0.923026);
    samples[10] = vec2(0.484486, 0.371845);
    samples[11] = vec2(-0.638057, 0.080447);
    samples[12] = vec2(0.199629, 0.667280);
    samples[13] = vec2(-0.861043, -0.370583);
    samples[14] = vec2(-0.040652, -0.996174);
    samples[15] = vec2(0.330458, -0.282111);
    samples[16] = vec2(0.647795, -0.214354);
    samples[17] = vec2(0.030422, -0.189908);
    samples[18] = vec2(0.177430, -0.721124);
    samples[19] = vec2(-0.461163, -0.327434);
    samples[20] = vec2(-0.410012, -0.734504);
    samples[21] = vec2(-0.616334, -0.626069);
    samples[22] = vec2(0.590759, -0.726479);
    samples[23] = vec2(-0.590794, 0.805365);
    samples[24] = vec2(-0.924561, -0.163739);
    samples[25] = vec2(-0.323028, 0.526960);
    samples[26] = vec2(0.642128, 0.752577);
    samples[27] = vec2(0.173625, -0.952386);
    samples[28] = vec2(0.759014, 0.330311);
    samples[29] = vec2(-0.360526, -0.032013);
    samples[30] = vec2(-0.035320, 0.968156);
    samples[31] = vec2(0.585478, -0.431068);
    samples[32] = vec2(-0.244766, -0.906947);
    samples[33] = vec2(-0.853096, 0.184615);
    samples[34] = vec2(-0.089061, 0.104648);
    samples[35] = vec2(-0.437613, 0.285308);
    samples[36] = vec2(-0.654098, 0.379841);
    samples[37] = vec2(-0.128663, 0.456572);
    samples[38] = vec2(0.015980, -0.568170);
    samples[39] = vec2(-0.043966, -0.771940);
    samples[40] = vec2(0.346512, -0.071238);
    samples[41] = vec2(-0.207921, -0.209121);
    samples[42] = vec2(-0.624075, -0.189224);
    samples[43] = vec2(-0.120618, 0.689339);
    samples[44] = vec2(-0.664679, -0.410200);
    samples[45] = vec2(0.371945, -0.880573);
    samples[46] = vec2(-0.743251, 0.629998);
    samples[47] = vec2(-0.191926, -0.413946);
    samples[48] = vec2(0.449574, 0.833373);
    samples[49] = vec2(0.299587, 0.449113);
    samples[50] = vec2(-0.900432, 0.399319);
    samples[51] = vec2(0.762613, -0.544796);
    samples[52] = vec2(0.606462, 0.174233);
    samples[53] = vec2(0.962185, -0.167019);
    samples[54] = vec2(0.960990, 0.249552);
    samples[55] = vec2(0.570397, 0.559146);
    samples[56] = vec2(-0.537514, 0.555019);
    samples[57] = vec2(0.108491, -0.003232);
    samples[58] = vec2(-0.237693, -0.615428);
    samples[59] = vec2(-0.217313, 0.261084);
    samples[60] = vec2(-0.998966, 0.025692);
    samples[61] = vec2(-0.418554, -0.527508);
    samples[62] = vec2(-0.822629, -0.567797);
    samples[63] = vec2(0.061945, 0.522105);

    float invRes = 1.0/uRes;
    vec2 coord = gl_FragCoord.xy * invRes;

    float strength = uDOFStrength * uRes/768.0;

    float depth = texture2D(uDepth, coord).r;
    float range = uDOFPosition - depth;
    float scale = abs(range);

    vec4 sample = texture2D(uColor, coord);
    float count = 1.0;
    for(int i = 0; i < 64; i++) {
        vec2 p = samples[i];
        p = coord + scale * 64.0 * strength * p * invRes;
        float d = texture2D(uDepth, p).r;
        float r = uDOFPosition - d;
        float s = abs(r);
        sample += texture2D(uColor, p) * s;
        count += s;
    }

    gl_FragColor = sample/count;
}`; 
shaders ["fxaa"] = `#version 100
precision highp float;

attribute vec3 aPosition;

void main() {
    gl_Position = vec4(aPosition, 1);
}


// __split__


#version 100
precision highp float;

uniform sampler2D uTexture;
uniform float uRes;

void main() {
    float FXAA_SPAN_MAX = 8.0;
    float FXAA_REDUCE_MUL = 1.0/8.0;
    float FXAA_REDUCE_MIN = 1.0/128.0;

    vec2 texCoords = gl_FragCoord.xy/uRes;

    vec4 rgbNW = texture2D(uTexture, texCoords + (vec2(-1.0, -1.0) / uRes));
    vec4 rgbNE = texture2D(uTexture, texCoords + (vec2(1.0, -1.0) / uRes));
    vec4 rgbSW = texture2D(uTexture, texCoords + (vec2(-1.0, 1.0) / uRes));
    vec4 rgbSE = texture2D(uTexture, texCoords + (vec2(1.0, 1.0) / uRes));
    vec4 rgbM  = texture2D(uTexture, texCoords);

    vec4 luma = vec4(0.299, 0.587, 0.114, 1.0);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);

    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) * (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0/(min(abs(dir.x), abs(dir.y)) + dirReduce);

    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX), max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX), dir * rcpDirMin)) / uRes;

    vec4 rgbA = (1.0/2.0) * 
        (texture2D(uTexture, texCoords.xy + dir * (1.0/3.0 - 0.5)) + 
         texture2D(uTexture, texCoords.xy + dir * (2.0/3.0 - 0.5)));
    vec4 rgbB = rgbA * (1.0/2.0) + (1.0/4.0) * 
        (texture2D(uTexture, texCoords.xy + dir * (0.0/3.0 - 0.5)) +
         texture2D(uTexture, texCoords.xy + dir * (3.0/3.0 - 0.5)));
    float lumaB = dot(rgbB, luma);

    if((lumaB < lumaMin) || (lumaB > lumaMax)){
        gl_FragColor = rgbA;
    } else {
        gl_FragColor = rgbB;
    }

}`; 
shaders ["textured-quad"] = `#version 100
precision highp float;

attribute vec3 aPosition;

void main() {
    gl_Position = vec4(aPosition, 1);
}


// __split__


#version 100
precision highp float;

uniform sampler2D uTexture;
uniform float uRes;

void main() {
    gl_FragColor = texture2D(uTexture, gl_FragCoord.xy/uRes);
}
`; 
module.exports = {shaders};

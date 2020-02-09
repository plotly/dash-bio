import React, {Component} from 'react';
import {default as IdeogramJS} from 'ideogram';
import {omit} from 'ramda';
import {propTypes, defaultProps} from '../components/Ideogram.react';

export default class Ideogram extends Component {
    constructor() {
        super();
        this.ideogram = null;
        this.isRotated = false;
        this.tooltipData = null;
        this.tooltipDataTwo = null;

        this.propKeys = [
            'localOrganism',
            'organism',
            'showBandLabels',
            'orientation',
            'dataDir',
            'chrHeight',
            'chrWidth',
            'chrMargin',
            'resolution',
            'ploidy',
            'sex',
            'annotationsColor',
            'annotationHeight',
            'annotationsLayout',
            'annotationsPath',
            'style',
            'chromosomes',
            'rotatable',
            'showChromosomeLabels',
            'showFullyBanded',
            'showNonNuclearChromsomes',
            'annotationTracks',
            'annotations',
            'assembly',
            'barWidth',
            'filterable',
            'homology',
            'perspective',
            'fullChromosomeLabels',
        ];

        this.onBrushHandler = this.onBrushHandler.bind(this);
        this.onLoadHandler = this.onLoadHandler.bind(this);
        this.onRotateHandler = this.onRotateHandler.bind(this);
        this.onHomologyHandler = this.onHomologyHandler.bind(this);
        this.onToolTipHandler = this.onToolTipHandler.bind(this);
        this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
        this.setConfig = this.setConfig.bind(this);
        this.initIdeogram = this.initIdeogram.bind(this);
    }

    onHomologyHandler() {
        /**
         * An event handler used to compare two chromosomes,
         * where the user can specify the connection
         * between two points of two chromosomes. The user
         * can supply the homology locations using the
         * 'homology' prop.
         */

        const chrs = this.ideogram.chromosomes;
        let chrOne = null;
        let chrTwo = null;
        const organism = this.props.organism;
        const chromosomes = this.props.chromosomes;
        const homology = this.props.homology;

        if (typeof this.props.organism !== 'string') {
            chrOne = chrs[homology.chrOne.organism][chromosomes[organism[0]]];
            chrTwo = chrs[homology.chrTwo.organism][chromosomes[organism[1]]];
        } else {
            chrOne = chrs[homology.chrOne.organism][chromosomes[0]];
            chrTwo = chrs[homology.chrTwo.organism][chromosomes[1]];
        }

        const par1X = {
            chr: chrOne,
            start: homology.chrOne.start[0],
            stop: homology.chrOne.stop[0],
        };
        const par1Y = {
            chr: chrTwo,
            start: homology.chrTwo.start[0],
            stop: homology.chrTwo.stop[0],
        };

        const par2X = {
            chr: chrOne,
            start: homology.chrOne.start[1],
            stop: homology.chrOne.stop[1],
        };
        const par2Y = {
            chr: chrTwo,
            start: homology.chrTwo.start[1],
            stop: homology.chrTwo.stop[1],
        };

        const regions = [
            {r1: par1X, r2: par1Y},
            {r1: par2X, r2: par2Y},
        ];

        this.ideogram.drawSynteny(regions);
    }

    onToolTipHandler() {
        /**
         * An event handler that is called by onMouseHover handler, which
         * returns the annotation the mouse hovered over with the prop
         * 'annotationsData'.
         */

        this.tooltipDataTwo = this.tooltipData;
        this.props.setProps({
            annotationsData: this.tooltipData,
        });
    }

    onBrushHandler() {
        /**
         * An event handler that is called when an Ideogram
         * is using the brush prop. This event handler
         * returns brush data in to the Dash application
         * with the prop 'brushData'.
         */

        const r = this.ideogram.selectedRegion,
            start = r.from.toLocaleString(),
            end = r.to.toLocaleString(),
            extent = r.extent.toLocaleString();

        if (typeof this.props.brush !== 'undefined') {
            this.props.setProps({
                brushData: {
                    start: start,
                    end: end,
                    extent: extent,
                },
            });
        }
    }

    onLoadHandler() {
        /**
         *  An event handler that will load a function depending on
         * whether the brush prop is activated, or the homology prop
         * is activated. This prop is activated on the loading of the
         * Ideogram.
         */

        if (typeof this.props.brush !== 'undefined') {
            this.onBrushHandler();
        } else if (typeof this.props.homology !== 'undefined') {
            this.onHomologyHandler();
        }
        return null;
    }

    onRotateHandler() {
        /**
         * An event handler that returns 'true' or 'false' if the
         * ideogram is rotated. The user can use the prop 'rotated'
         * in their Dash application to see this effect.
         */

        this.isRotated = this.isRotated ? false : true;

        this.props.setProps({
            rotated: this.isRotated,
        });
    }

    onMouseOverHandler() {
        /**
         * Event handler that activates when you hover the mouse over an annotation.
         * This event handler allows the user to add an prop `onMouseOver` into their
         * Dash application, that will return the annotation that the mouse hovers over.
         */

        this.tooltipData = document.getElementById(
            '_ideogramTooltip'
        ).innerHTML;
        this.tooltipDataTwo =
            this.tooltipData !== this.tooltipDataTwo
                ? this.onToolTipHandler()
                : document.getElementById('_ideogramTooltip').innerHTML;
    }

    setConfig() {
        // Pass in all props into config except setProps
        const config = omit(['setProps'], this.props);
        // Event handlers
        config.onDidRotate = this.onRotateHandler;
        config.onBrushMove = this.props.brush ? this.onBrushHandler : null;
        config.onLoad = this.onLoadHandler;
        config.container = '#ideogram-container-' + this.props.id;

        return config;
    }

    initIdeogram() {
        // Used to pass in a local dataset
        if (this.props.localOrganism) {
            this.props.dataDir = null;
            window.chrBands = this.props.localOrganism;
        }
        this.ideogram = new IdeogramJS(this.setConfig());
    }

    shouldComponentUpdate(nextProps) {
        return this.propKeys.some(currentKey => {
            return this.props[currentKey] !== nextProps[currentKey];
        });
    }

    componentDidMount() {
        this.initIdeogram();
    }

    componentDidUpdate() {
        // Have to remove old data, because it breaks new instances
        delete window.chrBands;
        this.initIdeogram();
    }

    componentWillUnmount() {
        delete window.chrBands;
    }

    render() {
        return (
            <div
                id={this.props.id}
                className={this.props.className}
                style={this.props.style}
            >
                <div
                    {...omit(['setProps'], this.props)}
                    id={'ideogram-container-' + this.props.id}
                    onMouseOver={this.onMouseOverHandler}
                />
            </div>
        );
    }
}

Ideogram.defaultProps = defaultProps;
Ideogram.propTypes = propTypes;

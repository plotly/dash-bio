import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircosJS from 'circos';
import { TRACK_TYPES } from '../tracks';

class Circos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      datum: null
    }
    this.circos = null;
    this.configIdeogram = this.configIdeogram.bind(this);
  }

  
  configIdeogram(layout, config, tracks, setProps) {
    // const {
    //   layout, config, tracks
    // } = this.props;


    this.circos.layout(layout, config || {});
    tracks.forEach((track, index) => {
      const {
        id,
        data,
        config,
        type,
      } = track;

      let configApply

      
      if (config) {
        configApply = config

        configApply.events = {
          'mouseover.alert': (datum, index, nodes, event) => {
            console.warn("mouseOver", datum)
            // if (this.props.setProps) {
              console.warn("setProps")
              setProps(
                {
                  hoverDatum: datum
                }
              )
            
            // else {
            //   this.setState(
            //     {
            //       hoverDatum: datum
            //     }
            //   )
            // }
          }

        }
        console.warn("CONFIG", (configApply.color))
        // console.warn("colorName", colorName)
        // configApply.color = (typeof configApply.color !== "string") ? ((configApply.color) ? d => d[colorName]: null) : configApply.color;
        
        if (typeof configApply.color === "object" && configApply.color !== null) {
          var colorName = configApply.color.name
          configApply.color = d => d[colorName]
        }
        else if (typeof configApply.color === "string") {
          configApply.color = configApply.color
        }

        
                
        if ((typeof configApply.tooltipContent) === "string"){
          var toolName = configApply.tooltipContent
          console.warn("toolName", toolName)
          configApply.tooltipContent =  d => d[toolName]
        }
        else if ((typeof configApply.tooltipContent) === "object" && (configApply.tooltipContent !== null)) {
          var source = configApply.tooltipContent.source
          var sourceID = configApply.tooltipContent.sourceID

          var target = configApply.tooltipContent.target
          var targetID = configApply.tooltipContent.targetID
          var targetEnd = configApply.tooltipContent.targetEnd

          if (sourceID) {
          configApply.tooltipContent = function(d) {return '<h3>' + d[source][sourceID] + ' ➤ ' + d[target][targetID] + ': ' + d[target][targetEnd] + '</h3>'} 
          }
          // else {
          // configApply.tooltipContent = function(d) {return '<h3>' + d[source] + ' ➤ ' + d[target] + ': ' + d[targetEnd] + '</h3>'}
          // }
        }
        else {
          configApply.tooltipContent = null;
        }
              
    
        // if (tracker === 1) {
        //   configApply.tooltipContent =  d => d[toolName]
        // }

        // else if (tracker === 2) {
        //   configApply.tooltipContent = function(d) {return '<h3>' + d[source][sourceID] + ' ➤ ' + d[target][targetID] + ': ' + d[target][targetEnd] + '</h3>'}
        // }
        // var tooltipName = configApply.tooltipContent
      //   if (tooltipName){
      //   configApply.tooltipContent = d => d[tooltipName]
      // }

              // else if( )
              // configApply.tooltipContent = (tooltipName) ? (configApply.tooltipContent = d => d[tooltipName] : null
              // configApply.tooltipContent = function(d) {return '<h3>' + d[source][sourceID] + ' ➤ ' + d[target][targetID] + ': ' + d[target][targetEnd] + '</h3>'}
          
       }
        
      
    
      this.circos[type.toLowerCase()](id || `track-${index}`, data, configApply);
    });
    this.circos.render();
  }

  componentDidMount() {
    const {
      size, layout, config, tracks, setProps
    } = this.props;

    console.warn(">>>>>>> CDM", this.props)

    this.circos = new CircosJS({
      container: this.ref,
      width: size,
      height: size,
    });

    this.configIdeogram(layout, config, tracks,setProps);
  }

  
  shouldComponentUpdate(nextProps) {
    console.warn("SCU", nextProps)
    console.warn("SCU", this.props)
    console.warn('SCU', (
      (
       (this.props.config !== nextProps.config) 
    || (this.props.layout !== nextProps.layout) 
    || (this.props.tracks !== nextProps.tracks) 
    || (this.props.size !== nextProps.size)
    )))
    return (
      (this.props.config !== nextProps.config) || 
      (this.props.layout !== nextProps.layout) || 
      (this.props.tracks !== nextProps.tracks) || 
      (this.props.size !== nextProps.size)
      )
}
  

  componentDidUpdate() {
    const {
      size, layout, config, tracks, setProps
    } = this.props;
    this.circos.removeTracks()
    
    console.warn(">>>>>>> CDUP", this.props)
    this.circos.width = size
    this.circos.height = size
    this.configIdeogram(layout, config, tracks, setProps);
    // window.onload = function () {
      // document.getElementById("circos-tooltip").onmouseover = function () {
      //   console.log("hi")
      //   this.props.setProps(
      //     {
      //       hoverDatum: "Hi"
      //     }
      //   )
      // }
    
  }


  render() {
    const {
      id,
      style,
      config,
      layout,
      tracks,
      size,
      hoverDatum
      } = this.props;
  
    console.warn(">>>>>>> Render", this.props)
    return(
    <div id={id} style={style} hoverDatum={hoverDatum}>
      <div
      id="Circos-container" 
      ref={(ref) => { this.ref = ref; }} 
      config={config}
      layout={layout}
      tracks={tracks}
      size={size}
      >
      </div>
    </div>
    )
  }
}

Circos.defaultProps = {
  config: {},
  size: 800,
  tracks: [],
};
Circos.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  hoverDatum: PropTypes.object,
  // setProps: PropTypes.func,
  layout: PropTypes.arrayOf(PropTypes.shape({
    len: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  config: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  size: PropTypes.number,
  tracks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    data: PropTypes.array.isRequired,
    config: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    type: PropTypes.oneOf(TRACK_TYPES),
    tooltipContent:PropTypes.oneOf(
      [
        PropTypes.string,
        PropTypes.object
      ]
    ),
    color: PropTypes.oneOf(
      [
        PropTypes.string,
        PropTypes.object
      ],
  )})),
};

module.exports = Circos;



// Untouched original source code
// clearDiv() {

//   const container = document.getElementById('Circos-container');

//   if (container) {
//       while (container.hasChildNodes()) {
//           container.removeChild(container.lastChild);
//       }
//   }
// }

// componentDidMount() {
//   const {
//     size, layout, config, tracks,
//   } = this.props;
//   const circos = new CircosJS({
//     container: this.ref,
//     width: size,
//     height: size,
//   });
//   circos.layout(layout, config || {});
//   tracks.forEach((track, index) => {
//     const {
//       id,
//       data,
//       config: trackConfig,
//       type,
//     } = track;
//     circos[type.toLowerCase()](id || `track-${index}`, data, trackConfig);
//   });
//   circos.render();
// }

// componentDidUpdate() {
//   const {
//     size, layout, config, tracks,
//   } = this.props;

//   this.clearDiv()

//   const circos = new CircosJS({
//     container: this.ref,
//     width: size,
//     height: size,
//   });
//   circos.layout(layout, config || {});
//   tracks.forEach((track, index) => {
//     const {
//       id,
//       data,
//       config: trackConfig,
//       type,
//     } = track;
//     circos[type.toLowerCase()](id || `track-${index}`, data, trackConfig);
//   });
//   circos.render();
// }

// this.circos.layout(layout, config || {});
    // tracks.forEach((track, index) => {
    //   const {
    //     id,
    //     data,
    //     config,
    //     type,
    //   } = track;

    //   let configApply
      
    //   if (config) {
    //     configApply = config

    //     // console.warn("CONFIG")
    //     configApply.color = (typeof configApply.color !== "string") ? d => d.gieStain : config.color;

    //     configApply.tooltipContent = (typeof configApply.tooltipContent !== "object") ? d => d.name : config.tooltipContent;
    //   }

      
    //   this.circos[type.toLowerCase()](id || `track-${index}`, data, configApply);
    // });
    // this.circos.render();
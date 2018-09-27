import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Circos from './Circos.js';
import { TRACK_TYPES } from '../tracks';
/**
 * Circos is a library used to analyze and understand
 * data using a circular graph, where correltation 
 * bewteen the given data is also graphed. Dash Circos
 * is simply a wrapper for the original Circos for 
 * JavaScript written by Nicolas Girulat.
 *
 */
// tooltipContent(datum, index) {
//     return `<h5>${datum.block_id}:${datum.start}-${datum.end} ➤ ${datum.value}</h5> <i>(CTRL+C to copy to clipboard)</i>`
//   }

export default class DashCircos extends Component {
    constructor(props){
        super(props)
        this.circosRef = null;
    }

    

    render() {
        const {
            id,
            style,
            config,
            layout,
            tracks,
            size
            } = this.props;
        
        
        return (
                <div style={style}>
                <Circos
                    id={id}
                    config={config}
                    layout={layout}
                    tracks={tracks}
                    size={size}
                    onChange={e => {
                        /*
                         * Send the new value to the parent component.
                         # setProps is a prop that is automatically supplied
                         * by dash's front-end ("dash-renderer").
                         * In a Dash app, this will send the data back to the
                         * Python Dash app server.
                         * If the component properties are not "subscribed"
                         * to by a Dash callback, then Dash dash-renderer
                         * will not pass through `setProps` and it is expected
                         * that the component manages its own state.
                         */
                         if (setProps) {
                             setProps({

                            });
                        } else {
                            this.setState({
                                
                            })
                        }
                    }}
                />
                </div>
        );
    }
}

DashCircos.defaultProps = {
    config: {},
    size: 800,
    tracks: [],
  };
  
  DashCircos.propTypes = {
    /**
     *  The ID used to identify this component in Dash.
     */
    id: PropTypes.string,
  
    /**
     * Style to apply to root component of element.
     */
    style: PropTypes.object,
  
    /**
     *  The label used to identify this component in Dash.
     */
    label: PropTypes.string,
  
    /**
     * Dash assigned callback that should be called when
     * any properties change.
     */
    setProps: PropTypes.func,
  
    /**
     * The layout of the user defined data in the Circos. 
     * Should be an array, containing a dictonary of the 
     * user defined data, and layout.
     */
    layout: PropTypes.arrayOf(PropTypes.shape({
  
      /**
       * The length of the circumference of the Circo 
       * (circle graph) that an individual piece of
       * data shows up as.
       */
      len: PropTypes.number.isRequired,
  
      /**
       * The color of an individual piece
       * of data.
       */
      color: PropTypes.string.isRequired,
  
      /**
       * The label of an individual piece of
       * data.
       */
      label: PropTypes.string.isRequired,
  
      /**
       * The id of an individual piece of data.
       */
      id: PropTypes.string.isRequired,
    })).isRequired,
  
    /**
     * The configuration of the layout of the graph itself.
     */
    config: PropTypes.object, 
    
    /**
     * The size of the Circo graph.
     */
    size: PropTypes.number,
    
    /**
     * Tracks are a series of data points. They give the Circos
     * graph differnt styles depending on the type used. Should 
     * be an array, containing a dictionary.
    */
    tracks: PropTypes.arrayOf(PropTypes.shape({
  
    /**
     * The id of an individual piece of data.
     */
    id: PropTypes.string,
  
    /**
     * An array, containing a dictionary, defining
     * the parameters specific to the type
     * of track used (check docs).
     */
    data: PropTypes.array.isRequired,
  
    /**
     * The configuration of the tracks. 
     * Check docs for parameters of the type
     * of track used.
     */
    config: PropTypes.object, 
  
    /**
     * The type of track used. This one of the following:
     * HEATMAPS, CHORDS, HIGHLIGHT, HISTOGRAM,
     * LINE, SCATTER, STACK, and TEXT.
     */
    type: PropTypes.oneOf(TRACK_TYPES),
    })),
  };
  
    


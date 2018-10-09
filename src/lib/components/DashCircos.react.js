import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircosJS from 'circos';
import { TRACK_TYPES } from '../tracks';

/**
 * Dash Circos is a library used to analyze and understand
 * data using a circular layout. It comes with many layouts,
 * and templates for the user to share and display their data.
 */
class DashCircos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hoverDatum: null,
      clickDatum: null
    }
    this.circos = null;
    this.configIdeogram = this.configIdeogram.bind(this);
    this.setEvent = this.setEvent.bind(this);
    this.setColor = this.setColor.bind(this);
    this.setToolTip = this.setToolTip.bind(this);
  }


  setEvent(setProps, index) {
    console.warn("index", index)
    if (this.props.selectEvent) {
      if (this.props.selectEvent[index] === "both") {
        return (
          {
            'click.alert': (datum) => {
              setProps(
                {
                  clickDatum: datum
                }
              )
            },
            'mouseover.alert': (datum) => {
              setProps(
                {
                  hoverDatum: datum
                }
              )
            }
          }
        )
      }
      else if (this.props.selectEvent[index] === "hover") {
        return {
          'mouseover.alert': (datum) => {
            setProps(
              {
                hoverDatum: datum
              }
            )
          }
        }
      }
      else if (this.props.selectEvent[index] === "click") {
        return {
          'click.alert': (datum) => {
            this.props.setProps(
              {
                clickDatum: datum
              }
            )
          }
        }
      }
      return {}
    }
    return {}
  }

  setColor(configApply) {
    if (configApply.color) {
      if (configApply.color.name) {
        var colorName = configApply.color.name
        configApply.color = d => d[colorName]
      }
      else if (configApply.color.conditional) {
        var condColor = configApply.color.conditional
        configApply.color = (d) => {
          for (var i = 0; i < condColor.value.length; i++) {
            if (d[condColor.end] - d[condColor.start] > condColor.value[i]) {
              return condColor.color[i]
            }
          }
        }
      }
    }
  }

  setToolTip(configApply) {
    if (configApply.tooltipContent) {
      if (configApply.tooltipContent.name) {
        var toolName = configApply.tooltipContent.name
        configApply.tooltipContent = d => d[toolName]
      }
      else if (configApply.tooltipContent.source) {
        var tooltipData = configApply.tooltipContent

        if (tooltipData.sourceID && tooltipData.targetID) {
          configApply.tooltipContent = function (d) { return '<h3>' + d[tooltipData.source][tooltipData.sourceID] + ' ➤ ' + d[tooltipData.target][tooltipData.targetID] + ': ' + d[tooltipData.target][tooltipData.targetEnd] + '</h3>' }
        }
        else {
          configApply.tooltipContent = function (d) { return '<h3>' + d[tooltipData.source] + ' ➤ ' + d[tooltipData.target] + ': ' + d[tooltipData.targetEnd] + '</h3>' }
        }
      }
    }
    else {
      configApply.tooltipContent = null
    }
  }

  configIdeogram(layout, config, tracks, setProps) {
    this.circos.layout(layout, config || {});
    tracks.forEach((track, index) => {
      const {
        id,
        data,
        config,
        type,
      } = track;

      // Since config is const, can't manipulate and throws error
      let configApply

      if (config) {
        configApply = config

        // Set Event Handling
        if (setProps) {
          configApply.events = this.setEvent(setProps, index)
        }

        // Set Color
        this.setColor(configApply);

        // Set Tool tip
        this.setToolTip(configApply);
      }
      this.circos[type.toLowerCase()](id || `track-${index}`, data, configApply);
    });
    this.circos.render();
  }

  componentDidMount() {
    const {
      size, layout, config, tracks, setProps
    } = this.props;

    this.circos = new CircosJS({
      container: this.ref,
      width: size,
      height: size,
    });
    this.configIdeogram(layout, config, tracks, setProps);
  }


  shouldComponentUpdate(nextProps) {
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
      (this.props.size !== nextProps.size) ||
      (this.props.selectEvent !== nextProps.selectEvent)
    )
  }


  componentDidUpdate() {
    const {
      size, layout, config, tracks, setProps
    } = this.props;
    this.circos.removeTracks()
    this.container = this.ref
    this.circos.width = size
    this.circos.height = size
    this.configIdeogram(layout, config, tracks, setProps);
  }

  render() {
    const {
      id,
      style,
      config,
      layout,
      tracks,
      size,
      hoverDatum,
      clickDatum
    } = this.props;

    return (
      <div id={id} style={style} hoverDatum={hoverDatum} clickDatum={clickDatum}>
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

DashCircos.defaultProps = {
  config: {},
  size: 800,
  tracks: [],
};

DashCircos.propTypes = {
  /**
   * The ID of the component to be used in Dash callbacks
   */
  id: PropTypes.string,

  /**
   * The CSS styling of the div wrapping the component
   */
  style: PropTypes.object,

  /**
   * A Dash prop that returns data on hovering of the tracks
   * if enabled.
   */
  hoverDatum: PropTypes.object,

  /**
   * A Dash prop that returns data on clicking of the tracks
   * if enabled.
   */
  clickDatum: PropTypes.object,

  /**
   * A dictionary used to choose whether tracks should return
   * data to "clickDatum" or "hoverDatum" on click, hover, or both.
   * The keys of the dictionary represent the index of the list
   * specified for "tracks".
   * 
   * Ex:                 
   * selectEvent={
        "0": "hover",
        "1": "click",
        "2": "both"
    },
   */
  selectEvent: PropTypes.object,

  /**
   * Dash provided setProps.
   */
  setProps: PropTypes.func,

  /**
   * The overall layout of the Circos graph, provided
   * as a list of dictionaries.
   */
  layout: PropTypes.arrayOf(PropTypes.shape({
    /**
     * The length of the block.
     */
    len: PropTypes.number.isRequired,

    /**
     * The color of the block.
     */
    color: PropTypes.string.isRequired,

    /**
     * The labels of the block.
     */
    label: PropTypes.string.isRequired,

    /**
     * The id of the block, where it will recieve
     * data from the specified "track" id.
     */
    id: PropTypes.string.isRequired,
  })).isRequired,

  /**
   * Configuration of overall layout of the graph.
   */
  config: PropTypes.object,

  /**
   * The overall size of the SVG container holding the
   * graph. Set on initilization and unchangeable thereafter.
   */
  size: PropTypes.number,

  /**
   * Tracks that specify specific layouts.
   * For a complete list of tracks and usage, 
   * please check the docs.
   */
  tracks: PropTypes.arrayOf(PropTypes.shape({

    /**
     * The id of a specific piece of track data.
     */
    id: PropTypes.string,

    /**
     * The data that makes up the track. It can 
     * be a Json object.
     */
    data: PropTypes.array.isRequired,

    /**
     * The layout of the tracks, where the user
     * can configure innerRadius, outterRadius, ticks,
     * labels, and more.
     */
    config: PropTypes.object,

    /**
     * Specify the type of track this is.
     * Please check the docs for a list of tracks you can use,
     * and ensure the name is typed in all capitals.
     **/
    type: PropTypes.oneOf(TRACK_TYPES),

    /**
     * Specify what data for tooltipContent is
     * displayed.
     * 
     * The name key is required, where the entry
     * for the key points to a key in the dictionary
     * of the data loaded into tracks. 
     * Ex: "tooltipContent": {"name": "block_id"},
     * 
     * Ex: This will return (source) + ' ➤ ' + (target) + ': ' + (targetEnd)' 
     * "tooltipContent": {
        "source": "block_id",
        "target": "position",
        "targetEnd": "value"
                            },
     * Ex: This will return (source)(sourceID) + ' ➤ ' + (target)(targetID) + ': ' (target)(targetEnd)'                  
     * "tooltipContent": {
        "source": "source",
        "sourceID": "id",
        "target": "target",
        "targetID": "id",
        "targetEnd": "end"
    }
     **/
    tooltipContent: PropTypes.oneOf(
      [
        PropTypes.string,
        PropTypes.object
      ]
    ),
    /**
     * Specify what data for color is displayed,
     * this can be a string or an object.
     * 
     * If using a string, you can specify hex,
     * RGB, and colors from d3 scale chromatic (Ex: RdYlBu). 
     * 
     * The key "name" is required for this dictionary,
     * where the input for "name" points to some list of
     * dictionries color values.
     * Ex: "color": {"name": "some key that refers to color in a data set"}
     **/
    color: PropTypes.oneOf(
      [
        PropTypes.string,
        PropTypes.object
      ],
    )
  })),
};

module.exports = DashCircos;


import React from 'react';
import PropTypes from 'prop-types';
import CircosJS from 'circos';
import { TRACK_TYPES } from '../tracks';

class Circos extends React.Component {
  componentDidMount() {
    const {
      size, layout, config, tracks,
    } = this.props;
    const circos = new CircosJS({
      container: this.ref,
      width: size,
      height: size,
    });
    circos.layout(layout, config || {});
    tracks.forEach((track, index) => {
      const {
        id,
        data,
        config: trackConfig,
        type,
      } = track;
      circos[type.toLowerCase()](id || `track-${index}`, data, trackConfig);
    });
    circos.render();
  }


  render() {
    return <div ref={(ref) => { this.ref = ref; }} />;
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
  label: PropTypes.string.isRequired,
  setProps: PropTypes.func,
  layout: PropTypes.arrayOf(PropTypes.shape({
    len: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  config: PropTypes.object, 
  size: PropTypes.number,
  tracks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    data: PropTypes.array.isRequired,
    config: PropTypes.object, 
  type: PropTypes.oneOf(TRACK_TYPES),
  })),
};

module.exports = Circos;
// export default Circos;
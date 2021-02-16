import React from 'react';
import PropTypes from 'prop-types';
import { CloudSVG, RainSVG, SunSVG, StormSVG, PartCloudySVG } from '../SVG';
import { scale } from '../../helpers/scalingUtils';
import {
  ICON_WEATHER_CLOUD,
  ICON_WEATHER_PART_CLOUDY,
  ICON_WEATHER_RAIN,
  ICON_WEATHER_STORM,
  ICON_WEATHER_SUN
} from '../../constants/weatherTypes';

const SIZE = scale(130);

const propTypes = {
  type: PropTypes.string,
};

const defaultProps = {
  type: '',
};

const WeatherSVG = ({ type }) => {
  switch (type) {
    case ICON_WEATHER_SUN:
      return <SunSVG width={SIZE} height={SIZE} />;
  
    case ICON_WEATHER_RAIN:
      return <RainSVG width={SIZE} height={SIZE} />;

    case ICON_WEATHER_STORM:
      return <StormSVG width={SIZE} height={SIZE} />;

    case ICON_WEATHER_PART_CLOUDY:
      return <PartCloudySVG width={SIZE} height={SIZE} />;

    case ICON_WEATHER_CLOUD:
    default:
      return <CloudSVG width={SIZE} height={SIZE} />;
  }
};

WeatherSVG.propTypes = propTypes;
WeatherSVG.defaultProps = defaultProps;

export { WeatherSVG };

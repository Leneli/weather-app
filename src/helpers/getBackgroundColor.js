import { COLOR_WEATHER_SUN, COLOR_WEATHER_RAIN, COLOR_WEATHER_NIGHT } from "../constants/colors";
import { TYPE_WEATHER_RAIN, TYPE_WEATHER_SUN, TYPE_WEATHER_NIGHT } from "../constants/weatherTypes";

export default function(type) {
  switch (type) {
    case TYPE_WEATHER_RAIN:
      return COLOR_WEATHER_RAIN;

    case TYPE_WEATHER_NIGHT:
      return COLOR_WEATHER_NIGHT;
  
    case TYPE_WEATHER_SUN:
    default:
      return COLOR_WEATHER_SUN;
  }
}

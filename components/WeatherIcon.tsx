import { Icon, IconProps } from "@chakra-ui/react"
import LightningDayIcon from "./icons/day/LightningDayIcon"
import RainDayIcon from "./icons/day/RainDayIcon"
import RainMixDayIcon from "./icons/day/RainMixDayIcon"
import ShowersDayIcon from "./icons/day/ShowersDayIcon"
import SprinkleDayIcon from "./icons/day/SprinkleDayIcon"
import ThunderstormDayIcon from "./icons/day/ThunderstormDayIcon"
import LightningIcon from "./icons/LightningIcon"
import LightningNightIcon from "./icons/night/LightningNightIcon"
import RainMixNightIcon from "./icons/night/RainMixNightIcon"
import RainNightIcon from "./icons/night/RainNightIcon"
import ShowersNightIcon from "./icons/night/ShowersNightIcon"
import SprinkleNightIcon from "./icons/night/SprinkleNightIcon"
import ThunderstormNightIcon from "./icons/night/ThunderstormNightIcon"
import RainIcon from "./icons/RainIcon"
import RainMixIcon from "./icons/RainMixIcon"
import ShowersIcon from "./icons/ShowersIcon"
import SprinkleIcon from "./icons/SprinkleIcon"
import ThunderstormIcon from "./icons/Thunderstorm"

interface WeatherIconProps extends IconProps {
  weatherId: number | string,
  day?: Boolean,
}

export default function WeatherIcon(props: WeatherIconProps ) {
  const { weatherId, day, ...iconProps } = props
  
  if (!weatherId) {
    // TODO: Change fallback icon
    return <Icon {...props} />
  }
  
  if (typeof day !== 'boolean') {
    switch (weatherId) {
      case 200:
      case 201:
      case 202:
      case 230:
      case 231:
      case 232:
        return <ThunderstormIcon {...iconProps} />
      case 210:
      case 211:
      case 212:
      case 221:
        return <LightningIcon {...iconProps} />
      case 300:
      case 301:
      case 321:
        return <SprinkleIcon {...iconProps} />
      case 302:
      case 311:
      case 312:
      case 314:
        return <RainIcon {...iconProps} />
      case 310:
        return <RainMixIcon {...iconProps} />
      case 313:
        return <ShowersIcon {...iconProps} />
      default:
        // TODO: Change fallback icon
        return <Icon {...iconProps}/>
    }
  }

  if (day) {
    switch (weatherId) {
      case 200:
      case 201:
      case 202:
      case 230:
      case 231:
      case 232:
        return <ThunderstormDayIcon {...iconProps} />
      case 210:
      case 211:
      case 212:
      case 221:
        return <LightningDayIcon {...iconProps} />
      case 300:
      case 301:
      case 321:
        return <SprinkleDayIcon {...iconProps} />
      case 302:
      case 311:
      case 312:
      case 314:
        return <RainDayIcon {...iconProps} />
      case 310:
        return <RainMixDayIcon {...iconProps} />
      case 313:
        return <ShowersDayIcon {...iconProps} />
      default:
        // TODO: Change fallback icon
        return <Icon {...iconProps}/>
    }
  } else {
    switch (weatherId) {
      case 200:
      case 201:
      case 202:
      case 230:
      case 231:
      case 232:
        return <ThunderstormNightIcon {...iconProps} />
      case 210:
      case 211:
      case 212:
      case 221:
        return <LightningNightIcon {...iconProps} />
      case 300:
      case 301:
      case 321:
        return <SprinkleNightIcon {...iconProps} />
      case 302:
      case 311:
      case 312:
      case 314:
        return <RainNightIcon {...iconProps} />
      case 310:
        return <RainMixNightIcon {...iconProps} />
      case 313:
        return <ShowersNightIcon {...iconProps} />
      default:
        // TODO: Change fallback icon
        return <Icon {...iconProps}/>
    }
  }
}
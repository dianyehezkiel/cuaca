import { Icon, IconProps } from "@chakra-ui/react"
import LightningDayIcon from "./icons/day/LightningDayIcon"
import ThunderstormDayIcon from "./icons/day/ThunderstormDayIcon"
import LightningIcon from "./icons/LightningIcon"
import LightningNightIcon from "./icons/night/LightningNightIcon"
import ThunderstormNightIcon from "./icons/night/ThunderstormNightIcon"
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
    console.log("props no day undefined")
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
      default:
        // TODO: Change fallback icon
        return <Icon {...iconProps}/>
    }
  }

}
import { Icon, IconProps } from "@chakra-ui/react"
import CloudyGustsIcon from "./icons/CloudyGustsIcon"
import CloudyIcon from "./icons/CloudyIcon"
import CloudyGustsDayIcon from "./icons/day/CloudyGustsDayIcon"
import FogDayIcon from "./icons/day/FogDayIcon"
import HailDayIcon from "./icons/day/HailDayIcon"
import HazeDayIcon from "./icons/day/HazeDayIcon"
import LightningDayIcon from "./icons/day/LightningDayIcon"
import RainDayIcon from "./icons/day/RainDayIcon"
import RainMixDayIcon from "./icons/day/RainMixDayIcon"
import ShowersDayIcon from "./icons/day/ShowersDayIcon"
import SleetDayIcon from "./icons/day/SleetDayIcon"
import SnowDayIcon from "./icons/day/SnowDayIcon"
import SprinkleDayIcon from "./icons/day/SprinkleDayIcon"
import StormShowersDayIcon from "./icons/day/StormShowersDayIcon"
import SunnyDayIcon from "./icons/day/SunnyDayIcon"
import SunnyOvercastDayIcon from "./icons/day/SunnyOvercastDayIcon"
import ThunderstormDayIcon from "./icons/day/ThunderstormDayIcon"
import WindyDayIcon from "./icons/day/WindyDayIcon"
import DustIcon from "./icons/DustIcon"
import FogIcon from "./icons/FogIcon"
import HailIcon from "./icons/HailIcon"
import HotIcon from "./icons/HotIcon"
import HurricaneIcon from "./icons/HurricaneIcon"
import LightningIcon from "./icons/LightningIcon"
import ClearNightIcon from "./icons/night/ClearNightIcon"
import CloudyGustsNightIcon from "./icons/night/CloudyGustsNightIcon"
import CloudyNightIcon from "./icons/night/CloudyNightIcon"
import FogNightIcon from "./icons/night/FogNightIcon"
import HailNightIcon from "./icons/night/HailNightIcon"
import LightningNightIcon from "./icons/night/LightningNightIcon"
import RainMixNightIcon from "./icons/night/RainMixNightIcon"
import RainNightIcon from "./icons/night/RainNightIcon"
import ShowersNightIcon from "./icons/night/ShowersNightIcon"
import SleetNightIcon from "./icons/night/SleetNightIcon"
import SnowNightIcon from "./icons/night/SnowNightIcon"
import SprinkleNightIcon from "./icons/night/SprinkleNightIcon"
import StormShowersNightIcon from "./icons/night/StormShowersNightIcon"
import ThunderstormNightIcon from "./icons/night/ThunderstormNightIcon"
import RainIcon from "./icons/RainIcon"
import RainMixIcon from "./icons/RainMixIcon"
import ShowersIcon from "./icons/ShowersIcon"
import SleetIcon from "./icons/SleetIcon"
import SmokeIcon from "./icons/SmokeIcon"
import SnowflakeColdIcon from "./icons/SnowflakeColdIcon"
import SnowIcon from "./icons/SnowIcon"
import SprinkleIcon from "./icons/SprinkleIcon"
import StormShowersIcon from "./icons/StormShowersIcon"
import StrongWindIcon from "./icons/StrongWindIcon"
import ThunderstormIcon from "./icons/Thunderstorm"
import TornadoIcon from "./icons/TornadoIcon"
import WindyIcon from "./icons/WindyIcon"

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
      case 500:
        return <SprinkleIcon {...iconProps} />
      case 302:
      case 311:
      case 312:
      case 314:
      case 501:
      case 502:
      case 503:
      case 504:
        return <RainIcon {...iconProps} />
      case 310:
      case 511:
      case 611:
      case 612:
      case 615:
      case 616:
      case 620:
        return <RainMixIcon {...iconProps} />
      case 313:
      case 520:
      case 521:
      case 522:
      case 701:
        return <ShowersIcon {...iconProps} />
      case 531:
      case 901:
        return <StormShowersIcon {...iconProps} />
      case 600:
      case 601:
      case 621:
      case 622:
        return <SnowIcon {...iconProps} />
      case 602:
        return <SleetIcon {...iconProps} />
      case 711:
        return <SmokeIcon {...iconProps} />
      case 721:
        return <HazeDayIcon {...iconProps} />
      case 731:
      case 761:
      case 762:
        return <DustIcon {...iconProps} />
      case 741:
        return <FogIcon {...iconProps} />
      case 771:
      case 801:
      case 802:
      case 803:
        return <CloudyGustsIcon {...iconProps} />
      case 781:
      case 900:
        return <TornadoIcon {...iconProps} />
      case 800:
        return <SunnyDayIcon {...iconProps} />
      case 804:
        return <CloudyIcon {...iconProps} />
      case 902:
        return <HurricaneIcon {...iconProps} />
      case 903:
        return <SnowflakeColdIcon {...iconProps} />
      case 904:
        return <HotIcon {...iconProps} />
      case 905:
        return <WindyIcon {...iconProps} />
      case 906:
        return <HailIcon {...iconProps} />
      case 957:
        return <StrongWindIcon {...iconProps} />
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
      case 500:
        return <SprinkleDayIcon {...iconProps} />
      case 302:
      case 311:
      case 312:
      case 314:
      case 501:
      case 502:
      case 503:
      case 504:
        return <RainDayIcon {...iconProps} />
      case 310:
      case 511:
      case 611:
      case 612:
      case 615:
      case 616:
      case 620:
        return <RainMixDayIcon {...iconProps} />
      case 313:
      case 520:
      case 521:
      case 522:
      case 701:
        return <ShowersDayIcon {...iconProps} />
      case 531:
      case 901:
        return <StormShowersDayIcon {...iconProps} />
      case 600:
      case 601:
      case 621:
      case 622:
        return <SnowDayIcon {...iconProps} />
      case 602:
        return <SleetDayIcon {...iconProps} />
      case 711:
        return <SmokeIcon {...iconProps} />
      case 721:
        return <HazeDayIcon {...iconProps} />
      case 731:
      case 761:
      case 762:
        return <DustIcon {...iconProps} />
      case 741:
        return <FogDayIcon {...iconProps} />
      case 771:
      case 801:
      case 802:
      case 803:
        return <CloudyGustsDayIcon {...iconProps} />
      case 781:
      case 900:
        return <TornadoIcon {...iconProps} />
      case 800:
        return <SunnyDayIcon {...iconProps} />
      case 804:
        return <SunnyOvercastDayIcon {...iconProps} />
      case 902:
        return <HurricaneIcon {...iconProps} />
      case 903:
        return <SnowflakeColdIcon {...iconProps} />
      case 904:
        return <HotIcon {...iconProps} />
      case 905:
        return <WindyDayIcon {...iconProps} />
      case 906:
        return <HailDayIcon {...iconProps} />
      case 957:
        return <StrongWindIcon {...iconProps} />
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
      case 500:
        return <SprinkleNightIcon {...iconProps} />
      case 302:
      case 311:
      case 312:
      case 314:
      case 501:
      case 502:
      case 503:
      case 504:
        return <RainNightIcon {...iconProps} />
      case 310:
      case 511:
      case 611:
      case 612:
      case 615:
      case 616:
      case 620:
        return <RainMixNightIcon {...iconProps} />
      case 313:
      case 520:
      case 521:
      case 522:
      case 701:
        return <ShowersNightIcon {...iconProps} />
      case 531:
      case 901:
        return <StormShowersNightIcon {...iconProps} />
      case 600:
      case 601:
      case 621:
      case 622:
        return <SnowNightIcon {...iconProps} />
      case 602:
        return <SleetNightIcon {...iconProps} />
      case 711:
        return <SmokeIcon {...iconProps} />
      case 721:
        return <HazeDayIcon {...iconProps} />
      case 731:
      case 761:
      case 762:
        return <DustIcon {...iconProps} />
      case 741:
        return <FogNightIcon {...iconProps} />
      case 771:
      case 801:
      case 802:
      case 803:
        return <CloudyGustsNightIcon {...iconProps} />
      case 781:
      case 900:
        return <TornadoIcon {...iconProps} />
      case 800:
        return <ClearNightIcon {...iconProps} />
      case 804:
        return <CloudyNightIcon {...iconProps} />
      case 902:
        return <HurricaneIcon {...iconProps} />
      case 903:
        return <SnowflakeColdIcon {...iconProps} />
      case 904:
        return <HotIcon {...iconProps} />
      case 905:
        return <WindyIcon {...iconProps} />
      case 906:
        return <HailNightIcon {...iconProps} />
      case 957:
        return <StrongWindIcon {...iconProps} />
      default:
        // TODO: Change fallback icon
        return <Icon {...iconProps}/>
    }
  }
}
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Icon } from "./styles";

interface StyledIconProps{
  icon: IconProp,
  iconSize: number
}

export function StyledIcon({icon, iconSize}: StyledIconProps){
  return(
    <Icon icon={icon} iconSize={iconSize}/>
  )
}
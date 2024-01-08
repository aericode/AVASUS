import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Icon } from "./styles";

interface StyledIconProps{
  icon: IconProp;
}

export function StyledIcon({icon}: StyledIconProps){
  return(
    <Icon icon={icon} />
  )
}
import { Breadcrumb } from "./styles"

interface DefaultBreadcrumbTextProps{
  isRoot: boolean,
  text: string
}

export function DefaultBreadcrumbText({isRoot, text}:DefaultBreadcrumbTextProps){
  return(
    <Breadcrumb isRoot={isRoot}>
     {text}
    </Breadcrumb>
  )
}
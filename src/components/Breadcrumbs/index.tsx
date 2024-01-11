import { Container, RootText, CurrentPageText } from "./styles"

interface BreadcrumbsProps {
  rootText: string,
  currentPageText: string
}

export function Breadcrumbs({ rootText, currentPageText }: BreadcrumbsProps) {
  return (
    <Container>
      <RootText>
        {rootText}
      </RootText>
      <CurrentPageText>
        {currentPageText}
      </CurrentPageText>
    </Container>
  )
}
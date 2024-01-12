import { useScreen } from "../../contexts/ScreenSizeContext";
import { ResponsiveFlexWrapper } from "../ResponsiveFlexWrapper"
import { Container, FilterButtonDesktop, FilterButtonMobile } from "./styles "

interface FilterButtonProps{
    text:string
}

function FilterButton({text}:FilterButtonProps){
    const { isSmallScreen } = useScreen();
    return(
        isSmallScreen ? <FilterButtonMobile>{text}</FilterButtonMobile>  : <FilterButtonDesktop>{text}</FilterButtonDesktop> 
    )
}
export function FilterSelector(){
    const filterArray = ['Covid 19','Sífilis e outras Ist’s', 'Preceptoria', 'Doenças raras', 'Web Palestras', 'Sistemas prisional', 'OPAS']

    return(
        <Container>
            <ResponsiveFlexWrapper>
                {filterArray.map(item => <FilterButton  text={item}/>)}
            </ResponsiveFlexWrapper>
        </Container>
    )
}
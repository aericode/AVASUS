import styled from "styled-components";

export const Container = styled.div`

`

interface FilterButtonProps{
  isSmallScreen: boolean
}

export const FilterButtonDesktop = styled.div`
font-size: ${({ theme }) => theme.FONT_SIZE.LG };
font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD };
color: ${({ theme }) => theme.COLORS.GRAY_800 };

white-space: nowrap;
margin: 0 10px;
cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.COLORS.GRAY_200 };
    text-decoration:underline;
  }
`



export const FilterButtonMobile = styled.div`
text-align: center;
font-size: ${({ theme }) => theme.FONT_SIZE.LG };

min-width: 300px;
width: 40vw;
background-color:  ${({ theme }) => theme.COLORS.SILVER };
border-radius: 20px;

white-space: nowrap;
margin: 3px 10px;
padding: 5px;
cursor: pointer;
border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200 };;
  
  &:hover {
    background-color:  ${({ theme }) => theme.COLORS.GRAY_50 };

    color: ${({ theme }) => theme.COLORS.GRAY_800 };
  }
`
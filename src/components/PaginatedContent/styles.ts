import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80vw;
  max-width: 1200px;
`;


export const PageWrapper = styled.div`
  margin: 30px 0;
`

export const ResultCountText = styled.p`
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
  font-style: italic;  
`

export const PaginateContainer = styled.div`
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 0;
      cursor: pointer;
      user-select: none;
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
      font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};
      color: ${({ theme }) => theme.COLORS.BLACK};
      border-collapse: collapse;
      padding: 6px 8px;

      &.break {
        pointer-events: none;
      }      

      &:hover {
        text-decoration: underline;
      }
    }

    .active {
        background-color: ${({ theme }) => theme.COLORS.RED_300};
        color: ${({ theme }) => theme.COLORS.WHITE};
        border: 0px;
    }

    .previousButton {
      border-radius: 10px 0px 0px 10px;
    }

    .nextButton {
      border-radius: 0px 10px 10px 0px;
    }

    .pageLink{
      padding: 0 12px;
    }
  }
`;
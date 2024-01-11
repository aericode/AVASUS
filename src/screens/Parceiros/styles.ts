import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 30px;
  margin-bottom: 190px;
`;

export const Wrapper = styled.div`
  width: 80vw;
  max-width: 1200px;
`;

export const PageWrapper = styled.div`
  margin: 30px 0;
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
      border: 1px solid #ccc;
      padding: 8px 12px;

      &.break {
        pointer-events: none;
      }

      

      &:hover {
        background-color: ${({ theme }) => theme.COLORS.GRAY_50};
      }
    }

    .active {
        background-color: ${({ theme }) => theme.COLORS.RED_300};
        color: #fff;
      }

    .previousButton {
      border-radius: 10px 0px 0px 10px;
    }

    .nextButton {
      border-radius: 0px 10px 10px 0px;
    }
  }
`;
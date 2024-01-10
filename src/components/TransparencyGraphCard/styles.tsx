import styled from 'styled-components';


export const Container = styled.div`
  width: 80vw;
  max-width: 540px;
  margin: 10px 0;
`

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  object-fit: stretch;
  justify-content: center;
`
export const GraphImage = styled.img`
  width: 80%;
  object-fit: contain;
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  margin-bottom: 60px;

`

export const StyledTitle = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};
  color: ${({ theme }) => theme.COLORS.RED_500};
  margin-top: 30px;
`
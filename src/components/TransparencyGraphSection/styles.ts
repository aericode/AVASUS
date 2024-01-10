import styled from 'styled-components';

export const Container = styled.div`
   margin-top: 30px;
`;

export const Wrapper = styled.div`
   width: 100%;
   display: flex;
   flex-direction: inherit;
   justify-content: space-between;
   background-color: blue;
`;

export const GraphCardContainer = styled.div`
  background-color: red;
  width: 80vw;
  max-width: 540px;
  height: 100px;
`
export const GraphImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`
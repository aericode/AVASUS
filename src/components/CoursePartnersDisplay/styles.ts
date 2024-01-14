import styled from "styled-components";

export const Container = styled.div`
  max-width: 1110px;

`;

export const PartnerGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  gap: 30px;
`;

export const PartnerList = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

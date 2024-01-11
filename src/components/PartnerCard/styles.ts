import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  max-width: 400px;
  height: 340px;
  cursor: pointer;
`;
export const ImageWrapper = styled.div`
  max-width: 350px;
  height: 200px;
  max-height: 200px;
  display: flex;
  margin: 10px;
`;

export const PartnerImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
  object-fit: contain;
`;

export const PartnerName = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};
  text-align: center;

  border-top: 3px solid ${({ theme }) => theme.COLORS.RED_300};
  padding-top: 10px;
`;
import styled from "styled-components";

export interface SizeProps{
  width: string,
  height: string,
  isImageContain?: boolean
}


export const Container = styled.div<SizeProps>`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  justify-content: center;


`;

export interface SpinnerProps{
  isLoading: boolean
}

export const Spinner = styled.div<SpinnerProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url('loading-spinner.gif') center center no-repeat;
  background-size: 50px;
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

export const Image = styled.img<SizeProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 20px;
  object-fit: ${({ isImageContain }) => isImageContain ? 'contain' : 'cover'};
`;

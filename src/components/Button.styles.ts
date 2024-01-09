import styled from "styled-components";
import { ButtonVariant } from "./Button";

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps> `
  width: 100px;
  height: 40px;

  background-color: ${(props) => props.theme['green-500']}
`
import { Container, LoginButton, LogonButton } from "./styles";

export function NavbarUserMenu() {
  return (
    <Container>
      <LoginButton> Entrar </LoginButton>
      <LogonButton> Cadastrar </LogonButton>
    </Container>
  );
}
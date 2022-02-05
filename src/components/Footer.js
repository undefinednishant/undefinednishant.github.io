import { Container, StyledFooter } from "./styled/Core.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Container padding="0.5rem">
        <p>
          All right reserved 2021 - {new Date().getFullYear()} &copy; Nishant
          Kumar
        </p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

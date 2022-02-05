import { Badge, Link, StyledButton } from "../styled/Core.styled";

const Button = ({ children, link, margin, onClick }) => {
  return (
    <>
      <StyledButton margin={margin} onClick={onClick}>
        {children}
      </StyledButton>
    </>
  );
};

export default Button;

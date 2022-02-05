import styled from "styled-components";

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.primary};
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.units.maxWidth};
  margin: 0 auto;
  padding: ${({ padding }) => padding};
`;

export const Flex = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  background: ${({ bg }) => bg};
  flex-wrap: ${({ wrap }) => wrap};

  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const H1 = styled.h1``;

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.secondary};
`;

export const Badge = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 8px 12px;
  margin: ${({ theme }) => theme.units.margin};
  border-radius: ${({ theme }) => theme.units.radius};
  font-size: 17px;
`;

export const ProfileAvatar = styled.div`
  margin: ${({ theme }) => theme.units.margin};
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryDarken};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Avatar = styled.img`
  max-width: 250px;
  border-radius: 50%;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

export const Box = styled.div`
  max-width: ${({ width }) => width};
  ${({ dividerRight, theme }) =>
    dividerRight &&
    `border-right: 2px solid ${theme.colors.secondary}; margin-right: 10px`};
  ${({ dividerLeft, theme }) =>
    dividerLeft &&
    `border-left: 2px solid  ${theme.colors.secondary}; margin-left: 10px`};
`;

export const StyledButton = styled.button`
  padding: 8px 15px;
  font-size: 18px;
  border: 0;
  border-radius: ${({ theme }) => theme.units.radius};
  cursor: pointer;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

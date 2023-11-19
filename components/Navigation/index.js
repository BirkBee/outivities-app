import Link from "next/link";
import styled from "styled-components";
import HomeSvg from "@/public/home.svg";
import PlusSvg from "@/public/plus.svg";

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledList>
        <li>
          <StyledLink href="/">
            <StyledHomeSvg />
          </StyledLink>
          <StyledSpan></StyledSpan>
        </li>
        <li>
          <StyledLink href="/create">
            <StyledPlusSvg />
          </StyledLink>
        </li>
      </StyledList>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  width: 100%;
  background-color: var(--primary-color);
  color: var(--neutral-color);
  position: fixed;
  bottom: 0;
  left: 0px;
  height: 70px;
  display: grid;
  z-index: 1;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: var(--neutral-color);
  text-decoration: none;
  align-items: center;
  width: 50%;
`;

const StyledHomeSvg = styled(HomeSvg)`
  display: grid;
`;

const StyledPlusSvg = styled(PlusSvg)`
  display: grid;
`;

const StyledSpan = styled.span`
  font-weight: 200;
  font-size: 12px;
`;

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
            <StyledSvg />
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/">
            <StyledSvg />
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
  padding: 15px;
  display: grid;
  z-index: 1;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: var(--neutral-color);
  text-decoration: none;
  align-items: center;
  width: 50%;
`;

const StyledSvg = styled(HomeSvg)`
  display: grid;
  place-items: center;
`;

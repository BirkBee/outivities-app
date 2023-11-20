import Link from "next/link";
import styled from "styled-components";
import HomeSvg from "@/public/home.svg";
import PlusSvg from "@/public/plus.svg";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  return (
    <StyledNavigation>
      <StyledList>
        <li>
          <StyledLink href="/">
            <StyledHomeSvg isActive={router.pathname === "/"} />
          </StyledLink>
          <StyledSpan></StyledSpan>
        </li>
        <li>
          <StyledLink href="/create">
            <StyledPlusSvg isActive={router.pathname === "/create"} />
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
  text-decoration: none;
  align-items: center;
  width: 50%;
`;

const StyledHomeSvg = styled(HomeSvg)`
  display: grid;
  path {
    fill: ${(props) =>
      props.isActive ? "var(--third-color)" : "var(--neutral-color)"};
    transition: fill 0.3s ease-in-out;
  }
`;

const StyledPlusSvg = styled(PlusSvg)`
  display: grid;
  path {
    fill: ${(props) =>
      props.isActive ? "var(--third-color)" : "var(--neutral-color)"};
    transition: fill 0.3s ease-in-out;
  }
`;

const StyledSpan = styled.span`
  font-weight: 200;
  font-size: 12px;
`;

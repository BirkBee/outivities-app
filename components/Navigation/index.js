import Link from "next/link";
import styled from "styled-components";
import HomeSvg from "@/public/home.svg";
import PlusSvg from "@/public/plus.svg";
import { useRouter } from "next/router";

export default function Navigation({ handleSvgClick }) {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <StyledNavigation>
      <StyledList>
        <li>
          <StyledLink href="/">
            <StyledHomeSvg
              $isActive={router.pathname === "/"}
              onClick={handleSvgClick}
            />
          </StyledLink>
          <StyledSpan></StyledSpan>
        </li>
        <li>
          <StyledLink href="/create">
            <StyledPlusSvg
              $isActive={router.pathname === "/create"}
              onClick={handleSvgClick}
            />
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
    stroke: ${(props) => (props.$isActive ? "blue" : "white")};
  }
`;

const StyledPlusSvg = styled(PlusSvg)`
  display: grid;
  path {
    fill: ${(props) => (props.$isActive ? "blue" : "white")};
  }
`;

const StyledSpan = styled.span`
  font-weight: 200;
  font-size: 12px;
`;

import Link from "next/link";
import styled from "styled-components";
import Icon from "../Icons";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();

  const handleHomeClick = () => {
    if (router.pathname === "/") {
      router.reload();
    } else {
      router.push("/");
    }
  };

  return (
    <StyledNavigation>
      <StyledSpan>
        <StyledList>
          <li>
            <StyledLink href="/" onClick={handleHomeClick}>
              <Icon
                variant={"home"}
                size={54}
                color={
                  router.pathname === "/"
                    ? "var(--third-color)"
                    : "var(--neutral-color)"
                }
              />
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/create">
              <Icon
                variant={"plus"}
                size={50}
                color={
                  router.pathname === "/create"
                    ? "var(--third-color)"
                    : "var(--neutral-color)"
                }
              />
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/favoriteList">
              <Icon
                variant={"noFavorite"}
                size={45}
                color={
                  router.pathname === "/favoriteList"
                    ? "var(--third-color)"
                    : "var(--neutral-color)"
                }
              />
            </StyledLink>
          </li>
        </StyledList>
      </StyledSpan>
    </StyledNavigation>
  );
}
const StyledNavigation = styled.nav`
  width: 100%;
  background-color: var(--primary-color);
  color: var(--neutral-color);
  position: fixed;
  bottom: 0;
  height: 70px;
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax (50px, 1fr));
  z-index: 1;
`;
const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin-top: 8px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  align-items: center;
  width: 50%;
`;
const StyledIcon = styled.div`
  display: grid;
  path {
    fill: ${(props) =>
      props.$isActive ? "var(--third-color)" : "var(--neutral-color)"};
    transition: fill 0.3s ease-in-out;
  }
`;
const StyledSpan = styled.span`
  font-weight: 200;
  font-size: 12px;
`;

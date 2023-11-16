import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledList>
        <li>
          <StyledLink href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
              <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
            </svg>
          </StyledLink>
        </li>
      </StyledList>
    </StyledNavigation>
  );
}
const StyledNavigation = styled.nav`
  width: 100%;
  margin-bottom: auto;
  background-color: var(--primary-color);
  color: var(--neutral-color);
  bottom: 0;
  color: white;
  padding: 15px 0;
  position: fixed;
  bottom: 0;
  padding: 15px;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  align-items: center;
  width: 50%;
  &:hover {
    color: greenyellow;
    letter-spacing: 2px;
  }
`;

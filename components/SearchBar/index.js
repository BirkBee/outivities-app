import styled from "styled-components";
import Icon from "../Icons";

export default function SearchBar({ setSearchTerm }) {
  return (
    <StyledSearchContainer>
      <StyledSearchForm>
        <StyledSearchInput
          onChange={(event) => setSearchTerm(event.target.value)}
          type="text"
          id="searchTerm"
          name="searchTerm"
          placeholder="Search Outivities..."
        ></StyledSearchInput>
        <Icon variant={"search"} size={25} color={"var(--primary-color)"} />
      </StyledSearchForm>
    </StyledSearchContainer>
  );
}

const StyledSearchContainer = styled.div`
  width: 265px;
  margin: 5px auto 5px auto;
`;

const StyledSearchForm = styled.form`
  padding: 0px 25px 0px 30px;
  color: var(--primary-color);
  display: grid;
  grid-template-columns: 1fr 24px;
  gap: 10px;
`;

const StyledSearchInput = styled.input`
  border: none;
  color: var(--primary-color);
  border-bottom: 2px solid var(--primary-color);
  font-size: 1rem;
  width: 100%;
`;

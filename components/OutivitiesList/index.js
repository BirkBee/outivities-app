import styled from "styled-components";
import OutivitiesListItem from "../OutivitiesListItem";

export default function OutivitiesList({ outivities }) {
  return (
    <article>
      <StyledOutivityCardContainer>
        {outivities.map((outivity) => (
          <OutivitiesListItem key={outivity.id} outivity={outivity} />
        ))}
      </StyledOutivityCardContainer>
    </article>
  );
}

const StyledOutivityCardContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
`;

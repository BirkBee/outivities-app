import styled from "styled-components";
import OutivitiesListItem from "../OutivitiesListItem";

export default function OutivitiesList({ outivities, onDeleteOutivity }) {
  return (
    <article>
      <StyledOutivityCardContainer>
        {outivities.map((outivity) => (
          <OutivitiesListItem
            key={outivity.id}
            outivity={outivity}
            onDeleteOutivity={onDeleteOutivity}
          />
        ))}
      </StyledOutivityCardContainer>
    </article>
  );
}

const StyledOutivityCardContainer = styled.ul`
  display: grid;
  padding: 10px;
  place-content: center;
  gap: 50px;
  margin-bottom: 20px;
`;

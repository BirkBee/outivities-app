import styled from "styled-components";
import OutivitiesListItem from "../OutivitiesListItem";

export default function OutivitiesList({
  outivities,
  favoriteInfo,
  onToggleFavorite,
}) {
  return (
    <article>
      <StyledOutivityCardContainer>
        {outivities.map((outivity) => (
          <OutivitiesListItem
            key={outivity.id}
            outivity={outivity}
            onToggleFavorite={() => onToggleFavorite(id)}
            isFavorite={
              favoriteInfo?.find((outivity) => outivity.id === id)?.isFavorite
            }
          />
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

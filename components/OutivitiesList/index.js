import styled from "styled-components";
import OutivitiesListItem from "../OutivitiesListItem";

export default function OutivitiesList({
  outivities,
  favorites,
  onToggleFavorite,
}) {
  return (
    <article>
      <StyledOutivityCardContainer>
        {outivities.map((outivity) => (
          <OutivitiesListItem
            key={outivity.id}
            outivity={outivity}
            onToggleFavorite={onToggleFavorite}
            isFavorite={favorites.includes(outivity.id)}
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

// onToggleFavorite={() => onToggleFavorite(id)}
// isFavorite={
//   favoriteInfo?.find((outivity) => outivity.id === id)?.isFavorite
// }

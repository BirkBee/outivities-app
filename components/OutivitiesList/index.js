import styled from "styled-components";
import OutivitiesListItem from "../OutivitiesListItem";

export default function OutivitiesList({ outivities, onToggleFavoriteList }) {
  return (
    <article>
      <StyledOutivityCardContainer>
        {outivities.map((outivity) => (
          <OutivitiesListItem
            key={outivity.id}
            outivity={outivity}
            onToggleFavoriteList={onToggleFavoriteList}
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

import styled from "styled-components";
import OutivitiesListItem from "../OutivitiesListItem";
import useFavorites from "@/lib/useFavorites";

export default function OutivitiesList({ outivities }) {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <article>
      <StyledOutivityCardContainer>
        {outivities.map((outivity) => (
          <OutivitiesListItem
            key={outivity._id}
            outivity={outivity}
            onToggleFavorite={toggleFavorite}
            isFavorite={favorites.includes(outivity._id)}
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

import styled from "styled-components";
import Head from "next/head";
import OutivitiesListItem from "@/components/OutivitiesListItem";

export default function FavoritesList({
  outivities,
  onToggleFavorite,
  favorites,
}) {
  const favoriteOutivities = outivities.filter((outivity) =>
    favorites.includes(outivity.id)
  );

  return (
    <>
      <Head>
        <title>My Outivities</title>
      </Head>

      <StyledTitle>Favorite Outivities</StyledTitle>

      <main>
        {favoriteOutivities.length === 0 && (
          <>
            <p>You have not saved any favorite Outivity yet.</p>
            <p>Start adding your first favorite!</p>
          </>
        )}

        <StyledOutivityCardContainer>
          {favoriteOutivities.map((outivity) => (
            <OutivitiesListItem
              key={outivity.id}
              outivity={outivity}
              favorites={favorites}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </StyledOutivityCardContainer>
      </main>
    </>
  );
}

const StyledTitle = styled.h1`
  display: grid;
  top: 0;
  margin: 0;
  height: 70px;
  place-content: center;
  background-color: var(--primary-color);
  color: var(--neutral-color);
`;

const StyledOutivityCardContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
`;

import styled from "styled-components";
import Head from "next/head";
import OutivitiesListItem from "@/components/OutivitiesListItem";

export default function favoriteList({ outivities, onFavoriteOutivity }) {
  return (
    <>
      <Head>
        <title>My Outivities</title>
      </Head>

      <StyledTitle>Favorite Outivities</StyledTitle>

      <main>
        <article>
          {!outivities.find(
            (outivity) => outivity.onFavoriteOutivity === true
          ) && (
            <>
              <p>You haven't saved any favorite Outivity yet.</p>
              <p>Start adding your first favorite !</p>
            </>
          )}

          <StyledOutivityCardContainer>
            {outivities
              .filter((outivity) => outivity.onFavoriteOutivity === true)
              .map((favoriteOutivity) => (
                <OutivitiesListItem
                  key={favoriteOutivity.id}
                  favoriteOutivity={favoriteOutivity}
                  onFavoriteOutivity={onFavoriteOutivity}
                />
              ))}
          </StyledOutivityCardContainer>
        </article>
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

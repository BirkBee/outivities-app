import styled from "styled-components";
import Head from "next/head";
import OutivitiesList from "@/components/OutivitiesList";

export default function favoriteList({
  outivities,
  onToggleFavorite,
  favorites,
}) {
  return (
    <>
      <Head>
        <title>My Outivities</title>
      </Head>

      <StyledTitle>Favorite Outivities</StyledTitle>

      <main>
        {!outivities.find((outivity) => outivity.favorites === true) && (
          <>
            <p>You haven't saved any favorite Outivity yet.</p>
            <p>Start adding your first favorite !</p>
          </>
        )}

        {outivities
          ?.filter((outivity) => favorites.some((id) => id === outivity.id))
          .map((outivity) => (
            <OutivitiesList
              outivities={outivities}
              key={outivity.id}
              favorites={favorites}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
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

import styled from "styled-components";
import Head from "next/head";
import OutivitiesList from "@/components/OutivitiesList";

export default function HomePage({
  outivities,
  favoriteInfo,
  onToggleFavoriteList,
}) {
  return (
    <>
      <Head>
        <title>My Outivities</title>
      </Head>

      <StyledTitle>All Outivities</StyledTitle>

      <main>
        <OutivitiesList
          outivities={outivities}
          favoriteInfo={favoriteInfo}
          onToggleFavoriteList={onToggleFavoriteList}
        />
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

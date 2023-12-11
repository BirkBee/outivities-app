import Head from "next/head";
import styled from "styled-components";
import dynamic from "next/dynamic";

export default function MapOverview({ outivities }) {
  const MapOverview = dynamic(() => import("@/components/MapOverview"), {
    ssr: false,
  });
  const outivity = outivities.find((outivities) => {
    return outivities;
  });

  if (!outivity) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>Map Overview</title>
      </Head>

      <StyledTitle>Outivities Map</StyledTitle>
      <main>
        <MapOverview outivity={outivity} outivities={outivities} />
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

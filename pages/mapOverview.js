import Head from "next/head";
import styled from "styled-components";
import dynamic from "next/dynamic";
import Icon from "@/components/Icons";

export default function MapOverviewPage({ outivities }) {
  const Map = dynamic(() => import("@/components/MapOverview"), {
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
        <Map outivity={outivity} outivities={outivities} />
        <StyledMapInfoContainer>
          <Icon variant={"pin"} size={30} color={"var(--pin-color)"} />
          <StyledMapInfo>
            You are here. Zoom out to explore your Outivities.
          </StyledMapInfo>
        </StyledMapInfoContainer>
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

const StyledMapInfoContainer = styled.div`
  color: var(--primary-color);
  display: grid;
  grid-template-columns: 30px 1fr;
  margin-top: 10px;
  align-items: center;
`;

const StyledMapInfo = styled.div`
  color: var(--third-color);
  font-weight: 500;
  font-size: 12px;
  line-height: 1.2;
  padding-top: 7px;
`;

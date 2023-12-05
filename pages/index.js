import styled from "styled-components";
import Head from "next/head";
import OutivitiesList from "@/components/OutivitiesList";
import { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBar";

export default function HomePage({ outivities, favorites, onToggleFavorite }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [foundOutivities, setfoundOutivities] = useState();

  useEffect(() => {
    const filteredOutivities = outivities.filter((outivity) =>
      outivity.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedOutivities = filteredOutivities.sort((a, b) =>
      a.title.localeCompare(b.title)
    );

    setfoundOutivities(sortedOutivities);
  }, [searchTerm, outivities]);

  return (
    <>
      <Head>
        <title>My Outivities</title>
      </Head>

      <StyledTitle>All Outivities</StyledTitle>

      <main>
        <SearchBar setSearchTerm={setSearchTerm} />
        <OutivitiesList
          outivities={searchTerm.length === 0 ? outivities : foundOutivities}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
        {searchTerm.length > 0 && foundOutivities.length === 0 && (
          <>
            <p>
              No Outivity matching <strong>{`"${searchTerm}"`}</strong> found.{" "}
            </p>
            <p>Please try another search term or create a new Outivity.</p>
          </>
        )}
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

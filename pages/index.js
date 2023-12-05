import styled from "styled-components";
import Head from "next/head";
import OutivitiesList from "@/components/OutivitiesList";
import { useState, useEffect } from "react";

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
        <StyledSearchContainer>
          <StyledSearchForm>
            <StyledSearchInput
              onChange={(event) => setSearchTerm(event.target.value)}
              type="text"
              id="searchTerm"
              name="searchTerm"
              placeholder="Search Outivities..."
            ></StyledSearchInput>
            <div>🔍</div>
          </StyledSearchForm>
        </StyledSearchContainer>

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

const StyledSearchContainer = styled.div`
  width: 265px;
  margin: 5px auto 5px auto;
`;

const StyledSearchForm = styled.form`
  padding: 0px 15px 0px 30px;
  color: var(--primary-color);
  display: grid;
  grid-template-columns: 1fr 24px;
  gap: 10px;
`;

const StyledSearchInput = styled.input`
  border: none;
  color: var(--primary-color);
  border-bottom: 2px solid var(--primary-color);
  font-size: 1rem;
  width: 100%;
`;

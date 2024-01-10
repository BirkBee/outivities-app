import styled from "styled-components";
import Head from "next/head";
import OutivitiesList from "@/components/OutivitiesList";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import useSWR from "swr";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: outivities } = useSWR("/api/outivities");

  if (!outivities) return;

  const foundOutivities = outivities
    .filter((outivity) =>
      outivity.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.title.localeCompare(b.title));

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

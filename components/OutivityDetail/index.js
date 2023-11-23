import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function OutivityDetail({ outivity, onDeleteOutivity }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{outivity.title}</title>
      </Head>
      <main>
        <article>
          <ul>
            <li>
              <h2>{outivity.title}</h2>
              <StyledOutivityImage
                src={outivity.image}
                alt={outivity.title}
                width={300}
                height={200}
              />
              <p>
                <strong>Location: </strong> {outivity.area},
                <StyledCountryName>{outivity.country}</StyledCountryName>
              </p>

              <p>
                <strong>Description: </strong> {outivity.description}
              </p>
            </li>
          </ul>
          <StyledDeleteButton
            type="button"
            onClick={() => handleDelete(outivity.id)}
          >
            delete
          </StyledDeleteButton>
        </article>
      </main>
    </>
  );
}

const StyledCountryName = styled.span`
  margin-left: 7px;
`;

const StyledOutivityImage = styled(Image)`
  overflow: clip;
  overflow-clip-margin: content-box;
  height: auto;
`;

const StyledDeleteButton = styled.button`
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  padding: 10px 20px;
  font-weight: 400;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid var(--secondary-color);
  color: var(--secondary-color);
  background-color: var(--danger-color);
  &:hover {
    cursor: pointer;
  }
`;

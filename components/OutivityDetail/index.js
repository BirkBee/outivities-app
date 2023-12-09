import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Icon from "../Icons";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function OutivityDetail({
  outivity,
  onDeleteOutivity,
  onToggleFavorite,
  isFavorite,
  outivities,
  handleNewPosition,
}) {
  const router = useRouter();
  const [isHidden, setIsHidden] = useState(true);
  function toggleHiddenLocation() {
    setIsHidden(!isHidden);
  }

  const confirmDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this Outivity?"
    );
    if (confirmed) {
      onDeleteOutivity(outivity.id);
      router.push("/");
    }
  };

  return (
    <>
      <Head>
        <title>{outivity.title}</title>
      </Head>
      <main>
        <article>
          <h1>{outivity.title}</h1>

          <StyledImageContainer>
            <StyledOutivityImage
              src={outivity.image}
              alt={outivity.image}
              width={300}
              height={200}
              layout="fixed"
            />
            <StyledFavoriteButton
              type="button"
              onClick={() => onToggleFavorite(outivity.id)}
            >
              <Icon
                variant="favorite"
                aria-label="favorite"
                color={
                  isFavorite ? "var(--favorite-color)" : "var(--neutral-color)"
                }
                size={"38"}
              />
            </StyledFavoriteButton>
          </StyledImageContainer>

          <StyledOutivityLocation>
            <strong>Location: </strong> {outivity.area},
            <StyledCountryName>{outivity.country}</StyledCountryName>
          </StyledOutivityLocation>
          <StyledHideButton onClick={toggleHiddenLocation}>
            {isHidden ? "↓ Show Location" : "↑ Hide Location"}
          </StyledHideButton>

          {!isHidden && (
            <Map
              outivities={outivities}
              newOutivityPosition={handleNewPosition}
              currentOutivity={outivity}
            />
          )}
          <StyledOutivityDescription>
            <strong>Description: </strong> {outivity.description}
          </StyledOutivityDescription>
          <StyledDeleteButton type="button" onClick={confirmDelete}>
            delete
          </StyledDeleteButton>

          <StyledEditLink href={`edit/${outivity.id}`}>edit</StyledEditLink>
        </article>
      </main>
    </>
  );
}

const StyledImageContainer = styled.div`
  position: relative;
  width: 300px;
`;

const StyledCountryName = styled.span`
  margin-left: 7px;
`;

const StyledOutivityImage = styled(Image)`
  overflow: clip;
  overflow-clip-margin: content-box;
  height: auto;
`;

const StyledFavoriteButton = styled.button`
  all: unset;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`;

const StyledEditLink = styled(Link)`
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  padding: 10px 20px;
  font-weight: 400;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid var(--secondary-color);
  color: var(--secondary-color);
  background-color: var(--neutral-color);
  &:hover {
    cursor: pointer;
  }
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

const StyledHideButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  font-weight: 800;
  color: var(--third-color);
`;

const StyledOutivityLocation = styled.p`
  margin: 20px 0 0 0;
`;

const StyledOutivityDescription = styled.p`
  margin: 20px 0 20px 0;
`;

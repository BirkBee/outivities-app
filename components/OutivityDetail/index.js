import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Icon from "../Icons";

export default function OutivityDetail({
  outivity,
  onDeleteOutivity,
  onToggleFavorite,
  isFavorite,
}) {
  const router = useRouter();

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
              <StyledIcon
                variant="favorite"
                color={
                  isFavorite ? "var(--favorite-color)" : "var(--neutral-color)"
                }
                size={"38"}
              />
            </StyledFavoriteButton>
          </StyledImageContainer>

          <p>
            <strong>Location: </strong> {outivity.area},
            <StyledCountryName>{outivity.country}</StyledCountryName>
          </p>

          <p>
            <strong>Description: </strong> {outivity.description}
          </p>

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

const StyledIcon = styled(Icon)`
  z-index: 1;
  fill: ${(props) => props.color};
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

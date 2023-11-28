import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function OutivityDetail({ outivity, onDeleteOutivity }) {
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
          <h2>{outivity.title}</h2>
          <StyledOutivityImage
            src={outivity.image}
            alt={outivity.image}
            width={300}
            height={200}
            layout="fixed"
          />
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

const StyledCountryName = styled.span`
  margin-left: 7px;
`;

const StyledOutivityImage = styled(Image)`
  overflow: clip;
  overflow-clip-margin: content-box;
  height: auto;
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

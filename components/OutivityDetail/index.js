import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import EditOutivityForm from "../EditOutivity";
import { useState } from "react";

export default function OutivityDetail({
  outivity,
  onDeleteOutivity,
  onEditOutivity,
}) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
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
      {!isEdit ? (
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
                  layout="fixed"
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
            <StyledDeleteButton type="button" onClick={confirmDelete}>
              delete
            </StyledDeleteButton>

            <StyledEditButton type="button" onClick={() => setIsEdit(true)}>
              Edit
            </StyledEditButton>
          </article>
        </main>
      ) : (
        <main>
          <EditOutivityForm
            onEditOutivity={onEditOutivity}
            outivity={outivity}
            setIsEdit={setIsEdit}
          />
        </main>
      )}
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
const StyledEditButton = styled.button`
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

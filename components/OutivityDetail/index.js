import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function OutivityDetail({
  outivity,
  onDeleteOutivity,
  onEditOutivity,
}) {
  const router = useRouter();
  const { id } = router.query;
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

  function editOutivity(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const editedOutivity = {
      id: uid(),
      title: data.outivityName,
      area: data.outivityArea,
      country: data.outivityCountry,
      image: data.outivityImage,
      description: data.outivityDescription,
    };
    onEditOutivity(editedOutivity);
    setIsEdit(false);
  }

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
          <StyledNewOutivitiesForm onSubmit={editOutivity}>
            <h1>Editc Outivity</h1>
            <StyledNewOutivitiesFormFields>
              <StyledNewOutivitiesFormField>
                <label htmlFor="outivityImage">Image</label>

                <StyledNewOutivitiesFormInput
                  type="text"
                  name="outivityImage"
                  id="outivityImage"
                  defaultValue={outivity.image}
                />
              </StyledNewOutivitiesFormField>
              <StyledNewOutivitiesFormField>
                <label htmlFor="outivityName">Outivity</label>
                <StyledNewOutivitiesFormInput
                  type="text"
                  name="outivityName"
                  id="outivityName"
                  defaultValue={outivity.title}
                />
              </StyledNewOutivitiesFormField>
              <StyledNewOutivitiesFormField>
                <label htmlFor="outivityArea">Area</label>
                <StyledNewOutivitiesFormInput
                  type="text"
                  name="outivityArea"
                  id="outivityArea"
                  defaultValue={outivity.area}
                />
              </StyledNewOutivitiesFormField>
              <StyledNewOutivitiesFormField>
                <label htmlFor="outivityCountry">Country</label>
                <StyledNewOutivitiesFormInput
                  type="text"
                  name="outivityCountry"
                  id="outivityCountry"
                  defaultValue={outivity.country}
                />
              </StyledNewOutivitiesFormField>
              <StyledNewOutivitiesFormField>
                <label htmlFor="outivityDescription">Description</label>
                <StyledNewOutivitiesFormTextarea
                  type="text"
                  name="outivityDescription"
                  id="outivityDescription"
                  defaultValue={outivity.description}
                />
              </StyledNewOutivitiesFormField>
              <StyledNewOutivitiesFormSpan>
                <StyledCancelButton
                  type="button"
                  onClick={() => setIsEdit(false)}
                >
                  cancel
                </StyledCancelButton>
                <StyledSaveButton type="submit">save</StyledSaveButton>
              </StyledNewOutivitiesFormSpan>
            </StyledNewOutivitiesFormFields>
          </StyledNewOutivitiesForm>
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
const StyledNewOutivitiesForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledNewOutivitiesFormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const StyledNewOutivitiesFormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const StyledInput = `
  padding: 20px;
  border: 1px solid var(--neutral-color);
  border-radius: 4px;
  font: inherit;
  resize: vertical;
  `;

const StyledNewOutivitiesFormInput = styled.input`
  ${StyledInput}
`;

const StyledNewOutivitiesFormTextarea = styled.textarea`
  ${StyledInput}
`;

const StyledNewOutivitiesFormSpan = styled.span`
  height: 60px;
  text-align: center;
  margin-bottom: 30px;
`;

const StyledCancelButton = styled.button`
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

const StyledSaveButton = styled.button`
  margin: 10px;
  padding: 12px 30px;
  font-weight: 500;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  color: var(--neutral-color);
  background-color: var(--third-color);
  letter-spacing: 2px;
  &:hover {
    cursor: pointer;
  }
`;

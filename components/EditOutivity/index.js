import styled from "styled-components";
import { useState } from "react";

export default function EditOutivityForm({
  onEditOutivity,
  outivity,
  setIsEdit,
}) {
  const [editedOutivity, setEditedOutivity] = useState({
    id: outivity.id,
    title: outivity.title,
    area: outivity.area,
    country: outivity.country,
    image: outivity.image,
    description: outivity.description,
  });

  const saveEdits = () => {
    onEditOutivity(editedOutivity);
    setIsEdit(false);
  };

  return (
    <StyledNewOutivitiesForm>
      <h1>Edit Outivity</h1>
      <StyledNewOutivitiesFormFields>
        <StyledNewOutivitiesFormField>
          <label htmlFor="outivityImage">Image</label>

          <StyledNewOutivitiesFormInput
            type="text"
            name="outivityImage"
            id="outivityImage"
            value={editedOutivity.image}
            onChange={(event) =>
              setEditedOutivity({
                ...editedOutivity,
                image: event.target.value,
              })
            }
          />
        </StyledNewOutivitiesFormField>
        <StyledNewOutivitiesFormField>
          <label htmlFor="outivityName">Outivity</label>
          <StyledNewOutivitiesFormInput
            type="text"
            name="outivityName"
            id="outivityName"
            value={editedOutivity.title}
            onChange={(event) =>
              setEditedOutivity({
                ...editedOutivity,
                title: event.target.value,
              })
            }
          />
        </StyledNewOutivitiesFormField>
        <StyledNewOutivitiesFormField>
          <label htmlFor="outivityArea">Area</label>
          <StyledNewOutivitiesFormInput
            type="text"
            name="outivityArea"
            id="outivityArea"
            value={editedOutivity.area}
            onChange={(event) =>
              setEditedOutivity({
                ...editedOutivity,
                area: event.target.value,
              })
            }
          />
        </StyledNewOutivitiesFormField>
        <StyledNewOutivitiesFormField>
          <label htmlFor="outivityCountry">Country</label>
          <StyledNewOutivitiesFormInput
            type="text"
            name="outivityCountry"
            id="outivityCountry"
            value={editedOutivity.country}
            onChange={(event) =>
              setEditedOutivity({
                ...editedOutivity,
                country: event.target.value,
              })
            }
          />
        </StyledNewOutivitiesFormField>
        <StyledNewOutivitiesFormField>
          <label htmlFor="outivityDescription">Description</label>
          <StyledNewOutivitiesFormTextarea
            name="outivityDescription"
            id="outivityDescription"
            value={editedOutivity.description}
            onChange={(event) =>
              setEditedOutivity({
                ...editedOutivity,
                description: event.target.value,
              })
            }
          />
        </StyledNewOutivitiesFormField>
        <StyledNewOutivitiesFormSpan>
          <StyledCancelButton type="button" onClick={() => setIsEdit(false)}>
            cancel
          </StyledCancelButton>
          <StyledSaveButton type="button" onClick={saveEdits}>
            save
          </StyledSaveButton>
        </StyledNewOutivitiesFormSpan>
      </StyledNewOutivitiesFormFields>
    </StyledNewOutivitiesForm>
  );
}

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

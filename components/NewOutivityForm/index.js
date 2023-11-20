import styled from "styled-components";
import Image from "next/image";

export default function NewOutivityForm({
  CreateOutivity,
  handleCancel,
  selectedImage,
}) {
  return (
    <main>
      <StyledNewOutivitiesForm onSubmit={CreateOutivity}>
        <h1>New Outivity</h1>
        <StyledNewOutivitiesFormFields>
          <StyledNewOutivitiesFormField>
            <label htmlFor="image">Image</label>
            {selectedImage && (
              <Image
                src="/{selectedImage}"
                alt="outivity-image"
                width={300}
                height={200}
              />
            )}
            <StyledNewOutivitiesFormInput
              type="text"
              name="outivityImage"
              id="outivityImage"
              placeholder="Insert a url from unsplash..."
              required
            />
          </StyledNewOutivitiesFormField>
          <StyledNewOutivitiesFormField>
            <label htmlFor="outivitiy">Outivity</label>
            <StyledNewOutivitiesFormInput
              type="text"
              name="outivityName"
              id="outivityName"
              placeholder="Type in a name..."
              required
            />
          </StyledNewOutivitiesFormField>
          <StyledNewOutivitiesFormField>
            <label htmlFor="area">Area</label>
            <StyledNewOutivitiesFormInput
              type="text"
              name="outivityArea"
              id="outivityArea"
              placeholder="In which city/area is it located?"
              required
            />
          </StyledNewOutivitiesFormField>
          <StyledNewOutivitiesFormField>
            <label htmlFor="country">Country</label>
            <StyledNewOutivitiesFormInput
              type="text"
              name="outivityCountry"
              id="outivityCountry"
              placeholder="In which country?"
              required
            />
          </StyledNewOutivitiesFormField>
          <StyledNewOutivitiesFormField>
            <label htmlFor="description">Description</label>
            <StyledNewOutivitiesFormTextarea
              type="text"
              name="outivityDescription"
              id="outivityDescription"
              placeholder="Type in some info..."
              rows="6"
              required
            />
          </StyledNewOutivitiesFormField>
          <StyledNewOutivitiesFormSpan>
            <StyledCancelButton onClick={handleCancel}>
              cancel
            </StyledCancelButton>
            <StyledSaveButton type="submit">save</StyledSaveButton>
          </StyledNewOutivitiesFormSpan>
        </StyledNewOutivitiesFormFields>
      </StyledNewOutivitiesForm>
    </main>
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

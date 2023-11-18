import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";

export default function CreateOutivity({ onAddOutivity, selectedImage }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddOutivity(data);
    event.target.reset();
  }

  const [selctedImage, setSelectedImage] = useState(null);

  return (
    <main>
      <StyledNewOutivitiesForm onSubmit={handleSubmit}>
        <h1>New Outivity</h1>
        <StyledNewOutivitiesFormFields>
          <StyledNewOutivitiesFormField>
            <label htmlFor="image">Image</label>
            <image src="image" alt="title" width={300} height={200} />
            {selectedImage && (
              <>
                <image
                  alt="outivity-image"
                  name="outivityImage"
                  width={300}
                  height={200}
                  src={URL.createObjectURL(selectedImage)}
                />
                <button onClick={() => setSelectedImage(null)}>Remove</button>
              </>
            )}
            <input
              type="file"
              name="myImage"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
            />
          </StyledNewOutivitiesFormField>
          <StyledNewOutivitiesFormField>
            <label htmlFor="outivitiy">Outivity</label>
            <StyledNewOutivitiesFormInput
              autofocus
              type="text"
              name="outivitiyName"
              id="outivitiyName"
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
            <StyledCancelButton as={Link} href="/">
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

const StyledCancelButton = styled(Link)`
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
`;

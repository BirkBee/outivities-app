import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function OutivityForm({
  outivity,
  onEditOutivity,
  createOutivity,
  isEdit,
  selectedImage,
  setSelectedImage,
  outivityArea,
  setOutivityArea,
}) {
  const router = useRouter();
  const inputRef = useRef(null);
  const [message, setMessage] = useState("");
  const [showWarning, setShowWarning] = useState("");

  const handleOutivityAreaChange = (event) => {
    setOutivityArea(event.target.value);
  };

  const handleCancel = () => {
    const confirmed = window.confirm("Are you sure you want to cancel?");
    if (confirmed) {
      router.push("/");
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    setMessage(event.target.value);
    setShowWarning("");
  };

  const handleUnsetImagePreview = () => {
    setShowWarning(true);
    setMessage("");
    setSelectedImage("");
  };

  return (
    <main>
      <StyledNewOutivitiesForm
        onSubmit={isEdit ? onEditOutivity : createOutivity}
      >
        <h1>{isEdit ? "Edit Outivity" : "New Outivity"}</h1>
        <StyledNewOutivitiesFormFields>
          <StyledNewOutivitiesFormField>
            <label htmlFor="outivityName">Outivity</label>
            <StyledNewOutivitiesFormInput
              type="text"
              name="outivityName"
              id="outivityName"
              placeholder="Type in a name..."
              required
              autoFocus
              ref={inputRef}
              defaultValue={isEdit ? outivity.title ?? "" : ""}
            />
          </StyledNewOutivitiesFormField>

          <StyledNewOutivitiesFormField>
            <label htmlFor="outivityImage">Image</label>
            {selectedImage && (
              <>
                <StyledFormPreviewImage
                  alt="imagePreview"
                  name="imagePreview"
                  width={300}
                  height={200}
                  src={selectedImage}
                />
                <StyledFormRemoveButton
                  type="button"
                  onClick={handleUnsetImagePreview}
                >
                  → remove image
                </StyledFormRemoveButton>
              </>
            )}
            <StyledNewOutivitiesImageInput
              type="file"
              class="inputfile"
              name="outivityImage"
              id="outivityImage"
              accept=".png, .jpeg, .jpg, .webp"
              required={!isEdit}
              value={message}
              onChange={handleImageChange}
            />
            {showWarning && (
              <StyledWarningMessage>
                <strong>
                  Please choose an image to complete your Outivity.
                </strong>
              </StyledWarningMessage>
            )}
          </StyledNewOutivitiesFormField>
          <StyledNewOutivitiesFormField>
            <label htmlFor="outivityArea">Area</label>
            <StyledNewOutivitiesFormInput
              type="text"
              name="outivityArea"
              id="outivityArea"
              placeholder="In which city/area is it located?"
              required
              defaultValue={isEdit ? outivity.area : "null"}
              value={outivityArea}
              onChange={handleOutivityAreaChange}
            />
          </StyledNewOutivitiesFormField>
          <StyledNewOutivitiesFormField>
            <label htmlFor="outivityCountry">Country</label>
            <StyledNewOutivitiesFormInput
              type="text"
              name="outivityCountry"
              id="outivityCountry"
              placeholder="In which country?"
              required
              defaultValue={isEdit ? outivity.country : null}
            />
          </StyledNewOutivitiesFormField>
          <StyledNewOutivitiesFormField>
            <label htmlFor="outivityDescription">Description</label>
            <StyledNewOutivitiesFormTextarea
              type="text"
              name="outivityDescription"
              id="outivityDescription"
              placeholder="Type in some info..."
              rows="6"
              required
              defaultValue={isEdit ? outivity.description : null}
            />
          </StyledNewOutivitiesFormField>
          <StyledNewOutivitiesFormSpan>
            <StyledCancelButton type="button" onClick={handleCancel}>
              ✗ cancel
            </StyledCancelButton>
            <StyledSaveButton type="submit">✓ save</StyledSaveButton>
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

const StyledNewOutivitiesFormInput = styled.input`
  padding: 20px;
  border: 1px solid var(--neutral-color);
  border-radius: 4px;
  font: inherit;
  resize: vertical;
`;

const StyledNewOutivitiesImageInput = styled.input`
  padding: 3px;
  border: 1px solid var(--neutral-color);
  border-radius: 4px;
  font: inherit;
  resize: vertical;
`;

const StyledNewOutivitiesFormTextarea = styled.textarea`
  padding: 20px;
  border: 1px solid var(--neutral-color);
  border-radius: 4px;
  font: inherit;
  resize: vertical;
`;

const StyledNewOutivitiesFormSpan = styled.span`
  height: 60px;
  text-align: center;
  margin-bottom: 30px;
`;

const StyledCancelButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-weight: 400;
  font-size: 16px;
  border-radius: 5px;
  border: transparent;
  color: var(--secondary-color);
  background-color: var(--neutral-color);
  &:hover {
    cursor: pointer;
  }
  box-shadow: var(--lightgray-color) 1px 2px 2px 0;
`;

const StyledSaveButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-weight: 500;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  color: var(--neutral-color);
  background-color: var(--third-color);
  letter-spacing: 1px;
  &:hover {
    cursor: pointer;
  }
  box-shadow: var(--lightgray-color) 1px 2px 2px 0;
`;

const StyledFormPreviewImage = styled(Image)`
  width: 150px;
  height: auto;
`;

const StyledFormRemoveButton = styled.button`
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  font-weight: 400;
  width: 150px;
  border: none;
  color: var(--secondary-color);
  background-color: var(--neutral-color);
  box-shadow: var(--lightgray-color) 1px 2px 2px 0;
  &:hover {
    cursor: pointer;
  }
`;

const StyledWarningMessage = styled.div`
  color: var(--danger-textcolor);
  font-size: smaller;
`;

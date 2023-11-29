import styled from "styled-components";
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";

export default function OutivityForm({
  outivity,
  onEditOutivity,
  createOutivity,
  isEdit,
}) {
  const router = useRouter();
  const inputRef = useRef(null);

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
              defaultValue={isEdit ? outivity.title ?? "" : null}
            />
          </StyledNewOutivitiesFormField>
          <StyledNewOutivitiesFormField>
            <label htmlFor="outivityImage">Image</label>

            <StyledNewOutivitiesFormInput
              type="text"
              name="outivityImage"
              id="outivityImage"
              placeholder="Insert a url from unsplash..."
              required
              defaultValue={isEdit ? outivity.image ?? "" : null}
            />
          </StyledNewOutivitiesFormField>
          <StyledNewOutivitiesFormField>
            <label htmlFor="outivityArea">Area</label>
            <StyledNewOutivitiesFormInput
              type="text"
              name="outivityArea"
              id="outivityArea"
              placeholder="In which city/area is it located?"
              required
              defaultValue={isEdit ? outivity.area ?? "" : null}
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
              defaultValue={isEdit ? outivity.country ?? "" : null}
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
              defaultValue={isEdit ? outivity.description ?? "" : null}
            />
          </StyledNewOutivitiesFormField>
          <StyledNewOutivitiesFormSpan>
            <StyledCancelButton type="button" onClick={handleCancel}>
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

const StyledNewOutivitiesFormInput = styled.input`
  padding: 20px;
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

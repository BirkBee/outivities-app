import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { uid } from "uid";
import Image from "next/image";

export default function CreateOutivity({ handleAddOutivity, selectedImage }) {
  const router = useRouter();
  function CreateOutivity(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newOutivity = {
      id: uid(),
      title: data.outivityName,
      area: data.outivityArea,
      country: data.outivityCountry,
      image: data.myImage,
      description: data.outivityDescription,
    };

    handleAddOutivity(newOutivity);
    // event.target.reset();

    router.push("/");
  }
  const [selctedImage, setSelectedImage] = useState(null);
  return (
    <main>
      <StyledNewOutivitiesForm onSubmit={CreateOutivity}>
        <h1>New Outivity</h1>
        <StyledNewOutivitiesFormFields>
          <StyledNewOutivitiesFormField>
            <label htmlFor="image">Image</label>
            {/* <Image src="image" alt="title" width={300} height={200} /> */}
            {selectedImage && (
              <>
                <Image
                  href={`/${outivity.id}`}
                  src={URL.createObjectURL(selectedImage)}
                  alt="outivity-image"
                  name="outivityImage"
                  width={300}
                  height={200}
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
            <StyledCancelButton as={Link} href="/">
              cancel
            </StyledCancelButton>
            <StyledSaveButton
              type="submit"
              // onClick={() => {
              //   router.push("/");
              // }}
            >
              save
            </StyledSaveButton>
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
  &:hover {
    cursor: pointer;
  }
`;

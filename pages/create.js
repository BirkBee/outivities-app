import NewOutivityForm from "@/components/NewOutivityForm";
import { useRouter } from "next/router";
import { useState } from "react";
import { uid } from "uid";

export default function CreateOutivity({ handleAddOutivity }) {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", selectedImage);
  };

  const handleCancel = () => {
    const confirmed = window.confirm("Are you sure you want to cancel?");
    if (confirmed) {
      router.push("/");
    }
  };

  async function createOutivity(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error uploading new Outivity. Please try again.");
      }
      const image = await response.json();
      const newOutivity = {
        id: uid(),
        title: data.outivityName,
        area: data.outivityArea,
        country: data.outivityCountry,
        image: image.secure_url,
        description: data.outivityDescription,
      };

      setSelectedImage(image);
      handleAddOutivity(newOutivity);
      router.push("/");
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      <NewOutivityForm
        createOutivity={createOutivity}
        handleCancel={handleCancel}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </>
  );
}

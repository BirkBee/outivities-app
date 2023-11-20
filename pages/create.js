import NewOutivityForm from "@/components/NewOutivityForm";
import { useRouter } from "next/router";
import { useState } from "react";
import { uid } from "uid";

export default function CreateOutivity({ handleAddOutivity }) {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCancel = () => {
    const confirmed = window.confirm("Are you sure you want to cancel?");
    if (confirmed) {
      router.push("/");
    }
  };

  function createOutivity(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    setSelectedImage(data.outivityImage);

    const newOutivity = {
      id: uid(),
      title: data.outivityName,
      area: data.outivityArea,
      country: data.outivityCountry,
      image: data.outivityImage,
      description: data.outivityDescription,
    };

    handleAddOutivity(newOutivity);
    router.push("/");
  }

  return (
    <>
      <NewOutivityForm
        CreateOutivity={createOutivity}
        handleCancel={handleCancel}
        selectedImage={selectedImage}
      />
    </>
  );
}

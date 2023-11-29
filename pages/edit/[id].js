import { useRouter } from "next/router";
import OutivityForm from "@/components/OutivityForm";
import { useState } from "react";

export default function UpdateOutivityDetails({ outivities, onEditOutivity }) {
  const router = useRouter();
  const { id } = router.query;
  const [selectedImage, setSelectedImage] = useState("");

  const outivity = outivities.find((outivity) => outivity.id === id);

  if (!outivity) return <h2>Sorry. Outivity not found.</h2>;

  function handleEditOutivity(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newOutivityData = Object.fromEntries(formData);
    const editedNewOutivityData = prepareFormData(newOutivityData);

    onEditOutivity(editedNewOutivityData, id);
    router.push(`/${id}`);
  }

  function prepareFormData(data) {
    const editedNewOutivityData = {
      id: id,
      title: data.outivityName,
      area: data.outivityArea,
      country: data.outivityCountry,
      image: image.secure_url,
      description: data.outivityDescription,
    };
    setSelectedImage(image);

    return editedNewOutivityData;
  }

  return (
    <OutivityForm
      outivity={outivity}
      selectedImage={selectedImage}
      setSelectedImage={setSelectedImage}
      onEditOutivity={handleEditOutivity}
      isEdit={true}
    />
  );
}

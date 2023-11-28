import { useRouter } from "next/router";
import OutivityForm from "@/components/OutivityForm";

export default function UpdateOutivityDetails({ outivities, onEditOutivity }) {
  const router = useRouter();
  const { id } = router.query;

  const outivity = outivities.find((outivity) => outivity.id === id);

  if (!outivity) return <h2>Sorry. Outivity not found.</h2>;

  function handleEditOutivity(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newOutivityData = Object.fromEntries(formData);
    const editedNewOutivityData = prepareFormData(newOutivityData);

    onEditOutivity(editedNewOutivityData, id);
    router.push("/");
  }

  function prepareFormData(data) {
    const editedNewOutivityData = {
      id: id,
      title: data.outivityName,
      area: data.outivityArea,
      country: data.outivityCountry,
      image: data.outivityImage,
      description: data.outivityDescription,
    };
    return editedNewOutivityData;
  }

  return (
    <OutivityForm
      outivity={outivity}
      onEditOutivity={handleEditOutivity}
      isEdit={true}
    />
  );
}

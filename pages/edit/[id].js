import { useRouter } from "next/router";
import NewOutivityForm from "@/components/NewOutivityForm";

export default function UpdateRecipeDetails({
  outivities,
  isEdit,
  onSetisEdit,
  onEditOutivity,
}) {
  const router = useRouter();
  const { id } = router.query;

  const outivity = outivities.find((outivity) => outivity.id === id);
  if (!outivity) return <h2>Sorry. Outivity not found.</h2>;

  function editOutivity(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const editedOutivity = {
      id: uid(),
      title: data.outivityName,
      area: data.outivityArea,
      country: data.outivityCountry,
      image: data.outivityImage,
      description: data.outivityDescription,
    };

    onEditOutivity(editedOutivity);
    onSetisEdit();
  }

  return (
    <>
      <NewOutivityForm
        outivities={outivities}
        onEditOutivity={onEditOutivity}
        isEdit={true}
      />
    </>
  );
}

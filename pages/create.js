import OutivityForm from "@/components/OutivityForm";
import { useRouter } from "next/router";
import { uid } from "uid";

export default function CreateOutivity({ onAddOutivity }) {
  const router = useRouter();

  function createOutivity(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newOutivity = {
      id: uid(),
      title: data.outivityName,
      area: data.outivityArea,
      country: data.outivityCountry,
      image: data.outivityImage,
      description: data.outivityDescription,
    };

    onAddOutivity(newOutivity);
    router.push("/");
  }

  return <OutivityForm createOutivity={createOutivity} isEdit={false} />;
}

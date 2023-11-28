import { useRouter } from "next/router";
import OutivityDetail from "@/components/OutivityDetail";

export default function OutivityDetailsPage({ outivities, onDeleteOutivity }) {
  const router = useRouter();
  const { id } = router.query;
  const outivity = outivities.find((outivity) => outivity.id === id);

  if (!outivity) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <OutivityDetail outivity={outivity} onDeleteOutivity={onDeleteOutivity} />
    </>
  );
}

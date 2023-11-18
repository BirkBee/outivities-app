import { useRouter } from "next/router";
import OutivityDetail from "@/components/OutivityDetail";
import { initialOutivities } from "@/lib/data";

export default function OutivityDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const outivity = initialOutivities.find((outivity) => outivity.id === id);
  console.log(outivity);
  if (!outivity) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <OutivityDetail outivity={outivity} />
    </>
  );
}

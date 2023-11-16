import { useRouter } from "next/router";
import Head from "next/head";

export default function OutivityDetail({ outivities }) {
  const router = useRouter();
  const { slug } = router.query;
  const outivity = outivities.find((outivity) => outivity.slug === slug);
  console.log(outivity);
  /* if (!outivity) {
    return <p>Loading...</p>;
  } */
  return (
    <>
      <Head>
        <title title={outivity.title}>{outivity.title}</title>
      </Head>
      <ul>
        <li></li>
      </ul>
    </>
  );
}

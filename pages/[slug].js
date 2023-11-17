import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { StyledOutivityImage } from "@/components/OutivityImage/StyledOutivityImage";

export default function OutivityDetail({ outivities }) {
  const router = useRouter();
  const { slug } = router.query;
  const outivity = outivities.find((outivity) => outivity.slug === slug);

  if (!outivity) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>{outivity.title}</title>
      </Head>
      <main>
        <article>
          <ul>
            <li>
              <h2>{outivity.title}</h2>
              <StyledOutivityImage
                src={outivity.image}
                alt={outivity.title}
                width={300}
                height={200}
              />
              <p>
                <strong>Location: </strong> {outivity.area},
                <StyledCountryName>{outivity.country}</StyledCountryName>
              </p>

              <p>
                <strong>Description: </strong> {outivity.description}
              </p>
            </li>
          </ul>
        </article>
      </main>
    </>
  );
}
const StyledCountryName = styled.span`
  margin-left: 7px;
`;

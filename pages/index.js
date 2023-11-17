import Image from "next/image";
import styled from "styled-components";
import Head from "next/head";
import { outivities } from "@/lib/data";
import Link from "next/link";
import { StyledOutivityImage } from "@/components/OutivityImage/StyledOutivityImage";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>My Outivities</title>
      </Head>

      <StyledTitle>All Outivities</StyledTitle>
      <main>
        <article>
          <StyledOutivityCardContainer>
            {outivities.map((outivity) => (
              <StyledOutivityCard key={outivity.id}>
                <Link
                  href={{
                    pathname: `[slug]`,
                    query: { slug: outivity.slug },
                  }}
                >
                  <StyledOutivityImage
                    src={outivity.image}
                    alt={outivity.title}
                    width={300}
                    height={200}
                  />
                </Link>
                <StyledOutivityTitle>{outivity.title}</StyledOutivityTitle>
                <StyledOutivityCityName>
                  in {outivity.area}
                </StyledOutivityCityName>
              </StyledOutivityCard>
            ))}
          </StyledOutivityCardContainer>
        </article>
      </main>
    </>
  );
}

const StyledTitle = styled.h1`
  display: grid;
  height: 2em;
  place-content: center;
  background-color: var(--primary-color);
  color: var(--neutral-color);
`;

const StyledOutivityCardContainer = styled.ul`
  display: grid;
  padding: 20px;
  place-content: center;
  gap: 50px;
`;

const StyledOutivityCard = styled.li`
  position: relative;
  place-content: center;
  max-width: 640px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: var(--neutral-color) 0px 2px 1px, var(--neutral-color) 0px 4px 2px,
    var(--neutral-color) 0px 8px 4px, var(--neutral-color) 0px 16px 8px,
    var(--neutral-color) 0px 32px 16px;
`;

const StyledOutivityTitle = styled.h2`
  margin: 10px 20px 0px 20px;
`;

const StyledOutivityCityName = styled.p`
  margin: 0px 20px 20px 20px;
`;

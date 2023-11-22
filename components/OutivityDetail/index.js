import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";

export default function OutivityDetail({ outivity }) {
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

const StyledOutivityImage = styled(Image)`
  overflow: clip;
  overflow-clip-margin: content-box;
  height: auto;
`;

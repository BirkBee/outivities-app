import styled from "styled-components";
import Link from "next/link";
import { StyledOutivityImage } from "../OutivityImage/StyledOutivityImage";

export default function OutivitiesListItem({ outivity }) {
  return (
    <StyledOutivityCard>
      <Link href={`/${outivity.id}`}>
        <StyledOutivityImage
          src={outivity.image}
          alt={outivity.title}
          width={300}
          height={200}
        />
      </Link>
      <StyledOutivityTitle>{outivity.title}</StyledOutivityTitle>
      <StyledOutivityCityName>in {outivity.area}</StyledOutivityCityName>
    </StyledOutivityCard>
  );
}

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

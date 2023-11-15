import { createGlobalStyle } from "styled-components";
import { Poppins } from "next/font/google";
import { Gochi_Hand } from "next/font/google";
import { Pacifico } from "next/font/google";

export const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export const gochiHand = Gochi_Hand({
  weight: "400",
  subsets: ["latin"],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-color: #172633;
    --secondary-color-blue: #252629;
    --third-color: #08A689;
    --primary-color-hover: #FFBC0A;
    --neutral-color: #E5E5E5;

    @media (max-width: 599px) {font-size: 16px;}
    @media (min-width: 600px) {font-size: 18px;}
    @media (min-width: 1200px) {font-size: 20px;}
  }


  body {
    margin: 0;
    font-family: ${poppins.style.fontFamily};
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1 {
    font-family: ${pacifico.style.fontFamily};
    letter-spacing: 2px;
  }

`;

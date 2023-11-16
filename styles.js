import { createGlobalStyle } from "styled-components";
import { Poppins } from "next/font/google";
import { Rubik } from "next/font/google";

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const poppins200 = Poppins({
  weight: "200",
  subsets: ["latin"],
});

export const rubik = Rubik({
  weight: "600",
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

    @media (max-width: 599px) {font-size: 14px;}
    @media (min-width: 600px) {font-size: 16px;}
    @media (min-width: 1200px) {font-size: 18px;}
  }


  body {
    font-family: ${poppins.style.fontFamily};

  }

  main {
    overflow-y: auto;
    padding: 0;
    margin: 30px;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1 {
    font-family: ${rubik.style.fontFamily};
    letter-spacing: 2px;
  }
  
  p {
    font-family: ${poppins.style.fontFamily};
  }

`;

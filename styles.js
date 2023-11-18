import { createGlobalStyle } from "styled-components";
import { Poppins } from "next/font/google";
import { Chivo } from "next/font/google";

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const chivo = Chivo({
  weight: ["800"],
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
    --secondary-color: #323332;
    --third-color: #0C71E0;
    --forth-color: #08A689;
    --neutral-color: #E5E5E5;

    @media (max-width: 599px) {font-size: 14px;}
    @media (min-width: 600px) {font-size: 16px;}
    @media (min-width: 1200px) {font-size: 18px;}
  }


  body {
    font-family: ${poppins.style.fontFamily};
    margin: 0px 0px 70px 0px;
  }

  main {
    overflow-y: auto;
    padding: 0;
    margin: 15px 35px 0px 35px;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1 {
    font-family: ${chivo.style.fontFamily};
    font-size: 36px;
  }
  
  p {
    font-family: ${poppins.style.fontFamily};
  }

`;

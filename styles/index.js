import emotionReset from "emotion-reset";
import { css, Global } from "@emotion/core";

export const globalStyle = (
  <Global
    styles={css`
      ${emotionReset}

      :root {
        /*Fuentes*/
        --textBold: 700;
        --fontFamilyPrimary: monospace;
        /*Colores*/
        --colorPrimary: #005a00;
        --colorPrimaryLight: #3f8831;
        --colorPrimaryDark: #002f00;
        --colorSecondary: #00ff00;
        --colorSecondaryLight: #70ff56;
        --colorSecondaryDark: #00ca00;
        --colorSecondaryLightOpacity: rgba(112, 225, 86, 0.5);
        --colorTextPrimary: #000;
        --colorLine: #444444;
        --colorBG: #212428;
        /*Ancho de contenedores*/
        --widthContainer: 1000px;
        /*Prioridad de visibilidad*/
        --z-back: -10;
        --z-nomal: 1;
        --z-tooltip: 10;
        --z-fixed: 100;
        --z-modal: 1000;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
        font-family: monospace;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        font-size: 16px;
      }

      p {
        padding-bottom: 0.5em;
        line-height: 1.5;
        word-spacing: 2px;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: var(--textBold);
      }

      h1 {
        font-size: 32px;
      }

      h2 {
        font-size: 28px;
      }

      h3 {
        font-size: 20px;
      }

      a {
        font-size: 13px;
        text-decoration: none;
      }

      .active-itemnav {
        text-shadow: 3px 2px 1px var(--colorSecondaryLightOpacity);
      }

      .scrolled {
        position: fixed !important;
        left: 0 !important;

        @media screen and (max-width: 500px) {
          left: -100% !important;
        }
      }

      @media screen and (max-width: 700px) {
        h1 {
          font-size: 25px;
        }
        h2 {
          font-size: 18px;
        }
        h3 {
          font-size: 16px;
        }
      }
    `}
  />
);

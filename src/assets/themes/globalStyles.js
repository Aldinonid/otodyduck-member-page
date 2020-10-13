import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  height: 100%;
}

@font-face{
  font-family: Poppins;
  src: url('../fonts/Poppins-Regular.ttf');
  font-style: normal;
  font-weight: normal;
}

@font-face{
  font-family: Poppins;
  src: url('../fonts/Poppins-Italic.ttf');
  font-style: italic;
  font-weight: normal;
}

@font-face{
  font-family: Poppins;
  src: url('../fonts/Poppins-Bold.ttf');
  font-style: normal;
  font-weight: bold;
}

@font-face{
  font-family: Poppins;
  src: url('../fonts/Poppins-BoldItalic.ttf');
  font-style: italic;
  font-weight: bold;
}

*{
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif
}

`;

export default GlobalStyle;

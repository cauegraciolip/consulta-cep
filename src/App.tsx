import { Consulta } from "./Consulta";
import { css, globalCss, styled } from "@stitches/react";

const globalStyles = globalCss({
  body: {
    margin: 0,
    padding: 0,
  },

  h1: {
    all: "unset",
  },
});

const main = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100vh",
  backgroundColor: "#072442",
  opacity: 1,
  backgroundImage:
    "linear-gradient(135deg, #0d2e51 25%, transparent 25%), linear-gradient(225deg, #0d2e51 25%, transparent 25%), linear-gradient(45deg, #0d2e51 25%, transparent 25%), linear-gradient(315deg, #0d2e51 25%, #072442 25%)",
  backgroundPosition: "4px 0, 4px 0, 0 0, 0 0",
  backgroundSize: "4px 4px",
  backgroundRepeat: "repeat",
});

const container = css({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  gap: 20,
  padding: "20px 15px",
  backgroundColor: "#F4F4F9",
  borderRadius: 6,
  boxShadow:
    "rgba(187, 187, 211, 0.25) 0px 2px 5px -1px, rgba(190, 183, 183, 0.3) 0px 1px 3px -1px",
});

const Title = styled("h1", {
  display: "block",
  fontSize: 32,
  color: "#FF4000",
  fontFamily: "monospace",
  fontWeight: "bold",
});

const Span = styled("span", {
  display: "block",
  fontSize: 18,
  color: "#151515",
  fontFamily: "sans-serif",
  fontWeight: "normal",
});

function App() {
  globalStyles();
  return (
    <main className={main()}>
      <div className={container()}>
        <Title>Consulta CEP</Title>
        <Span>Digite um número de CEP e veja suas informações!</Span>
        <div>
          <Consulta />
        </div>
      </div>
    </main>
  );
}

export default App;

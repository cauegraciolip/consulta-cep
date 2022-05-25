import { useRef, useState } from "react";
import { css, globalCss, styled } from "@stitches/react";

type CEP = {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
};

const Div = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "sans-serif",
  fontSize: 14,
  color: "#151515",
});

const Text = styled("p", {
  fontFamily: "sans-serif",
  fontSize: 14,
  fontWeight: "bold",
  margin: 0,
  padding: 5,
});

const Input = styled("input", {
  width: "100%",
  border: "1px solid #798086",
  fontSize: 14,
  color: "#151515",
  fontFamily: "sans-serif",
  padding: "10px 15px",
  borderRadius: 6,
  "&:focus": {
    border: "1px solid #297373",
    outline: "none",
  },
});

const Button = styled("button", {
  border: "none",
  width: "100%",
  backgroundColor: "#33CA7F",
  padding: "10px 15px",
  borderRadius: 6,
  color: "#f6f6f6",
  margin: "10px 0px",
  "&:hover": {
    cursor: "pointer",
  },
});

export function Consulta() {
  const [local, setLocal] = useState<CEP>();
  const [error, setError] = useState<string>("Ainda não temos informações");

  function findCep(e: { target: { value: string } }): void | object {
    const cep = e.target.value.replace(/\D/g, "");
    if (cep.length != 8) return setError("O CEP deve conter 8 digítos");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => setLocal(data))
      .catch((er) => console.log(er));

    const input = document.getElementById("input-cep") as HTMLInputElement;

    input.value = "";
  }

  return (
    <>
      <Text
        style={{ textAlign: "left", paddingLeft: "10px", fontSize: "16px" }}
      >
        CEP
      </Text>
      <Div>
        <Input
          id="input-cep"
          type="text"
          placeholder="Digite um CEP somente com números"
          onBlur={findCep}
        />
      </Div>
      <Button id="btnBuscar">BUSCAR</Button>
      {local != undefined ? (
        <>
          <Div>
            <Text>Logradouro:</Text> {local.logradouro}
          </Div>
          <Div>
            <Text>Bairro:</Text> {local.bairro}
          </Div>
          <Div>
            <Text>Cidade:</Text> {local.localidade}
          </Div>
          <Div>
            <Text>UF:</Text> {local.uf}
          </Div>
        </>
      ) : (
        <Text>{error}</Text>
      )}
    </>
  );
}

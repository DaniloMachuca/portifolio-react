import styled from "styled-components";

type BotaoProps = {
  principal: boolean;
  fontSize?: string;
};

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? "red" : "blue")};
  color: white;
  font-size: ${(props) => props.fontSize || "16px"};
`;

const BotaoDiferente = styled(Botao)`
  background-color: green;

  span {
    text-decoration: line-through;
  }
`;

function Test() {
  return (
    <>
      <Botao fontSize="20px" principal>
        Olá
      </Botao>
      <Botao principal={false}>Olá</Botao>
      <BotaoDiferente as="a" principal={false}>
        <span>Meu deus</span>
      </BotaoDiferente>
    </>
  );
}

export default Test;

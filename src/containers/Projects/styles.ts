import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 36px;
  row-gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 16px;
    column-gap: 0;
  }
`;

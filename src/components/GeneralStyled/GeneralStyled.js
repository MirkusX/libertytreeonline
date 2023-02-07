import styled from "styled-components";

export const EightyWidthSection = styled.section`
  width: 70%;
  margin: 0 auto;
  ${(props) => {
    if (props.white)
      return `
    background: white;`;
  }}
`;

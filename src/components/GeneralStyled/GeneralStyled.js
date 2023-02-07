import styled from "styled-components";

//general stylings
export const EightyWidthSection = styled.section`
  width: 70%;
  margin: 0 auto;
  ${(props) => {
    if (props.white)
      return `
    background: white;`;
  }}
`;

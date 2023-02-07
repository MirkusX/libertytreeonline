import styled from "styled-components";

//article stylings
export const Divider = styled.div`
  width: 100%;
  background-color: black;
  height: 0.5em;
  margin-bottom: 1em;
`;

export const NavBar = styled.div`
  width: 100%;
  border-bottom: 5px #cbb69e solid;
  height: fit-content;
  display: flex;
  justify-content: space-between;
`;

export const NavButtons = styled.button`
  background-color: #cbb69e;
  border: none;
  padding: 0 1em;
  font-size: 1.4rem;
  ${(props) => {
    if (props.active)
      return `
    background: black;
    color: white;`;
  }}
`;

export const FrontPageSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 1em 1em 0 1em;
  font-family: Arial, Helvetica, sans-serif;
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  ${(props) => {
    if (props.textAlignLeft)
      return `
    text-align: left;
    margin-right: 1em;`;
  }}
`;

export const AlsoDiv = styled.div`
  background: #999999;
  ${(props) => {
    if (props.overflow)
      return `
    padding-right: 4em;
  font-size: 1.25rem;
  text-align: left;
  margin-bottom: 1em;
  height: 217.6px;
  overflow: auto;
  white-space: nowrap;
    `;
  }}
`;

export const LibertyImg = styled.img`
  width: 100%;
`;

export const ExclusiveP = styled.p`
  font-size: 1.5rem;
`;

export const AlsoUL = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const BlackDiv = styled.div`
  background: black;
  color: white;
  padding: 0 0.5em;
  width: fit-content;
`;

export const AlsoLi = styled.li`
  margin: 1em 0;
  &::before {
    content: "▶ ";
  }
`;

export const AlsoH2 = styled.h2`
  margin: 0;
`;

export const MarginLeftDiv = styled.div`
  margin-left: 1em;
`;

export const StyledArticle = styled.article`
  text-align: left;
  width: 70%;
  margin-right: 1em;
`;

export const ArticleH1 = styled.h1`
  font-size: 2rem;
`;

export const ArticleH2 = styled.h2`
  font-size: 1.5rem;
`;

export const ArticleP = styled.p`
  font-size: 1.25rem;
`;

import { Route, Routes } from "react-router";
import { EightyWidthSection } from "../../components/GeneralStyled/GeneralStyled";
import {
  AlsoDiv,
  AlsoH2,
  AlsoLi,
  AlsoUL,
  BlackDiv,
  Divider,
  FrontPageSection,
  LibertyImg,
  NavBar,
  NavButtons,
} from "../../components/LibertyTreeStyled/LibertyTreeStyled";
import LibertyTreeLogo from "../../images/LibertyTreeLogo.png";
import { LibertyTreeLandingPage } from "./LibertyTreeLandingPage";
import autoeroticaad from "../../images/autoeroticaad.png";
import { LibertyTreeArticlePage } from "./LibertyTreeArticlePage";
import { Link } from "react-router-dom";
import { LibertyTreeLinks } from "./LibertyTreeArticles";

export const LibertyTreeFrontpage = () => {
  return (
    <EightyWidthSection white>
      <Link to="/">
        <LibertyImg src={LibertyTreeLogo} alt="logo" />
      </Link>
      <h1>YESTERDAY'S NEWS TODAY</h1>
      <Divider />
      <NavBar>
        <NavButtons active>NEWS</NavButtons>
        <NavButtons>SPORTS</NavButtons>
        <NavButtons>BUSINESS</NavButtons>
        <NavButtons>ENTERTAINMENT</NavButtons>
        <NavButtons>LOTTO</NavButtons>
        <NavButtons>WEATHER</NavButtons>
      </NavBar>
      <FrontPageSection>
        <Routes>
          <Route path="*" element={<LibertyTreeLandingPage />} />
          <Route path="/:link" element={<LibertyTreeArticlePage />} />
        </Routes>
        <div>
          <AlsoDiv>
            <BlackDiv>
              <AlsoH2>ALSO...</AlsoH2>
            </BlackDiv>
          </AlsoDiv>
          <AlsoDiv overflow>
            <AlsoUL>
              {/* map for article links */}
              {LibertyTreeLinks.map((item, index) => {
                return (
                  <AlsoLi key={index}>
                    <Link to={item}>{item}</Link>
                  </AlsoLi>
                );
              })}
            </AlsoUL>
          </AlsoDiv>
          <div>
            <LibertyImg src={autoeroticaad} />
          </div>
        </div>
      </FrontPageSection>
    </EightyWidthSection>
  );
};

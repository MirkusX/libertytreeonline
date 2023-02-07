import { useEffect, useState } from "react";
import {
  AlsoH2,
  BlackDiv,
  ExclusiveP,
  FlexDiv,
  LibertyImg,
} from "../../components/LibertyTreeStyled/LibertyTreeStyled";
import lcpdad from "../../images/lcpdad.png";
import medicatemead from "../../images/medicatemead.png";
import { LibertyTreeArticles, LibertyTreeLinks } from "./LibertyTreeArticles";

export const LibertyTreeLandingPage = () => {
  return (
    <article>
      <FlexDiv textAlignLeft>
        <LibertyImg src={LibertyTreeArticles["Arson In Broker"].Image} />
        <div>
          <BlackDiv>
            <AlsoH2>EXCLUSIVE</AlsoH2>
          </BlackDiv>
          <ExclusiveP>
            {LibertyTreeArticles["Arson In Broker"].Title}
          </ExclusiveP>
          <ExclusiveP>
            {LibertyTreeArticles["Arson In Broker"].Subtitle}
          </ExclusiveP>
        </div>
      </FlexDiv>
      <FlexDiv>
        <div>
          <BlackDiv>
            <h2>LCPD BLOTTER</h2>
          </BlackDiv>
          <LibertyImg src={lcpdad} />
        </div>
        <div>
          <BlackDiv>
            <h2>TV TONIGHT!</h2>
          </BlackDiv>
          <LibertyImg src={medicatemead} />
        </div>
      </FlexDiv>
    </article>
  );
};

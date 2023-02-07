import { useParams } from "react-router-dom";
import {
  ArticleH1,
  ArticleH2,
  ArticleP,
  StyledArticle,
} from "../../components/LibertyTreeStyled/LibertyTreeStyled";
import { LibertyTreeArticles } from "./LibertyTreeArticles";

export const LibertyTreeArticlePage = () => {
  const { link } = useParams();
  console.log(link);
  return (
    <StyledArticle>
      <ArticleH1>{LibertyTreeArticles[link].Title}</ArticleH1>
      <ArticleH2>{LibertyTreeArticles[link].Subtitle}</ArticleH2>
      <ArticleP>{LibertyTreeArticles[link].Author}</ArticleP>
      <img src={LibertyTreeArticles[link].Image} />
      <ArticleP>{LibertyTreeArticles[link].Article}</ArticleP>
    </StyledArticle>
  );
};

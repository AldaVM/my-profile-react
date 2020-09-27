import CustomHead from "../CustomHead";
import { Main, Container } from "../Main";
import Header from "../Header";
import FooterSite from "../Footer";

export default function MyLayout({ children, headers }) {
  const { title, ogImage } = headers;

  return (
    <>
      <CustomHead title={title} ogImage={ogImage} />
      <Container>
        <Header />
        <Main>{children}</Main>
        <FooterSite />
      </Container>
    </>
  );
}

import { Container, SubTitle, CardWork, GridCards } from "../../../common";

export default function SkillsSection() {
  const work = {
    title: "Cheese Socks - Página Web",
    slug: "cheese-socks-web",
    coverImage: {
      default: "/assets/blog/cover.png",
      medium: "/assets/blog/cover.png",
    },
    description:
      "Diseño y desarrolo de la página web, además de crear un CMS para gestionar contenido.",
  };

  return (
    <Container>
      <SubTitle title="Portafolio" />
      <GridCards>
        <CardWork {...work} />
        <CardWork {...work} />
      </GridCards>
    </Container>
  );
}

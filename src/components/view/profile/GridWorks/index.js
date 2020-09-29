import { Container, SubTitle, CardWork, GridCards } from "../../../common";

export default function GridWorks() {
  const work = {
    title: "Cheese Socks - Página Web",
    slug: "cheese-socks-web",
    coverImage: {
      default: "/assets/blog/cover.png",
      medium: "/assets/blog/cover.png",
    },
    description:
      "Página basada en Shopifiy, se desarrollo un tema personalizado, además, de implementar aplicaciones custom para la plataforma.",
  };

  return (
    <Container id="portfolio">
      <SubTitle title="Portafolio" />
      <GridCards>
        <CardWork {...work} />
      </GridCards>
    </Container>
  );
}

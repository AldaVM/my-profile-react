import { Console, Container, SubTitle } from "../../../common";

export default function SkillsSection() {
  return (
    <Container id="skills">
      <SubTitle title="Habilidades" />
      <p>
        Para ver mis habilidades, por favor ejecuta la siguiente línea: node
        skills.js
      </p>
      <Console title="npm" />
    </Container>
  );
}

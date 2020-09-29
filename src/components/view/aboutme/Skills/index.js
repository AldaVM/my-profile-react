import { Console, Container, SubTitle } from "../../../common";
import { MY_SKILLS } from "../../../../consts";

export default function SkillsSection() {
  return (
    <Container>
      <SubTitle title="Habilidades" />
      <p>
        Para ver mis habilidades, por favor ejecuta la siguiente línea: node
        skills.js
      </p>
      <Console title="npm" />
    </Container>
  );
}

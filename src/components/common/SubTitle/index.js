import { DividerTitle, LineTitle, Title } from "./Styled";

export default function SubTitle({ title }) {
  return (
    <DividerTitle>
      <LineTitle />
      <Title>{title}</Title>
      <LineTitle />
    </DividerTitle>
  );
}

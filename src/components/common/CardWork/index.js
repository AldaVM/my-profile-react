import CoverImage from "../CoverImage";
import { WrapperCard } from "../Card";
import { ContentCardWork } from "./Styled";

export default function CardWork({ title, coverImage, description }) {
  return (
    <WrapperCard>
      <CoverImage title={title} src={coverImage} />
      <ContentCardWork>
        <h3>{title}</h3>
        <p>{description}</p>
      </ContentCardWork>
    </WrapperCard>
  );
}

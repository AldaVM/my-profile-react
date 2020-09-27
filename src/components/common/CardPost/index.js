import CoverImage from "../CoverImage";
import FormatImage from "../FormatImage";
import { WrapperCard } from "../Card";
import {
  HeaderCardPost,
  FooterCardPost,
  Tag,
  WrapperImagePost,
} from "./Styled";

export default function CardPost({
  title,
  slug,
  coverImage,
  author,
  date,
  timeRead,
  tag,
}) {
  return (
    <WrapperCard>
      <HeaderCardPost>
        <h3>{title}</h3>
      </HeaderCardPost>

      <WrapperImagePost>
        <CoverImage title={title} src={coverImage} slug={slug} />
        <Tag>{tag}</Tag>
      </WrapperImagePost>

      <FooterCardPost>
        <FormatImage
          size="45px"
          picture={author.picture}
          description="Foto Aldair Valencia"
          square="true"
        />
        <div>
          <h4>{author.name}</h4>
        </div>

        <div>
          <span className="text-right">{date}</span>
          <span className="text-right">{timeRead}</span>
        </div>
      </FooterCardPost>
    </WrapperCard>
  );
}

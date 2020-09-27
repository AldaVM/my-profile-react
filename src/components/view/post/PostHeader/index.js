import PostTitle from "../PostTitle";
import { Author, CoverImage } from "../../../common";
import { PostHeaderDescription } from "./Styled";

export default function PostHeader({ title, author, coverImage, date }) {
  return (
    <div>
      <CoverImage title={title} src={coverImage} />
      <PostHeaderDescription>
        <PostTitle>{title}</PostTitle>
        <Author {...author} date={date} />
      </PostHeaderDescription>
    </div>
  );
}

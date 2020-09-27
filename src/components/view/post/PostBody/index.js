import { PostBodyWrapper } from "./Styled";

export default function PostBody({ content }) {
  return (
    <PostBodyWrapper>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </PostBodyWrapper>
  );
}

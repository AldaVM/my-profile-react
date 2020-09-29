import PostBody from "./PostBody";
import PostHeader from "./PostHeader";
import { Article } from "./Styled";
import { useContext } from "react";
import ThemeContext from "../../../stateManagement/store/themeContext";
import GridBlog from "../blog/GridBlogs";
import { Section } from "../../common";

export default function ArticleBlog({ post, posts }) {
  const { theme } = useContext(ThemeContext);

  return (
    <Article bg={theme.background} fontColor={theme.foreground}>
      <PostHeader
        title={post.title}
        author={post.author}
        coverImage={post.coverImage}
        date={post.date}
      />
      <PostBody content={post.content} />
      <Section bg={theme.background} foreground={theme.foreground}>
        <GridBlog previewPosts={posts} />
      </Section>
    </Article>
  );
}

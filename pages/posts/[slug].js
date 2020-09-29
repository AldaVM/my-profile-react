import { useRouter } from "next/router";
import ErrorPage from "next/error";
import MyLayout from "../../src/components/layout/MyLayout";
import { postUtils, markdownToHtml } from "../../src/utils";
import ArticleBlog from "../../src/components/view/post";
import ThemeProvider from "../../src/stateManagement/providers/ThemeProvider";

export default function Post({ post, posts, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <ThemeProvider>
      <MyLayout headers={post}>
        <ArticleBlog post={post} posts={posts} />
      </MyLayout>
    </ThemeProvider>
  );
}

export async function getStaticProps({ params }) {
  const slugs = postUtils.getAllPosts(["slug"]);

  const post = postUtils.getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "description",
    "content",
    "ogImage",
    "coverImage",
  ]);

  const posts = slugs.map((postSlug) => {
    return postUtils.getPostBySlug(postSlug.slug, [
      "title",
      "date",
      "slug",
      "author",
      "timeRead",
      "coverImage",
      "tag",
    ]);
  });

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
      posts,
    },
  };
}

export async function getStaticPaths() {
  const post = postUtils.getAllPosts(["slug"]);

  return {
    paths: post.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

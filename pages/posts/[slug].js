import { useRouter } from "next/router";
import ErrorPage from "next/error";
import MyLayout from "../../src/components/layout/MyLayout";
import { postUtils, markdownToHtml } from "../../src/utils";
import { PostHeader, PostBody } from "../../src/components/view/post";
import ThemeProvider from "../../src/stateManagement/providers/ThemeProvider";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <ThemeProvider>
      <MyLayout headers={post}>
        <article>
          <PostHeader
            title={post.title}
            author={post.author}
            coverImage={post.coverImage}
            date={post.date}
          />
          <PostBody content={post.content} />
        </article>
      </MyLayout>
    </ThemeProvider>
  );
}

export async function getStaticProps({ params }) {
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

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
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

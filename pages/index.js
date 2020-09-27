import MyLayout from "../src/components/layout/MyLayout";
import CardDescription from "../src/components/view/aboutme/CardDescription";
import { postUtils } from "../src/utils";
import ThemeProvider from "../src/stateManagement/providers/ThemeProvider";
import HomePage from "../src/components/view/home";

export default function Home({ posts }) {
  return (
    <ThemeProvider>
      <MyLayout
        headers={{
          title: "Sobre mí",
          ogImage: {
            url: "",
          },
        }}
      >
        <CardDescription />
        <HomePage posts={posts} />
      </MyLayout>
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const slugs = postUtils.getAllPosts(["slug"]);

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

  return {
    props: {
      posts,
    },
  };
}

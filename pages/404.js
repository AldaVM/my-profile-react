import MyLayout from "../src/components/layout/MyLayout";
import ThemeProvider from "../src/stateManagement/providers/ThemeProvider";
import NotFound from "../src/components/view/notfound";

export default function NotFoundPage() {
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
        <NotFound />
      </MyLayout>
    </ThemeProvider>
  );
}

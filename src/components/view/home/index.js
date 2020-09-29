import { Section } from "../../common";
import SkillsSection from "../aboutme/Skills";
import GridBlog from "../blog/GridBlogs";
import GridWorks from "../profile/GridWorks";
import FormContact from "../contactus/FormContact";
import { useContext } from "react";
import ThemeContext from "../../../stateManagement/store/themeContext";

export default function HomePage({ posts = [] }) {
  const { theme } = useContext(ThemeContext);

  return (
    <Section bg={theme?.background} foreground={theme?.foreground}>
      <SkillsSection />
      <GridBlog previewPosts={posts} />
      <GridWorks />
      <FormContact />
    </Section>
  );
}

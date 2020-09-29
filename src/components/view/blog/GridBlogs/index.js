import { SubTitle, CardPost, GridCards } from "../../../common";
import { ContainerGridPost } from "./Styled";

export default function GridBlog({ previewPosts = [] }) {
  return (
    <ContainerGridPost id="myblog">
      <SubTitle title="Publicaciones" />
      <GridCards>
        {previewPosts.map((post, index) => (
          <CardPost {...post} key={index} />
        ))}
      </GridCards>
    </ContainerGridPost>
  );
}

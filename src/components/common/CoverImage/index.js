import Link from "next/link";
import { WrapperPicture } from "./Styled";

export default function CoverImage({ title, src, slug }) {
  const image = (
    <img
      alt={title}
      srcSet={`${src.medium} 600w`}
      sizes="(min-width: 400px) 80vw, 100vw"
    />
  );

  return (
    <WrapperPicture>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </WrapperPicture>
  );
}

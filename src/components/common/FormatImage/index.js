import { ImageCropper, Image } from "./Styled";

export default function FormatImage({
  size,
  picture,
  description,
  square = false,
}) {
  return (
    <ImageCropper size={size} square={square}>
      <Image src={picture} alt={description} width="100%" />
    </ImageCropper>
  );
}

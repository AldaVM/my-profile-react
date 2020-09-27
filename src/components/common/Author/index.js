import { AvatarWrapper, AvatarNick, AvatarDate, AvatarAuthor } from "./Styled";
import { parseISO, format } from "date-fns";
import FormatImage from "../FormatImage";

export default function Avatar({ picture, name, date }) {
  const dateFormat = parseISO(date);

  return (
    <AvatarWrapper>
      <FormatImage size="45px" picture={picture} description={name} />
      <AvatarAuthor>
        <AvatarNick>{name}</AvatarNick>
        <AvatarDate>{format(dateFormat, "LLLL d, yyyy")}</AvatarDate>
      </AvatarAuthor>
    </AvatarWrapper>
  );
}

import { SectionNotFound } from "./Styled";
import { WrapperConsole, BodyConsole } from "../../common/Console/Styled";
import { HeaderTerminal } from "../../common/Console";
import { useContext } from "react";
import ThemeContext from "../../../stateManagement/store/themeContext";

export default function NotFound() {
  const { theme } = useContext(ThemeContext);

  return (
    <SectionNotFound bg={theme.background}>
      <WrapperConsole>
        <HeaderTerminal title="root@aldair-mysite:/not-found" />
        <BodyConsole>
          <pre>
            {` 
 _  _    ___  _  _   
| || |  / _ \\| || |  
| || |_| | | | || |_ 
|__   _| | | |__   _|
   | | | |_| |  | |  
   |_|  \\___/   |_|  `}
          </pre>
          <pre>
            {` 
 _   _  ____ _______   ______ ____  _    _ _   _ _____  
| \\ | |/ __ \\__   __| |  ____/ __ \\| |  | | \\ | |  __ \\ 
|  \\| | |  | | | |    | |__ | |  | | |  | |  \\| | |  | |
| .   | |  | | | |    |  __|| |  | | |  | | .   | |  | |
| |\\  | |__| | | |    | |   | |__| | |__| | |\\  | |__| |
|_| \\_|\\____/  |_|    |_|    \\____/ \\____/|_| \\_|_____/ `}
          </pre>
        </BodyConsole>
      </WrapperConsole>
    </SectionNotFound>
  );
}

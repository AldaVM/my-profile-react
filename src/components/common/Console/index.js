import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTerminal,
  faWindowMaximize,
  faWindowClose,
  faWindowMinimize,
} from "@fortawesome/free-solid-svg-icons";
import {
  HeaderConsole,
  ControlersConsole,
  BodyConsole,
  WrapperConsole,
  SkillItems,
  ObjectSkills,
  WrapperConsoleContent,
} from "./Styled";
import { MY_SKILLS } from "../../../consts";
import { useState } from "react";

function ContentSkills({ title, visible }) {
  const titles = Object.keys(MY_SKILLS);

  return (
    <WrapperConsoleContent visible={visible}>
      <h4 className="text-yellow">
        {`${title}:`} <em className="text-yellow">{`{`}</em>
      </h4>
      {titles.map((title, index) => (
        <ObjectSkills key={index}>
          <span>
            {`${title}: `} <em>[</em>
          </span>
          <SkillItems>
            {MY_SKILLS[title].map((skill) => (
              <li key={skill}>{`"${skill}",`}</li>
            ))}
          </SkillItems>
          <em>],</em>
        </ObjectSkills>
      ))}
      <em className="text-yellow">{`}`}</em>
    </WrapperConsoleContent>
  );
}

export default function Console({ title }) {
  const [isVisible, setIsVisible] = useState(false);
  const [messageCommand, setMessageCommand] = useState("");
  const dateConsole = new Date().toString();

  function viewContent(e) {
    if (e.key === "Enter") {
      setMessageCommand(e.target.value);
      if (e.target.value === "node skills.js") {
        setIsVisible(!isVisible);
      } else {
        setIsVisible(false);
      }
    }
  }

  return (
    <WrapperConsole>
      <HeaderConsole>
        <div>
          <span>
            <FontAwesomeIcon icon={faTerminal} size="xs" />
          </span>
          <span>{title}</span>
        </div>
        <ControlersConsole>
          <span>
            <FontAwesomeIcon icon={faWindowMinimize} size="xs" />
          </span>
          <span>
            <FontAwesomeIcon icon={faWindowMaximize} size="xs" />
          </span>
          <span>
            <FontAwesomeIcon icon={faWindowClose} size="xs" />
          </span>
        </ControlersConsole>
      </HeaderConsole>
      <BodyConsole>
        <span>{`${dateConsole}`}</span>
        <span className="text-green">
          aldair@aldair-desktop:<em>~/My-Profile/website$</em>{" "}
          <input type="text" placeholder="░" onKeyPress={viewContent} />
        </span>
        <em className="faild-command">
          {messageCommand === "" || messageCommand === "node skills.js"
            ? ""
            : `${messageCommand}: orden no encontrada. `}
        </em>
        <ContentSkills title="mySkills" visible={isVisible} />
      </BodyConsole>
    </WrapperConsole>
  );
}

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

export function HeaderTerminal({ title }) {
  return (
    <HeaderConsole>
      <div>
        <i>
          <FontAwesomeIcon icon={faTerminal} size="xs" />
        </i>
        <span>{title}</span>
      </div>
      <ControlersConsole>
        <i>
          <FontAwesomeIcon icon={faWindowMinimize} size="xs" />
        </i>
        <i>
          <FontAwesomeIcon icon={faWindowMaximize} size="xs" />
        </i>
        <i>
          <FontAwesomeIcon icon={faWindowClose} size="xs" />
        </i>
      </ControlersConsole>
    </HeaderConsole>
  );
}

export default function Console({ title }) {
  const [isVisible, setIsVisible] = useState(false);
  const [messageCommand, setMessageCommand] = useState("");
  const dateConsole =
    "Mon Sep 28 2020 10:15:53 GMT-0500 (hora estándar de Perú)";

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
      <HeaderTerminal title={title} />
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

import bootstrap from "../Assets/svg/skills/bootstrap.svg";
import c from "../Assets/svg/skills/c.svg";   
import css from "../Assets/svg/skills/css.svg";
import git from "../Assets/svg/skills/git.svg";
import html from "../Assets/svg/skills/html.svg";
import java from "../Assets/svg/skills/java.svg";
import javascript from "../Assets/svg/skills/javascript.svg";
import postgresql from "../Assets/svg/skills/postgresql.svg";
import react from "../Assets/svg/skills/react.svg";
import typescript from "../Assets/svg/skills/typescript.svg";
import vitejs from "../Assets/svg/skills/vitejs.svg";
import vue from "../Assets/svg/skills/vue.svg";
import Express from "../Assets/images/express.png";
import node from "../Assets/images/node.png";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "vue":
      return vue;
    case "bootstrap":
      return bootstrap;
    case "postgresql":
      return postgresql;
    case "vitejs":
      return vitejs;
    case "c":
      return c;
    case "java":
      return java;
    case "git":
      return git;
    case "Express":
      return Express;
    case "NodeJs":
      return node;
    default:
      break;
  }
};

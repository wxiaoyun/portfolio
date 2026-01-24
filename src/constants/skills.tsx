import type { IconTypes } from "solid-icons";
import { BiLogosGit } from "solid-icons/bi";
import {
  FaBrandsDocker,
  FaBrandsGolang,
  FaBrandsJava,
  FaBrandsPython,
} from "solid-icons/fa";
import {
  SiArchlinux,
  SiAstro,
  SiCss,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPytorch,
  SiReact,
  SiRedis,
  SiRedux,
  SiRust,
  SiSolid,
  SiTailwindcss,
  SiTauri,
  SiTypescript,
  SiVim,
} from "solid-icons/si";

const SkillsFCs: IconTypes[] = [
  SiArchlinux,
  SiVim,
  BiLogosGit,
  SiRust,
  SiTypescript,
  FaBrandsGolang,
  FaBrandsJava,
  SiJavascript,
  FaBrandsPython,
  SiHtml5,
  SiCss,
  FaBrandsDocker,
  SiReact,
  SiSolid,
  SiAstro,
  SiNextdotjs,
  SiTauri,
  SiRedux,
  SiTailwindcss,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiPostgresql,
  SiRedis,
  SiNodedotjs,
];

export const SkillsIcons = SkillsFCs.map((Icon) => (
  <Icon size={80} class="opacity-60 hover:opacity-80  transition-opacity" />
));

import NavLink1 from "./templates/NavLink1";
import Circular3dButton from "./templates/Circular3dButton";
export type Snippet = {
  id: string;
  title: string;
  tags: string[];
  codePath: string;
  jsx: Function;
};

export const snippets: Snippet[] = [
  {
    id: "navigation-link-1",
    title: "Navigation Link",
    tags: ["navigation", "link"],
    codePath:
      process.env.NODE_ENV === "development"
        ? "./data/templates/NavLink1.tsx"
        : "/templates/NavLink1.tsx",
    jsx: NavLink1,
  },
  {
    id: "circular-3d-button",
    title: "Circular 3D Button",
    tags: ["button", "3d"],
    codePath:
      process.env.NODE_ENV === "development"
        ? "./data/templates/Circular3dButton.tsx"
        : "/templates/Circular3dButton.tsx",
    jsx: Circular3dButton,
  },
];

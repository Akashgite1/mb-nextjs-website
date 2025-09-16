import { JSX } from "react";

type Platform = {
  id: number;
  type: "image" | "component";
  img?: string;
  icon?: JSX.Element;
  title: string;
  followers: string;
  description: string;
  link: string;
  color: string;
};

export type PlatformCategory = {
  label: string;
  items: Platform[];
};
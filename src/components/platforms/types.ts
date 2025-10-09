import { JSX } from "react";

type ITestimonial = {
    name: string;
    src: string;
    number?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
}

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
  testimonials?: ITestimonial[]
};

export type PlatformCategory = {
  label: string;
  items: Platform[];
};
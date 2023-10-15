import { ReactNode } from "react";
import { h1, h2, h3, h4, h5, h6, p, span } from "./Text.styled";

const tags = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
};

type TextProps = {
  children: ReactNode;
  tag?: keyof typeof tags;
};

function Text({ children, tag = "p" }: TextProps) {
  const Tag = tags[tag];
  return <Tag>{children}</Tag>;
}

export default Text;

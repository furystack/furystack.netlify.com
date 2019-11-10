import { createComponent, Shade } from "@furystack/shades";

export const CodeSnippet = Shade({
  shadowDomName: "shade-code-snippet",
  render: ({ children }) => {
    return <span>{children}</span>;
  }
});

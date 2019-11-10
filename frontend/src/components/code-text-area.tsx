import { createComponent, Shade } from "@furystack/shades";

export const CodeTextArea = Shade({
  shadowDomName: "shade-code-text-area",
  render: ({ children }) => {
    return <div>{children}</div>;
  }
});

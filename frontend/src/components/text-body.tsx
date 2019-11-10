import { createComponent, Shade } from "@furystack/shades";

export const TextBody = Shade({
  shadowDomName: "shade-text-body",
  render: ({ children }) => {
    return <p>{children}</p>;
  }
});

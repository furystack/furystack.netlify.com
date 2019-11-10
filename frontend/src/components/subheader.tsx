import { createComponent, Shade } from "@furystack/shades";

export const SubHeader = Shade<{ style?: Partial<CSSStyleDeclaration> }>({
  shadowDomName: "shade-subheader",
  render: ({ children, props }) => {
    return <h3 style={{ ...props.style }}>{children}</h3>;
  }
});

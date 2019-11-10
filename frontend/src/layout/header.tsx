import { createComponent, RouteLink, Shade } from "@furystack/shades";
import github from "../images/gh64.png";
import furyLogo from "../images/icon.png";

export interface HeaderProps {
  title: string;
  links: Array<{ name: string; url: string }>;
}

const urlStyle: Partial<CSSStyleDeclaration> = {
  color: "#aaa",
  textDecoration: "none"
};

export const Header = Shade<HeaderProps>({
  shadowDomName: "shade-app-header",
  render: ({ props }) => {
    return (
      <div>
        <style>{`
        @keyframes showAppHeader{
          0%{
            padding: 5px 8px;
            opacity: 0;
          }
       
          100%{
            padding: 8px 0px;
            opacity: 1;
          }
        }

        shade-app-header #header {
          opacity: 0;
          animation: showAppHeader .3s cubic-bezier(0.550, 0.085, 0.680, 0.530) normal .5s forwards ;
        }

        `}</style>
        <div
          id="header"
          style={{
            width: "100%",
            background: "#222",
            color: "white",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            boxShadow: "0 0 3px rgba(0,0,0,0.6)"
          }}
        >
          <h3
            style={{
              margin: "0 2em 0 0",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              fontWeight: "lighter",
              fontSize: "28px",
              fontVariant: "petite-caps"
            }}
          >
            <img src={furyLogo} alt="logo" style={{ margin: "0 0.5em" }} />
            <RouteLink title={props.title} href="/" style={urlStyle}>
              {props.title}
            </RouteLink>
          </h3>
          <div style={{ flex: "1" }} />
          {props.links.map(link => (
            <RouteLink
              title={link.name}
              href={link.url}
              style={{ ...urlStyle, padding: "0 8px", cursor: "pointer" }}
            >
              {link.name || ""}
            </RouteLink>
          ))}
          <a href="https://github.com/furystack" target="_blank">
            <img
              src={github}
              alt="github"
              style={{ height: "32px", margin: "0 1em 0 0.7em" }}
            />
          </a>
        </div>
      </div>
    );
  }
});

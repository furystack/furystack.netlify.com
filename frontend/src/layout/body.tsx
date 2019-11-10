import { createComponent, Shade, Router } from "@furystack/shades";
import { AdminRoot, HomePage } from "../pages";

export const Body = Shade({
  shadowDomName: "shade-app-body",
  render: () => {
    return (
      <div
        id="Body"
        style={{
          margin: "10px",
          padding: "10px",
          position: "fixed",
          top: "40px",
          width: "calc(100% - 20px)",
          height: "calc(100% - 80px)",
          overflow: "hidden"
        }}
      >
        <Router
          routeMatcher={(route, component) => route.pathname === component}
          routes={[
            { url: "/admin", component: () => <AdminRoot /> },
            { url: "/", component: () => <HomePage /> }
          ]}
        />
      </div>
    );
  }
});

import { Shade, createComponent } from "@furystack/shades";
import logo from "../images/logo_transparent_cropped_shadow.png";
import falcon from "../images/falcon.png";
import roach from "../images/roach.jpg";
import jabba from "../images/jabba.png";
import blade from "../images/hidden_blade.jpg";
import pan from "../images/frying_pan.png";
import tsLogo from "../images/ts_logo.png";

export interface BadgeProps {
  title: string;
  image: any;
  text: string;
}

export const HomePageBadge = Shade<BadgeProps>({
  shadowDomName: "shade-home-page-badge",
  render: ({ props }) => {
    return (
      <div
        style={{
          width: "250px",
          height: "250px",
          overflow: "hidden",
          position: "relative"
        }}
      >
        <style>{`

        shade-home-page-badge > div {
          box-shadow:  1px 1px 20px rgba(0, 0, 0, 0.4);
          border-radius: 14px;
          overflow: hidden;
          margin: 1em;
          transition: box-shadow 500ms;
        }
        shade-home-page-badge > div:hover {
          box-shadow:  1px 1px 3px rgba(0, 0, 0, 0.6);
        }

        shade-home-page-badge > div img {
          filter: sepia(0) contrast(1);
          border-radius: 14px;
        }
        
        shade-home-page-badge > div:hover img {
          filter: sepia(0.5) contrast(1.4) brightness(0.6);
        }

        shade-home-page-badge .badge-text-section {
          position: absolute;
          background: rgba(0,0,0,0.85);
          color: white;
          bottom: -56%;
          opacity: 0;
          padding: 1em;
          transition: opacity 500ms cubic-bezier(0.785, 0.135, 0.150, 0.860), bottom 300ms cubic-bezier(0.785, 0.135, 0.150, 0.860);
        }

        shade-home-page-badge > div:hover .badge-text-section {
          bottom: 0;
          opacity: 1;
        }

  `}</style>
        <img
          src={props.image}
          alt=""
          style={{
            width: "250px",
            height: "250px",
            display: "block",
            textAlign: "center",
            transition: "filter .5s ease-in-out"
          }}
        />
        <div className="badge-text-section">
          <div>{props.title}</div>
          <div>{props.text}</div>
        </div>
      </div>
    );
  }
});

export const HomePage = Shade({
  shadowDomName: "shade-home-page",
  render: () => {
    const badges: BadgeProps[] = [
      {
        image: falcon,
        title: "Rapid development.",
        text:
          "You can create a backend microservice in minutes with authentication, data stores, custom actions and ODdata without 3rd party packages."
      },
      {
        image: roach,
        title: "Contains all you need for the start.",
        text:
          "You don't have to waste your time looking after packages for entry-level functionality."
      },
      {
        image: jabba,
        title: "No bloated dependencies.",
        text:
          "The Core is built on a top of native (browser/NodeJS) calls. All of the dependencies are carefully selected and maintained."
      },
      {
        image: blade,
        title: "Easy to extend.",
        text:
          "You can create and use your own custom actions, websocket calls or implement your custom data store or logger"
      },
      {
        image: pan,
        title: "Cross Platform.",
        text:
          "You can run it where NodeJs runs. Even on a frying pan. You can use some of the packages (logger, inject) on the frontend as well"
      },
      {
        image: tsLogo,
        title: "Written in Typescript.      ",
        text:
          "You shouldn't waste your time with chasing errors that static typing can handle. This is not a joke. TS is love. TS is life. The public APIs are also clean and readable."
      }
    ];
    return (
      <div
        style={{ width: "100%", height: "100%", overflow: "auto" }}
        className="homeLoader"
      >
        <style>{`
      @keyframes showHomeComponent{
        0%{
          opacity: 0;
        }
      
        100%{
          opacity: 1
        }
      }

      .homeLoader {
        opacity: 0;
        animation: showHomeComponent .6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1s normal  forwards ;
      }
      `}</style>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            className="section-main"
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-around",
              flexWrap: "wrap"
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                display: "block",
                flexShrink: "1",
                maxWidth: "100%",
                transform: "scale(0.8)",
                filter: "drop-shadow(2px 4px 40px rgba(0,0,0,0.3))"
              }}
            />
            <h2
              style={{
                minWidth: "400px",
                maxWidth: "540px",
                flexShrink: "1",
                fontWeight: "lighter",
                fontVariant: "all-petite-caps"
              }}
            >
              An end-to-end stack that allows you to build complex services with
              kick-ass UI.
            </h2>
          </div>
        </div>
        <div
          className="section-highlights"
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-evenly",
            flexWrap: "wrap"
          }}
        >
          {badges.map(b => (
            <HomePageBadge {...b} />
          ))}
        </div>
      </div>
    );
  }
});

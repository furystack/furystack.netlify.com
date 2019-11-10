import { Shade, createComponent } from "@furystack/shades";
import { Loader } from "../layout/loader";

export const Init = Shade({
  shadowDomName: "shade-init",
  render: () => (
    <div
      style={{
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <style>{`
      @keyframes showInitLoader{
        0%{
          opacity: 0;
        }
      
        100%{
          opacity: 1
        }
      }

      shade-init .initLoader {
        opacity: 0;
        animation: showInitLoader .6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1s normal  forwards ;
      }
      `}</style>
      <div
        className="initLoader"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Loader
          style={{
            width: "128px",
            height: "128px"
          }}
        />
        <h2>Initializing app...</h2>
      </div>
    </div>
  )
});

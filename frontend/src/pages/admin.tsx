import { Shade, createComponent } from "@furystack/shades";
import { SessionService, sessionState } from "../services/session";
import { User } from "../odata/entity-types";
import { HelloWorld } from "./hello-world";
import { Offline } from "./offline";
import { Login } from "./login";
import { Init } from "./init";

export const AdminRoot = Shade({
  shadowDomName: "shade-admin-root",
  initialState: {
    sessionState: "initial" as sessionState,
    currentUser: null as User | null
  },
  constructed: async ({ injector, updateState }) => {
    const session = injector.getInstance(SessionService);
    const observables = [
      session.state.subscribe(newState =>
        updateState({
          sessionState: newState
        })
      ),
      session.currentUser.subscribe(usr => updateState({ currentUser: usr }))
    ];
    return () => observables.forEach(o => o.dispose());
  },
  render: ({ getState }) => {
    return (
      <span>
        {" "}
        {(() => {
          switch (getState().sessionState) {
            case "authenticated":
              return <HelloWorld />;
            case "offline":
              return <Offline />;
            case "unauthenticated":
              return <Login />;
            default:
              return <Init />;
          }
        })()}
      </span>
    );
  }
});

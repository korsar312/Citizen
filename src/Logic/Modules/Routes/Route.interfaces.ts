import { RouteObject } from "react-router-dom";

export namespace RouteInterfaces {
  export enum PathName {
    HOME = "/",
    ERROR = "*",
  }

  export interface IRoute extends Omit<RouteObject, "path"> {
    path: PathName;
    children?: IRoute[];
  }
}

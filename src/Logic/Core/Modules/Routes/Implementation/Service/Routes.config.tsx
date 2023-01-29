import { RouteInterfaces } from "../../Route.interfaces";
import { lazy } from "react";

const GamePage = lazy(() => import("View/Pages/GamePage/GamePage"));
const ErrorPage = lazy(() => import("View/Pages/ErrorPage/ErrorPage"));

export const routes: RouteInterfaces.IRoute[] = [
	{
		path: RouteInterfaces.PathName.HOME,
		element: <GamePage />,
	},
	{
		path: RouteInterfaces.PathName.ERROR,
		element: <ErrorPage />,
	},
];

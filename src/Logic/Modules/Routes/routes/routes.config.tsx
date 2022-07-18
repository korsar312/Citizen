import { RouteInterfaces } from "../Route.interfaces";
import { lazy } from "react";

const MainPage = lazy(() => import("Pages/MainPage/MainPage"));
const ErrorPage = lazy(() => import("Pages/ErrorPage/ErrorPage"));

export const routes: RouteInterfaces.IRoute[] = [
	{
		path: RouteInterfaces.PathName.HOME,
		element: <MainPage />,
	},
	{
		path: RouteInterfaces.PathName.ERROR,
		element: <ErrorPage />,
	},
];

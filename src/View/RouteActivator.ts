import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import UseCases from "../Logic/Core/UseCases/UseCases";

/**
 * Компонент для реализации программного роутинга
 */
export const RouteActivator = () => {
	const navigate = useNavigate();

	useEffect(() => {
		UseCases.interactor("router", "setNavigateFunc", navigate);
		// eslint-disable-next-line
	}, []);

	return null;
};

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import modules from "../../Modules";

/**
 * Компонент для реализации программного роутинга
 */
export const RouteActivator = () => {
  const navigate = useNavigate();

  useEffect(() => {
    modules.routes.store.setNavigation(navigate);
    // eslint-disable-next-line
  }, []);

  return null;
};

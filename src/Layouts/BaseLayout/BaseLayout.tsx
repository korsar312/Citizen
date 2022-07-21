import React, { Fragment, Suspense } from "react";
import { RouteActivator } from "../../Logic/Modules/Routes/RouteActivator";
import { useRoutes } from "react-router-dom";
import { routes } from "../../Logic/Modules/Routes/Routes/routes.config";
import styles from "./BaseLayout.styles";

const BaseLayout = () => {
	const Element = useRoutes(routes);

	return (
		<Fragment>
			<RouteActivator />
			<Suspense fallback={<>Круть-круть ;3</>}>
				<div css={styles.wrapper}>{Element}</div>
			</Suspense>
		</Fragment>
	);
};

export default BaseLayout;

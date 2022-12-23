import React, { Fragment, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "../../Logic/Controls/System/Routes/Routes/routes.config";
import styles from "./BaseLayout.styles";

const BaseLayout = () => {
	const Pages = useRoutes(routes);

	return (
		<Fragment>
			<Suspense fallback={<>Круть-круть ;3</>}>
				<div css={styles.wrapper}>{Pages}</div>
			</Suspense>
		</Fragment>
	);
};

export default BaseLayout;

import React from "react";
import { HashRouter } from "react-router-dom";
import BaseLayout from "./Layouts/BaseLayout/BaseLayout";

const App = () => {
	return (
		<HashRouter>
			<BaseLayout />
		</HashRouter>
	);
};

export default App;

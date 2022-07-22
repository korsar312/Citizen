import React from "react";
import { HashRouter } from "react-router-dom";
import BaseLayout from "./Layouts/BaseLayout/BaseLayout";
import { ThemeSwitcher } from "./ThemeSwitcher";
import modules from "./Logic/Modules";
import { SettingInterface } from "./Logic/Modules/Settings/Setting.interface";

const App = () => {
	return (
		<HashRouter>
			<div>
				<ThemeSwitcher />
				<BaseLayout />

				<button
					onClick={() => modules.setting.store.setTheme(SettingInterface.ETheme.LIGHT)}
					style={{ width: 100, height: 100 }}
				/>
				<button
					onClick={() => modules.setting.store.setTheme(SettingInterface.ETheme.DARK)}
					style={{ width: 100, height: 100 }}
				/>
			</div>
		</HashRouter>
	);
};

export default App;

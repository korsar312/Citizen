import libs from "../../Libs/Libs";
import { Modules } from "../Modules/Modules";

function interactor<MODULE>(module: MODULE) {
	return function <TARGET extends keyof MODULE, METHOD extends keyof MODULE[TARGET], ARGS extends MODULE[TARGET][METHOD]>(
		target: TARGET,
		method: METHOD,
		...args: ARGS extends (...args: infer P) => unknown ? Parameters<ARGS> : unknown[]
	): ARGS extends (...args: infer P) => any ? ReturnType<ARGS> : unknown {
		const chosenMethod = module[target][method];

		const what = `запрос на модуль \n${String(target)} - ${String(method)}`;
		const how = args.length ? `c аргументом: ${String(args)}` : "";
		console.log(`\n${what} \n${how}\n`);

		return libs.utils.polymorph(chosenMethod, module[target], args);
	};
}

const modules = new Modules();

class UseCases {
	public get interactor() {
		return interactor(modules);
	}
}

export default new UseCases();

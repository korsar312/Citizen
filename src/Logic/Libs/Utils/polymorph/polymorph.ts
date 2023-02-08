/**
 * Возвращает знавение в зависимости от типа
 */
export function polymorph(value: unknown, bind: unknown, ...args: unknown[]) {
	switch (typeof value) {
		case "function":
			return value.call(bind, ...args);

		default:
			return value;
	}
}

import React, { FC, Key, ReactElement, useCallback, useEffect, useState } from "react";
import { ComponentsInterface } from "../../Components.interface";
import DragMouse from "../../0.Cores/DragMouse/DragMouse";

interface IDragWrapper {
	children: ReactElement[];
	changePosition: (old: any) => any;
	extStyle?: ComponentsInterface.TDeepCSSObject;
}

type TDragElement = {
	child: ReactElement;
	position: number;
};

const DragWrapper: FC<IDragWrapper> = (props) => {
	const { children, changePosition, extStyle } = props;

	const [dragElement, setDragElement] = useState<TDragElement | null>(null);

	useEffect(() => {
		return () => {
			dropingElem();
		};
	}, []);

	function renderElement() {
		const newChild: ReactElement[] = [];
		newChild.push(spacesElement("first", 0));

		React.Children.forEach(children, (child, index) => {
			if (child === dragElement?.child) return;
			newChild.push(wrapElement(child));
			newChild.push(spacesElement(child.key, index + 1));
		});

		return newChild;
	}

	function spacesElement(key: Key | null, position: number) {
		return (
			<div
				key={key + "spaces"}
				onMouseUp={(event) => drop(position, event)}
				css={{
					//background: "red",
					minWidth: `${dragElement ? 100 : 0}px`,
					margin: `0 ${dragElement ? -50 : 0}px`,
					transition: `ease-in-out ${dragElement ? 0.3 : 0}s`,
					zIndex: dragElement ? 5 : 0,
					"&:hover": {
						margin: `0 ${dragElement ? 0 : -50}px`,
					},
				}}
			/>
		);
	}

	function wrapElement(el: ReactElement) {
		return (
			<div key={el.key} draggable={"true"} onDragStart={() => drag(el)}>
				{el}
			</div>
		);
	}

	function dropingElem() {
		setDragElement(null);
		document.removeEventListener("mouseup", dropElementEmpty);
	}

	const dropElementEmpty = useCallback(() => {
		dropingElem();
	}, [children]);

	function drag(reactElement: ReactElement) {
		if (dragElement) return;

		document.addEventListener("mouseup", dropElementEmpty);
		const indexStartElement = children.findIndex((el) => el.key === reactElement.key);

		if (indexStartElement !== -1) {
			setDragElement({ child: reactElement, position: indexStartElement });
		}
	}

	function drop(lastPosition: number, event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		if (!dragElement) return;

		event.stopPropagation();

		changePosition((old: any[]) =>
			old.reduce((sum: typeof old, cur, i) => {
				i === lastPosition && sum.push(old[dragElement!.position]);

				i !== dragElement!.position && sum.push(cur);
				if (old.length - 1 === i && i + 1 === lastPosition) sum.push(old[dragElement!.position]);
				return sum;
			}, []),
		);

		dropingElem();
	}

	return (
		<>
			{renderElement().map((el) => el)}
			{dragElement && <DragMouse>{dragElement?.child}</DragMouse>}
		</>
	);
};

export default DragWrapper;

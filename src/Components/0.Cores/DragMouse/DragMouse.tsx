import React, { FC, ReactElement, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface IDragMouse {
	children: ReactElement;
}

const DragMouse: FC<IDragMouse> = (props) => {
	const { children } = props;

	const [localMousePos, setLocalMousePos] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setLocalMousePos({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	const overlayRootEl = document.querySelector("#root");

	return (
		overlayRootEl &&
		createPortal(
			<div
				style={{
					position: "absolute",
					top: localMousePos.y,
					left: localMousePos.x,
					zIndex: 1232,
					pointerEvents: "none",
					transform: "translate(-50%, -50%)",
					opacity: 0.8,
				}}
			>
				{children}
			</div>,
			overlayRootEl,
		)
	);
};

export default DragMouse;

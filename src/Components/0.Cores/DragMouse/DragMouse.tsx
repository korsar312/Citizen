import React, { FC, ReactElement, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface IDragMouse {
	children: ReactElement;
}

const DragMouse: FC<IDragMouse> = (props) => {
	const { children } = props;

	const [localMousePos, setLocalMousePos] = useState({ x: 0, y: 0 });
	const stop = useRef(true);

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	const handleMouseMove = (event: MouseEvent) => {
		if (stop.current) {
			setLocalMousePos({ x: event.clientX, y: event.clientY });
			stop.current = false;
			setTimeout(() => (stop.current = true), 15);
		}
	};

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

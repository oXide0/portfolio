import style from './CustomCursor.module.scss';
import { useRef, useEffect } from 'react';

function CustomCursor() {
	const customCursorRef = useRef(null);

	useEffect(() => {
		const handleMouseMove = (event) => {
			const { clientX: x, clientY: y } = event;
			customCursorRef.current.style.left = x - 250 + 'px';
			customCursorRef.current.style.top = y - 250 + 'px';
		};

		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return <div className={style.custom__cursor} ref={customCursorRef}></div>;
}

export default CustomCursor;

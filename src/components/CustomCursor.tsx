import { memo, useRef, useEffect } from 'react';

const CustomCursor = memo(() => {
	const customCursorRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			const { clientX: x, clientY: y } = event;
			if (customCursorRef.current) {
				customCursorRef.current.style.left = x - 192 + 'px';
				customCursorRef.current.style.top = y - 192 + 'px';
			}
		};

		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<div
			className='w-96 h-96 bg-teal-400 opacity-20 rounded-full fixed top-0 left-0 pointer-events-none -z-10 blur-3xl'
			ref={customCursorRef}
		>
			CustomCursor
		</div>
	);
});

export default CustomCursor;

"use client";

const ScrollToTop = () => {
	const scroll = () =>
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});

	return (
		<div
			className="cursor-pointer sticky left-[90%] bottom-10 w-9 xl:left-[95%]"
			onClick={scroll}
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
				<path
					fill="#D9BD41"
					d="M32 0H10C7.791 0 6 1.791 6 4v24H4c-2.209 0-4 1.791-4 4s1.791 4 4 4h24c2.209 0 4-1.791 4-4V8c2.209 0 4-1.791 4-4s-1.791-4-4-4z"
				/>
				<path fill="#E39F3D" d="M8 10h24V8H10L8 7z" />
				<path
					fill="#FFD15C"
					d="M10 0C7.791 0 6 1.791 6 4v24.555C5.41 28.211 4.732 28 4 28c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4V7.445C8.59 7.789 9.268 8 10 8c2.209 0 4-1.791 4-4s-1.791-4-4-4z"
				/>
				<path
					fill="#00000066"
					d="M12 4c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2M6 32c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2m24-17c0 .552-.447 1-1 1H11c-.552 0-1-.448-1-1s.448-1 1-1h18c.553 0 1 .448 1 1m0 4c0 .553-.447 1-1 1H11c-.552 0-1-.447-1-1s.448-1 1-1h18c.553 0 1 .447 1 1m0 4c0 .553-.447 1-1 1H11c-.552 0-1-.447-1-1s.448-1 1-1h18c.553 0 1 .447 1 1m0 4c0 .553-.447 1-1 1H11c-.552 0-1-.447-1-1 0-.553.448-1 1-1h18c.553 0 1 .447 1 1"
				/>
			</svg>
		</div>
	);
};

export default ScrollToTop;
// Scroll to top component

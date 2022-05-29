import { useEffect, useState } from 'react';
// Define general type for useWindowSize hook, which includes width and height

const breakpoints = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	'2xl': 1536,
};

function useBreakpoint(): string {
	// const [windowSize, setWindowSize] = useState<Size>({
	// 	width: undefined,
	// });
	const [breakpoint, setBreakpoint] = useState<string>('sm');
	useEffect(() => {
		// Handler to call on window resize
		function handleResize() {
			// Set window width/height to state
			// setWindowSize({
			// 	width: window.innerWidth,
			// });
			if (window.innerWidth < breakpoints.sm) {
				setBreakpoint('sm');
			} else if (window.innerWidth < breakpoints.md) {
				setBreakpoint('md');
			} else if (window.innerWidth < breakpoints.lg) {
				setBreakpoint('lg');
			} else if (window.innerWidth < breakpoints.xl) {
				setBreakpoint('xl');
			} else {
				setBreakpoint('2xl');
			}
		}
		// Add event listener
		window.addEventListener('resize', handleResize);
		// Call handler right away so state gets updated with initial window size
		handleResize();
		// Remove event listener on cleanup
		return () => window.removeEventListener('resize', handleResize);
	}, []); // Empty array ensures that effect is only run on mount
	return breakpoint;
}

export default useBreakpoint;

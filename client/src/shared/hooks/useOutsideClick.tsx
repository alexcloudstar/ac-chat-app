import { useEffect } from 'react';

const useOutsideClick = (
	ref: React.MutableRefObject<HTMLElement>,
	action: () => void
): void => {
	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				action();
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref, action]);
};

export default useOutsideClick;

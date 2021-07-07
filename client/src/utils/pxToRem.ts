export const pxTorem = (px: number): string =>
	`${px / parseFloat(getComputedStyle(document.documentElement).fontSize)}rem`;

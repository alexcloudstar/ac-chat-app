export const pxToRem = (px: number): string =>
	`${px / parseFloat(getComputedStyle(document.documentElement).fontSize)}rem`;

import 'styled-components';

interface IPalette {
	main: string;
	secondary: string;
}

declare module 'styled-components' {
	export interface DefaultTheme {
		typography: {
			fontFamily: {
				main: string;
				secondary: string;
			};
			sizes: {
				xs: number;
				sm: number;
				md: number;
				lg: number;
				xl: number;
			};
			weight: {
				light: number;
				regular: number;
				medium: number;
				bold: number;
				black: number;
			};
		};
		palette: {
			common: {
				black: string;
				white: string;
			};
			primary: IPalette;
		};
		mediaQuery: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
		};
	}
}

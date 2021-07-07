import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
	typography: {
		fontFamily: {
			main: 'Work Sans, sans-serif',
			secondary: 'Nunito, sans-serif'
		},
		sizes: {
			xs: 14,
			sm: 16,
			md: 18,
			lg: 24,
			xl: 32
		},
		weight: {
			light: 300,
			regular: 400,
			medium: 600,
			bold: 700,
			black: 900
		}
	},
	palette: {
		common: {
			black: '#222831',
			white: '#ffffff'
		},
		primary: {
			main: '#333333',
			secondary: '#FAFAFA'
		}
	},
	mediaQuery: {
		xs: '374px',
		sm: '575px',
		md: '767px',
		lg: '991px',
		xl: '1199px'
	}
};

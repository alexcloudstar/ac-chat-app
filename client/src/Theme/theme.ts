import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
	id: 'T_01',
	name: 'defaultTheme',
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
			bodyBg: '#fff',
			main: '#333333',
			secondary: '#FAFAFA',
			contrast: '#333333'
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

export const darkTheme: DefaultTheme = {
	id: 'T_02',
	name: 'darkTheme',
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
			white: '#e5e5e5'
		},
		primary: {
			bodyBg: '#333333',
			main: '#372f2f',
			secondary: '#2b1818',
			contrast: '#fff'
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

export const purpleTheme: DefaultTheme = {
	id: 'T_03',
	name: 'purpleTheme',
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
			white: '#e5e5e5'
		},
		primary: {
			bodyBg: '#8a7f9f',
			main: '#805eb8',
			secondary: '#f70000',
			contrast: '#fff'
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

import React, { FC } from 'react';
import { ThemeSelectorEl, ThemeSelectorWrapper } from './styles';
import { ThemeSelectorProps } from './types';
import { setLocalStorageItem } from '../../../utils/localStorage';
import * as themes from '../../../Theme/theme';

const ThemeSelector: FC<ThemeSelectorProps> = ({ setTheme }): JSX.Element => {
	return (
		<ThemeSelectorWrapper>
			<ThemeSelectorEl
				theme={themes.defaultTheme}
				onClick={() => {
					setTheme(themes.defaultTheme);
					setLocalStorageItem('theme', 'default');
				}}
			/>
			<ThemeSelectorEl
				theme={themes.darkTheme}
				onClick={() => {
					setTheme(themes.darkTheme);
					setLocalStorageItem('theme', 'dark');
				}}
			/>
			<ThemeSelectorEl
				theme={themes.purpleTheme}
				onClick={() => {
					setTheme(themes.purpleTheme);
					setLocalStorageItem('theme', 'purple');
				}}
			/>
		</ThemeSelectorWrapper>
	);
};

export default ThemeSelector;

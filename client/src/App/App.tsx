import React, { memo, useEffect, useState } from 'react';
import { Chat } from 'src/containers';
import { Username } from 'src/shared/components/Username';
import GlobalStyles from 'src/Theme/globalStyles';
import * as themes from 'src/Theme/theme';

import { DefaultTheme, ThemeProvider } from 'styled-components';
import { punishmentType, rankType } from '../shared';
import ThemeSelector from '../shared/components/ThemeSelector/ThemeSelector';
import { getLocalStorageItem } from '../utils/localStorage';

const App = (): JSX.Element => {
	const [theme, setTheme] = useState<DefaultTheme>(themes.defaultTheme);
	const profanityWords: string[] = [
		'nigga',
		'die',
		'omfg',
		'fuck',
		'fuck you',
		'shit',
		'asshole',
		'bastard'
	];

	const chatCmds: punishmentType[] = [
		{
			name: 'ban',
			cmd: '/ban',
			param: '@username'
		},
		{
			name: 'mute',
			cmd: '/mute',
			param: '@username',
			options: {
				time: 30
			}
		}
	];

	const chatRanks: rankType[] = [
		{
			name: 'Admin',
			cmdAccess: ['/mute', '/ban']
		},
		{
			name: 'Moderator',
			cmdAccess: ['/mute']
		},
		{
			name: 'User',
			cmdAccess: []
		}
	];

	useEffect(() => {
		if (getLocalStorageItem('theme') === 'dark') setTheme(themes.darkTheme);
		if (getLocalStorageItem('theme') === 'purple') setTheme(themes.purpleTheme);
	}, []);

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Username />
				<Chat
					profanityWords={profanityWords}
					cmds={chatCmds}
					ranks={chatRanks}
				/>
			</ThemeProvider>
			<ThemeSelector setTheme={setTheme} />
		</>
	);
};

export default memo(App);

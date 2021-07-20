import React, { memo } from 'react';
import { Chat } from 'src/containers';
import { Username } from 'src/shared/components/Username';
import GlobalStyles from 'src/Theme/globalStyles';
import { defaultTheme } from 'src/Theme/theme';
import { ThemeProvider } from 'styled-components';
import { punishmentType, rankType } from '../shared';

const App = (): JSX.Element => {
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

	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />
				<Username />
				<Chat
					profanityWords={profanityWords}
					cmds={chatCmds}
					ranks={chatRanks}
				/>
			</ThemeProvider>
		</>
	);
};

export default memo(App);

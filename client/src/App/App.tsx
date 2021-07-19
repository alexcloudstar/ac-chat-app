import React, { memo } from 'react';
import { Chat } from 'src/containers';
import { Username } from 'src/shared/components/Username';
import GlobalStyles from 'src/Theme/globalStyles';
import { defaultTheme } from 'src/Theme/theme';
import { ThemeProvider } from 'styled-components';

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

	const chatCmds: {
		cmd: string;
		name: string;
		param: string;
		options?: unknown;
	}[] = [
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

	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />
				<Username />
				<Chat profanityWords={profanityWords} cmds={chatCmds} />
			</ThemeProvider>
		</>
	);
};

export default memo(App);

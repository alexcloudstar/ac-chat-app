import React from 'react';
import { Chat } from 'src/containers';
import { Username } from 'src/shared/components/Username';
import GlobalStyles from 'src/Theme/globalStyles';
import { defaultTheme } from 'src/Theme/theme';
import { ThemeProvider } from 'styled-components';

const App = (): JSX.Element => {
	const profanityWords = [
		'nigga',
		'die',
		'omfg',
		'fuck',
		'fuck you',
		'shit',
		'asshole',
		'bastard'
	];

	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />
				{/* <Username /> */}
				<Chat profanityWords={profanityWords} />
			</ThemeProvider>
		</>
	);
};

export default App;

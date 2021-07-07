import React from 'react';
import { Chat } from 'src/containers';
import GlobalStyles from 'src/Theme/globalStyles';
import { defaultTheme } from 'src/Theme/theme';
import { ThemeProvider } from 'styled-components';

const App = (): JSX.Element => (
	<>
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<Chat />
		</ThemeProvider>
	</>
);

export default App;

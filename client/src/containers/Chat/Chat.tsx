import React from 'react';
import { ChatWrapper } from './style';
import { Body, Header, Textarea } from 'src/shared';

const Chat = (): JSX.Element => {
	return (
		<ChatWrapper>
			<Header />
			<Body />
			<Textarea />
		</ChatWrapper>
	);
};

export default Chat;

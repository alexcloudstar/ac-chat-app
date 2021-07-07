import React, { useState } from 'react';
import { ChatWrapper } from './style';
import { Body, Header, Footer } from 'src/shared';

const Chat = (): JSX.Element => {
	const [message, setMessage] = useState<string>();
	const [messages, setMessages] = useState<any>([]);

	return (
		<ChatWrapper>
			<Header />
			<Body messages={messages} />
			<Footer
				messages={messages}
				setMessages={setMessages}
				message={message}
				setMessage={setMessage}
			/>
		</ChatWrapper>
	);
};

export default Chat;

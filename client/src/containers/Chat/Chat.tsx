import React, { useState } from 'react';
import { ChatWrapper } from './style';
import { Body, Header, Footer, messagesStateType } from 'src/shared';

const Chat = (): JSX.Element => {
	const [message, setMessage] = useState<string>();
	const [messages, setMessages] = useState<messagesStateType[]>([]);

	return (
		<ChatWrapper>
			<Header headline="Chat Header" />
			<Body messageState={messages} />
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

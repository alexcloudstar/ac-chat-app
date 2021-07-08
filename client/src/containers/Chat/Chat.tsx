import React, { useState } from 'react';
import { ChatWrapper } from './style';
import { Body, Header, Footer, messagesStateType } from 'src/shared';
import { io } from 'socket.io-client';
import { getLocalStorageItem } from 'src/utils/localStorage';

const socket = io('http://localhost:4000');

const Chat = (): JSX.Element => {
	const [message, setMessage] = useState<string>();
	const [messages, setMessages] = useState<messagesStateType[]>([]);
	const [isTyping, setIsTyping] = useState<{
		isTyping: boolean;
		username?: string;
	}>({ isTyping: false, username: 'Guest' });

	const onClickHandler = () => {
		socket.emit('chat', {
			message,
			username: getLocalStorageItem('username')
		});

		setMessage('');
	};

	const onKeyPressHandler = () => {
		socket.emit('typing', getLocalStorageItem('username'));
	};

	socket.on('chat', (data) => {
		setMessages([...messages, data]);
		setIsTyping({ isTyping: false });
	});

	socket.on('typing', (data) => {
		setIsTyping({ isTyping: true, username: !data ? 'Guest' : data });
	});

	return (
		<ChatWrapper>
			<Header headline="Chat Header" />
			<Body messageState={messages} isTyping={isTyping} />
			<Footer
				messages={messages}
				setMessages={setMessages}
				message={message}
				setMessage={setMessage}
				onClickHandler={onClickHandler}
				onKeyPressHandler={onKeyPressHandler}
			/>
		</ChatWrapper>
	);
};

export default Chat;

import React, { FC, useCallback, useMemo, useState } from 'react';
import { ChatWrapper } from './style';
import { Body, Header, Footer, messagesStateType } from 'src/shared';
import { io } from 'socket.io-client';
import { getLocalStorageItem } from 'src/utils/localStorage';
import { profanityWords } from 'src/shared';

const socket = io('http://localhost:4000');

const Chat: FC<profanityWords> = ({ profanityWords }): JSX.Element => {
	const [message, setMessage] = useState<string>('');
	const [messages, setMessages] = useState<messagesStateType[]>([]);
	const [isTyping, setIsTyping] = useState<{
		isTyping: boolean;
		username?: string;
	}>({ isTyping: false, username: 'Guest' });

	const onClickHandler = useCallback(() => {
		socket.emit('chat', {
			message,
			username: getLocalStorageItem('username')
		});

		setMessage('');
	}, [message]);

	const onKeyPressHandler = useCallback(() => {
		socket.emit('typing', getLocalStorageItem('username'));
	}, []);

	useMemo(() => {
		socket.on('chat', (data) => {
			setMessages([...messages, data]);
			setIsTyping({ isTyping: false });
		});
	}, [messages]);

	useMemo(() => {
		socket.on('typing', (data) => {
			setIsTyping({ isTyping: true, username: !data ? 'Guest' : data });
		});
	}, []);

	return (
		<ChatWrapper>
			<Header headline="Chat Header" />
			<Body
				messageState={messages}
				isTyping={isTyping}
				message={message}
				setMessage={setMessage}
				profanityWords={profanityWords}
			/>
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

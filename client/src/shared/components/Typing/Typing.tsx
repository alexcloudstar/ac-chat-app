import React, { FC, useEffect, useMemo, useState } from 'react';
import { io } from 'socket.io-client';
import { TypingProps } from './types';

const socket = io('http://localhost:4000');

const Typing: FC<TypingProps> = ({
	messageState,
	setMessages
}): JSX.Element => {
	const [isTyping, setIsTyping] = useState<{
		isTyping: boolean;
		username?: string;
	}>({ isTyping: false, username: 'Guest' });

	useEffect(() => {
		socket.on('typing', (data) => {
			setIsTyping({ isTyping: true, username: !data ? 'Guest' : data });
		});

		return () => {
			socket.off('typing');
		};
	}, []);

	useEffect(() => {
		socket.on('chat', (data) => {
			setMessages([...messageState, data]);
			setIsTyping({ isTyping: false });
		});

		return () => {
			socket.off('chat');
		};
	}, [messageState, setMessages]);

	return isTyping.isTyping ? <div>Someone is typing</div> : <></>;
};

export default Typing;

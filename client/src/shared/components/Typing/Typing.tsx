import React, { useMemo, useState } from 'react';
import { Message } from 'src/shared';
import { io } from 'socket.io-client';
import { getLocalStorageItem } from 'src/utils/localStorage';

const socket = io('http://localhost:4000');

const Typing = ({ setMessages, messageState }): JSX.Element => {
	const [isTyping, setIsTyping] = useState<{
		isTyping: boolean;
		username?: string;
	}>({ isTyping: false, username: 'Guest' });

	useMemo(() => {
		socket.on('typing', (data) => {
			setIsTyping({ isTyping: true, username: !data ? 'Guest' : data });
		});
	}, []);

	useMemo(() => {
		socket.on('chat', (data) => {
			setMessages([...messageState, data]);
			setIsTyping({ isTyping: false });
		});
	}, [messageState, setMessages]);

	return isTyping.isTyping ? <div>Someone is typing</div> : <></>;
};

export default Typing;

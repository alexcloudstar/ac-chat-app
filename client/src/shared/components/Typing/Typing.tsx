import React, { FC, useEffect, useMemo, useState } from 'react';
import { io } from 'socket.io-client';
import { getLocalStorageItem } from 'src/utils/localStorage';
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
			data !== getLocalStorageItem('username') &&
				setIsTyping({ isTyping: true, username: !data ? 'Guest' : data });
		});
	}, []);

	useEffect(() => {
		return () => {
			socket.off('chat');

			setIsTyping({ isTyping: false });
		};
	}, [messageState, setMessages]);

	return isTyping.isTyping ? <div>{isTyping.username} is typing</div> : <></>;
};

export default Typing;

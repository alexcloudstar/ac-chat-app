import React, { FC, memo, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { getLocalStorageItem } from 'src/utils/localStorage';
import { TypingProps } from './types';
import { Message } from '../Message';

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
		socket.on('typing', (data: string) => {
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

	return isTyping.isTyping ? (
		<Message
			username={isTyping.username}
			message={`is typing...`}
			profanityWords={[]}
		/>
	) : (
		<></>
	);
};

export default memo(Typing);

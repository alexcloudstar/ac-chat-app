import React, { FC, memo, useEffect, useRef, useState } from 'react';
import { BodyWrapper } from './style';
import { BodyProps } from './types';
import { v4 as uuidv4 } from 'uuid';
import { io } from 'socket.io-client';
import {
	messagesStateTypeWithMessageStateType,
	messageStateType,
	Typing
} from 'src/shared';
const Message = React.lazy(() => import('../Message/Message'));

const socket = io('http://localhost:4000');

const Body: FC<BodyProps> = ({ profanityWords }): JSX.Element => {
	const messageRef = useRef<HTMLDivElement | null>(null);

	const [messages, setMessages] = useState<
		messagesStateTypeWithMessageStateType[]
	>([]);

	useEffect(() => {
		socket.once('chat', (data: messagesStateTypeWithMessageStateType) => {
			setMessages([...messages, data]);
		});

		messageRef?.current?.scrollIntoView({ behavior: 'smooth' });

		return () => {
			socket.off('chat');
		};
	}, [messages, setMessages]);

	return (
		<BodyWrapper>
			{messages?.map(({ username, message }: messageStateType) => (
				<Message
					key={uuidv4()}
					username={username}
					message={message}
					profanityWords={profanityWords}
				/>
			))}

			<Typing messageState={messages} setMessages={setMessages} />
			<div ref={messageRef}></div>
		</BodyWrapper>
	);
};

export default memo(Body);

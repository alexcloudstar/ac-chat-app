import React, { FC, memo, useEffect, useRef, useState, Fragment } from 'react';
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
	const messageRef = useRef<any>(null);

	const [messages, setMessages] = useState<
		messagesStateTypeWithMessageStateType[]
	>([]);

	useEffect(() => {
		socket.once('chat', (data) => {
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
				<Fragment key={uuidv4()}>
					<Message
						username={username}
						message={message}
						profanityWords={profanityWords}
					/>
					<div ref={messageRef}></div>
				</Fragment>
			))}

			<Typing messageState={messages} setMessages={setMessages} />
		</BodyWrapper>
	);
};

export default memo(Body);

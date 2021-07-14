import React, { Fragment, memo, useMemo, useState } from 'react';
import { FC } from 'react';
import { BodyWrapper } from './style';
import { BodyProps } from './types';
import { v4 as uuidv4 } from 'uuid';
import { io } from 'socket.io-client';
import { messagesStateTypeWithMessageStateType } from 'src/shared';
const Message = React.lazy(() => import('../Message/Message'));

const socket = io('http://localhost:4000');

const Body: FC<BodyProps> = ({ profanityWords }): JSX.Element => {
	const [messages, setMessages] = useState<
		messagesStateTypeWithMessageStateType[]
	>([]);

	const [isTyping, setIsTyping] = useState<{
		isTyping: boolean;
		username?: string;
	}>({ isTyping: false, username: 'Guest' });

	useMemo(() => {
		socket.on('chat', (data) => {
			setMessages([...messages, data]);
			setIsTyping({ isTyping: false });
		});
	}, [messages, setMessages]);

	return (
		<BodyWrapper>
			{messages?.map(
				({ username, message }: { username: string; message: string }) => (
					<Fragment key={uuidv4()}>
						<Message
							username={username}
							message={message}
							profanityWords={profanityWords}
						/>
					</Fragment>
				)
			)}

			{/* {isTyping.isTyping && (
				<Typing messageState={messageState} setMessages={setMessages} />
			)} */}
		</BodyWrapper>
	);
};

export default memo(Body);

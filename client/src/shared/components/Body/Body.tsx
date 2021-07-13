import React, { Fragment, memo, useMemo, useState } from 'react';
import { FC } from 'react';
import { BodyWrapper } from './style';
import { BodyProps } from './types';
import { v4 as uuidv4 } from 'uuid';
import { io } from 'socket.io-client';
const Message = React.lazy(() => import('../Message/Message'));
const Emojis = React.lazy(() => import('../Emojis/Emojis'));

const socket = io('http://localhost:4000');

const Body: FC<BodyProps> = ({
	profanityWords,
	messageState,
	message,
	setMessage,
	setMessages
}): JSX.Element => {
	const [isTyping, setIsTyping] = useState<{
		isTyping: boolean;
		username?: string;
	}>({ isTyping: false, username: 'Guest' });

	useMemo(() => {
		socket.on('chat', (data) => {
			setMessages([...messageState, data]);
			setIsTyping({ isTyping: false });
		});
	}, [messageState, setMessages]);

	return (
		<BodyWrapper>
			{messageState.length > 0 &&
				messageState.map(
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

			<Emojis message={message} setMessage={setMessage} />

			{isTyping.isTyping && (
				<Message username={isTyping.username} message={'is typing...'} />
			)}
		</BodyWrapper>
	);
};

export default memo(Body);

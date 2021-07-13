import React, { Fragment, memo, useMemo, useState } from 'react';
import { FC } from 'react';
import { BodyWrapper } from './style';
import { BodyProps } from './types';
import { v4 as uuidv4 } from 'uuid';
import { io } from 'socket.io-client';
const Message = React.lazy(() => import('../Message/Message'));
const Emojis = React.lazy(() => import('../Emojis/Emojis'));

const Body: FC<BodyProps> = ({
	profanityWords,
	messageState,
	message,
	setMessage,
	setMessages
}): JSX.Element => {
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
		</BodyWrapper>
	);
};

export default memo(Body);

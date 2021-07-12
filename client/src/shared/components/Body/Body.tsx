import React, { Fragment } from 'react';
import { FC } from 'react';
import { BodyWrapper } from './style';
import { BodyProps } from './types';
import { Message } from '../Message';
import { Emojis } from '../Emojis';

const Body: FC<BodyProps> = ({
	messageState,
	isTyping,
	message,
	setMessage
}): JSX.Element => {
	return (
		<BodyWrapper>
			{messageState.length > 0 &&
				messageState.map(
					(
						{ username, message }: { username: string; message: string },
						index
					) => (
						<Fragment key={index}>
							<Message username={username} message={message} />
						</Fragment>
					)
				)}

			<Emojis message={message} setMessage={setMessage} />
			{isTyping.isTyping ? (
				<Message username={isTyping.username} message={'is typing...'} />
			) : (
				<></>
			)}
		</BodyWrapper>
	);
};

export default Body;

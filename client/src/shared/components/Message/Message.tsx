import React, { FC } from 'react';
import { MessageWrapper } from './styles';
import { MessageProps } from './types';
import { Avatar } from 'src/shared';

const Message: FC<MessageProps> = ({
	username,
	message,
	profanityWords
}): JSX.Element => {
	const checkMessage = (message: string) => {
		return profanityWords.includes(message)
			? message.replace(message, '****')
			: message;
	};
	return (
		<MessageWrapper username={username}>
			<div>
				<Avatar username={username} />
				<p>
					<span>
						{!username ? 'Guest' : username} : {checkMessage(message)}
					</span>
				</p>
			</div>
		</MessageWrapper>
	);
};

export default Message;

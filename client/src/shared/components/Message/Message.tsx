import React, { FC, memo, useCallback } from 'react';
import { MessageWrapper } from './styles';
import { MessageProps } from './types';
import { Avatar } from 'src/shared';

const Message: FC<MessageProps> = ({
	username,
	message,
	profanityWords
}): JSX.Element => {
	const checkMessage = useCallback(
		(message: string) => {
			return profanityWords?.includes(message)
				? message.replace(message, '****')
				: message;
		},
		[profanityWords]
	);

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

export default memo(Message);

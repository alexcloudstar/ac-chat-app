import React, { FC } from 'react';
import { MessageWrapper } from './styles';
import { MessageProps } from './types';

const Message: FC<MessageProps> = ({ username, message }): JSX.Element => {
	return (
		<MessageWrapper username={username}>
			<p>
				{username}: {message}
			</p>
		</MessageWrapper>
	);
};

export default Message;

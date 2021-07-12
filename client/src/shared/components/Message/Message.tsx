import React, { FC } from 'react';
import { MessageWrapper } from './styles';
import { MessageProps } from './types';
import { Avatar } from 'src/shared';

const Message: FC<MessageProps> = ({ username, message }): JSX.Element => {
	return (
		<MessageWrapper username={username}>
			<div>
				<Avatar username={username} />
				<p>
					<span>
						{!username ? 'Guest' : username} : {message}
					</span>
				</p>
			</div>
		</MessageWrapper>
	);
};

export default Message;

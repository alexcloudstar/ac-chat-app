import React, { Fragment } from 'react';
import { FC } from 'react';
import { BodyWrapper } from './style';
import { BodyProps } from './types';
import { Message } from '../Message';

const Body: FC<BodyProps> = ({ messageState, isTyping }): JSX.Element => {
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

			{isTyping.isTyping ? (
				<Message username={isTyping.username} message={'is typing...'} />
			) : (
				<></>
			)}
		</BodyWrapper>
	);
};

export default Body;

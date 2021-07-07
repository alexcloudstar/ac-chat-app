import React, { Fragment } from 'react';
import { FC } from 'react';
import { BodyWrapper } from './style';
import { BodyProps } from './types';
import { Message } from '../Message';

const Body: FC<BodyProps> = ({ messageState }): JSX.Element => {
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
		</BodyWrapper>
	);
};

export default Body;

import React, { Fragment } from 'react';
import { FC } from 'react';
import { BodyWrapper } from './style';
import { BodyProps } from './types';

const Body: FC<BodyProps> = ({ messageState }): JSX.Element => {
	return (
		<BodyWrapper>
			{messageState.length > 0 &&
				messageState.map((message) => (
					<Fragment key={message.message}>
						<div>
							<p>
								username: <i>{message.username}</i>
							</p>
							<p>
								message: <i>{message.message}</i>
							</p>
						</div>
					</Fragment>
				))}
		</BodyWrapper>
	);
};

export default Body;

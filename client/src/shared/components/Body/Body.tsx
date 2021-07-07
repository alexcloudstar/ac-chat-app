import React from 'react';
import { BodyWrapper } from './style';

const Body = ({ messages }): JSX.Element => {
	return (
		<BodyWrapper>
			{messages.length > 0 &&
				messages.map((message) => (
					<>
						<div>
							<p>
								username: <i>{message.username}</i>
							</p>
							<p>
								message: <i>{message.message}</i>
							</p>
						</div>
					</>
				))}
		</BodyWrapper>
	);
};

export default Body;

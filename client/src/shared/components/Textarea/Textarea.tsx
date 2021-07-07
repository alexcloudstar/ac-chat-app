import React from 'react';
import { TextareaWrapper } from './style';
import { TextareaAutosize } from '@material-ui/core';
import { useState } from 'react';

const Textarea = ({
	messages,
	setMessages,
	message,
	setMessage
}): JSX.Element => {
	const onChangeHandler = (e) => {
		setMessage(e.target.value);
		setMessages(...messages, {
			username: 'AlexCloudstar',
			message
		});
	};

	return (
		<TextareaWrapper>
			<TextareaAutosize
				maxRows={4}
				aria-label="maximum height"
				placeholder="Type your message here..."
				value={message}
				onChange={onChangeHandler}
			/>
		</TextareaWrapper>
	);
};

export default Textarea;

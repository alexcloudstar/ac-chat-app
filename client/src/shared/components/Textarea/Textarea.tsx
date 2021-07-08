import React, { FC } from 'react';
import { TextareaWrapper } from './style';
import { TextareaAutosize } from '@material-ui/core';

import { textareaProps } from './types';

const Textarea: FC<textareaProps> = ({
	message,
	setMessage,
	onKeyPressHandler
}): JSX.Element => {
	const onChangeHandler = (e) => {
		setMessage(e.target.value);
	};

	return (
		<TextareaWrapper>
			<TextareaAutosize
				maxRows={4}
				aria-label="maximum height"
				placeholder="Type your message here..."
				value={message}
				onChange={onChangeHandler}
				onKeyPress={onKeyPressHandler}
			/>
		</TextareaWrapper>
	);
};

export default Textarea;

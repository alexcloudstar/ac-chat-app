import React, { FC, memo, useCallback } from 'react';
import { getLocalStorageItem } from 'src/utils/localStorage';
import { TextareaWrapper } from './style';
import { TextareaProps } from './types';
import TextareaAutosize from '@material-ui/core/TextareaAutosize/TextareaAutosize';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

const Textarea: FC<TextareaProps> = ({ message, setMessage }): JSX.Element => {
	const onChangeHandler = useCallback(
		(e) => {
			setMessage(e.target.value);

			setTimeout(
				() => socket.emit('typing', getLocalStorageItem('username')),
				500
			);
		},
		[setMessage]
	);

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

export default memo(Textarea);

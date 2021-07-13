import React, { FC, memo, useCallback } from 'react';
import { SendBtnProps } from './types';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button/Button';
import { io } from 'socket.io-client';
import { getLocalStorageItem } from 'src/utils/localStorage';

const socket = io('http://localhost:4000');

const SendBtn: FC<SendBtnProps> = ({ disabled, message, setMessage }) => {
	const onClickHandler = useCallback(() => {
		socket.emit('chat', {
			message,
			username: getLocalStorageItem('username')
		});

		setMessage('');
	}, [message, setMessage]);

	return (
		<Button
			variant="contained"
			color="primary"
			endIcon={<SendIcon />}
			onClick={onClickHandler}
			disabled={disabled}
		>
			Send
		</Button>
	);
};

export default memo(SendBtn);

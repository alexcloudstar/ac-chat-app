import React, { FC, memo, useCallback } from 'react';
import { SendBtnProps } from './types';
import { StyledBtn } from './style';

import SendIcon from '@material-ui/icons/Send';
import { io } from 'socket.io-client';
import { getLocalStorageItem } from 'src/utils/localStorage';

const socket = io();

const SendBtn: FC<SendBtnProps> = ({ disabled, message, setMessage }) => {
	const onClickHandler = useCallback(() => {
		setTimeout(
			() =>
				socket.emit('chat', {
					message,
					username: getLocalStorageItem('username')
				}),
			500
		);

		setMessage('');
	}, [message, setMessage]);

	return (
		<StyledBtn
			variant="contained"
			color="primary"
			endIcon={<SendIcon />}
			onClick={onClickHandler}
			disabled={disabled}
		>
			Send
		</StyledBtn>
	);
};

export default memo(SendBtn);

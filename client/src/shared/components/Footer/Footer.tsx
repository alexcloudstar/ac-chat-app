import React, { FC } from 'react';
import { FooterProps } from './types';

import { io } from 'socket.io-client';

import { FooterWrapper } from './style';
import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { Textarea } from 'src/shared';
import { getLocalStorageItem } from 'src/utils/localStorage';

const socket = io('http://localhost:4000');

const Footer: FC<FooterProps> = ({
	messages,
	setMessages,
	message,
	setMessage
}): JSX.Element => {
	const onClickHandler = () => {
		socket.emit('chat', {
			message,
			username: getLocalStorageItem('username')
		});

		setMessage('');
	};

	socket.on('chat', (data) => {
		setMessages([...messages, data]);
	});

	return (
		<FooterWrapper>
			<Textarea message={message} setMessage={setMessage} />
			<Button
				variant="contained"
				color="primary"
				endIcon={<SendIcon />}
				onClick={onClickHandler}
			>
				Send
			</Button>
		</FooterWrapper>
	);
};

export default Footer;

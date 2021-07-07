import React from 'react';
import { FooterWrapper } from './style';
import { Button, Icon } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { Textarea } from 'src/shared';
import { io } from 'socket.io-client';
import { useEffect } from 'react';

const socket = io('http://localhost:4000');

const Footer = ({
	messages,
	setMessages,
	message,
	setMessage
}): JSX.Element => {
	const onClickHandler = () => {
		socket.emit('chat', {
			message,
			username: 'alexcloudstar'
		});
	};

	socket.on('chat', (data) => {
		setMessages([...messages, data]);
	});

	return (
		<FooterWrapper>
			<Textarea
				messages={messages}
				setMessages={setMessages}
				message={message}
				setMessage={setMessage}
			/>
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

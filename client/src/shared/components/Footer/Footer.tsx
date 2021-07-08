import React, { FC } from 'react';
import { FooterProps } from './types';

import { io } from 'socket.io-client';

import { FooterWrapper } from './style';
import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { Textarea } from 'src/shared';
import { getLocalStorageItem } from 'src/utils/localStorage';

const Footer: FC<FooterProps> = ({
	messages,
	setMessages,
	message,
	setMessage,
	onClickHandler,
	onKeyPressHandler
}): JSX.Element => {
	return (
		<FooterWrapper>
			<Textarea
				message={message}
				setMessage={setMessage}
				onKeyPressHandler={onKeyPressHandler}
			/>
			<Button
				variant="contained"
				color="primary"
				endIcon={<SendIcon />}
				onClick={onClickHandler}
				disabled={!message}
			>
				Send
			</Button>
		</FooterWrapper>
	);
};

export default Footer;

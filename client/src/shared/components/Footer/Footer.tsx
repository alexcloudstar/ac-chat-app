import React, { FC, memo, useMemo } from 'react';
import { FooterProps } from './types';

import { FooterWrapper } from './style';
import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { Textarea } from 'src/shared';

const Footer: FC<FooterProps> = ({
	message,
	setMessage,
	onClickHandler,
	onKeyPressHandler
}): JSX.Element => (
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

export default memo(Footer);

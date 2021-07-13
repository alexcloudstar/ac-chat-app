import React, { FC, memo } from 'react';
import { FooterProps } from './types';

import { FooterWrapper } from './style';
const Textarea = React.lazy(() => import('../Textarea/Textarea'));
const SendBtn = React.lazy(() => import('../SendBtn/SendBtn'));

const Footer: FC<FooterProps> = ({ message, setMessage }): JSX.Element => {
	return (
		<FooterWrapper>
			<Textarea message={message} setMessage={setMessage} />

			<SendBtn disabled={!message} message={message} setMessage={setMessage} />
		</FooterWrapper>
	);
};

export default memo(Footer);

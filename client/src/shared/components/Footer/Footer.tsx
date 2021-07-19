import React, { FC, memo, useState } from 'react';
import { FooterProps } from './types';
import { FooterWrapper } from './style';
import { setLocalStorageItem } from 'src/utils/localStorage';

const Textarea = React.lazy(() => import('../Textarea/Textarea'));
const SendBtn = React.lazy(() => import('../SendBtn/SendBtn'));
const Emojis = React.lazy(() => import('../Emojis/Emojis'));

const Footer: FC<FooterProps> = ({ cmds }): JSX.Element => {
	const [message, setMessage] = useState<string>('');

	return (
		<FooterWrapper>
			<Emojis message={message} setMessage={setMessage} />

			<Textarea message={message} setMessage={setMessage} cmds={cmds} />

			<SendBtn disabled={!message} message={message} setMessage={setMessage} />
		</FooterWrapper>
	);
};

export default memo(Footer);

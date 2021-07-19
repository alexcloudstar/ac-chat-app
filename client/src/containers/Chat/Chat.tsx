import React, { FC, memo, Suspense } from 'react';
import { ChatWrapper } from './style';
import { Body, Header, Footer, PunishmentWarning } from 'src/shared';
import { ChatProps } from './types';

const Chat: FC<ChatProps> = ({ profanityWords, cmds }): JSX.Element => {
	return (
		<ChatWrapper>
			<PunishmentWarning />
			<Header headline="Chat Header" />
			<Suspense fallback={<div>Loading...</div>}>
				<Body profanityWords={profanityWords} />
				<Footer cmds={cmds} />
			</Suspense>
		</ChatWrapper>
	);
};

export default memo(Chat);

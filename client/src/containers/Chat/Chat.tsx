import React, { FC, memo, Suspense } from 'react';
import { ChatWrapper } from './style';
import { Body, Header, Footer, profanityWords } from 'src/shared';

const Chat: FC<profanityWords> = ({ profanityWords }): JSX.Element => {
	return (
		<ChatWrapper>
			<Header headline="Chat Header" />
			<Suspense fallback={<div>Loading...</div>}>
				<Body profanityWords={profanityWords} />
				<Footer />
			</Suspense>
		</ChatWrapper>
	);
};

export default memo(Chat);

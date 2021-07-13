import React, { FC, memo, Suspense, useState } from 'react';
import { ChatWrapper } from './style';
import {
	Body,
	Header,
	Footer,
	messagesStateType,
	profanityWords
} from 'src/shared';

const Chat: FC<profanityWords> = ({ profanityWords }): JSX.Element => {
	const [message, setMessage] = useState<string>('');
	const [messages, setMessages] = useState<messagesStateType[]>([]);

	return (
		<ChatWrapper>
			<Header headline="Chat Header" />
			<Suspense fallback={<div>Loading...</div>}>
				<Body
					messageState={messages}
					message={message}
					setMessage={setMessage}
					setMessages={setMessages}
					profanityWords={profanityWords}
				/>

				<Footer
					messages={messages}
					setMessages={setMessages}
					message={message}
					setMessage={setMessage}
				/>
			</Suspense>
		</ChatWrapper>
	);
};

export default memo(Chat);

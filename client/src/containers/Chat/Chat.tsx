import React, { FC, memo, Suspense, useEffect } from 'react';
import { ChatWrapper } from './style';
import { Body, Header, Footer, PunishmentWarning } from 'src/shared';
import { ChatProps } from './types';
import {
	getLocalStorageItem,
	setLocalStorageItem
} from 'src/utils/localStorage';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

const Chat: FC<ChatProps> = ({ profanityWords, cmds }): JSX.Element => {
	const t = [];
	useEffect(() => {
		socket.on('punish', (data) => {
			setLocalStorageItem('blackList', JSON.stringify(data));
		});

		return () => {
			socket.off('punish');
		};
	}, []);

	useEffect(() => {
		!getLocalStorageItem('blackList') &&
			setLocalStorageItem('blackList', JSON.stringify([]));
	}, []);

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

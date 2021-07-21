import React, { FC, memo, Suspense, useEffect } from 'react';
import { ChatWrapper } from './style';
import { Body, Header, Footer, PunishmentWarning } from 'src/shared';
import { ChatProps } from './types';
import {
	getLocalStorageItem,
	setLocalStorageItem
} from 'src/utils/localStorage';
import { io } from 'socket.io-client';
import { myPunishmentType } from 'src/shared/types/myPunishmentType';

const socket = io('http://localhost:4000');

const Chat: FC<ChatProps> = ({ profanityWords, cmds, ranks }): JSX.Element => {
	const blackList: string = getLocalStorageItem('blackList');
	useEffect(() => {
		socket.on('punish', (data) => {
			setLocalStorageItem('blackList', JSON.stringify(data));
		});

		return () => {
			socket.off('punish');
		};
	}, []);

	useEffect(() => {
		!blackList && setLocalStorageItem('blackList', JSON.stringify([]));
	}, [blackList]);

	const myPunishment: myPunishmentType[] = JSON.parse(blackList)?.filter(
		(list) => list.username === getLocalStorageItem('username')
	);

	if (myPunishment?.length > 0) return <PunishmentWarning />;

	return (
		<ChatWrapper>
			<Header headline="Chat Header" />
			<Suspense fallback={<div>Loading...</div>}>
				<Body profanityWords={profanityWords} />
				<Footer cmds={cmds} ranks={ranks} />
			</Suspense>
		</ChatWrapper>
	);
};

export default memo(Chat);

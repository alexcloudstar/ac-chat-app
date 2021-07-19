import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import {
	getLocalStorageItem,
	setLocalStorageItem
} from 'src/utils/localStorage';
import { TextareaWrapper } from './style';
import { TextareaProps } from './types';
import TextareaAutosize from '@material-ui/core/TextareaAutosize/TextareaAutosize';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

const Textarea: FC<TextareaProps> = ({
	message,
	setMessage,
	cmds
}): JSX.Element => {
	const onChangeHandler = useCallback(
		(e) => {
			setMessage(e.target.value);

			if (e.target.value.includes('/ban')) return;

			setTimeout(
				() => socket.emit('typing', getLocalStorageItem('username')),
				500
			);
		},
		[setMessage]
	);

	const onKeyDown = (e) => {
		if (e.code === 'Enter') {
			e.preventDefault();

			const blackList = getLocalStorageItem('blackList');
			const blackListArr = JSON.parse(blackList);
			const punishCmd = message.split(' ');

			const punishment = {
				username: punishCmd[1],
				punishment: punishCmd[0]
			};

			blackListArr?.push(punishment);

			setLocalStorageItem('blackList', JSON.stringify(blackListArr));

			socket.emit('punish', blackListArr);
		}
	};

	return (
		<TextareaWrapper>
			<TextareaAutosize
				maxRows={4}
				aria-label="maximum height"
				placeholder="Type your message here..."
				value={message}
				onChange={onChangeHandler}
				onKeyDown={onKeyDown}
			/>
		</TextareaWrapper>
	);
};

export default memo(Textarea);

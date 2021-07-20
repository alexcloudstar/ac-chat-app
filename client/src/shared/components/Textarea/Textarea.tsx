import React, { FC, memo, useCallback } from 'react';
import {
	getLocalStorageItem,
	setLocalStorageItem
} from 'src/utils/localStorage';
import { TextareaWrapper } from './style';
import { TextareaProps } from './types';
import TextareaAutosize from '@material-ui/core/TextareaAutosize/TextareaAutosize';
import { io } from 'socket.io-client';
import format from 'date-fns/format';
import addMinutes from 'date-fns/addMinutes';

const socket = io('http://localhost:4000');

const Textarea: FC<TextareaProps> = ({
	message,
	setMessage,
	cmds,
	ranks
}): JSX.Element => {
	const myRank = JSON.parse(getLocalStorageItem('staff'));

	const onChangeHandler = useCallback(
		(e) => {
			setMessage(e.target.value);

			setTimeout(
				() => socket.emit('typing', getLocalStorageItem('username')),
				500
			);
		},
		[setMessage]
	);

	const onKeyDown = (e) => {
		if ((e.ctrlKey || e.metaKey) && (e.keyCode === 13 || e.keyCode === 10)) {
			const blackList = getLocalStorageItem('blackList');
			const blackListArr = JSON.parse(blackList);
			const punishCmd = message.split(' ');
			cmds.map((cmd) => {
				if (!myRank && punishCmd[0] === cmd.cmd)
					return alert("You don't have access");
			});

			myRank?.map((rank) => {
				const findedRanks = ranks.find((r) => r.name === rank.rank);
				findedRanks.cmdAccess.map((cmd) => {
					if (punishCmd[0] !== cmd) return alert("You don't have access");

					const minutesToAdd = parseInt(punishCmd[2]);
					const currentDate = new Date();
					const punishEnd = addMinutes(currentDate, minutesToAdd);

					const punishment = {
						username: punishCmd[1],
						punishment: punishCmd[0],
						time: punishCmd[2],
						timestamp: format(punishEnd, 'yyyy/MM/dd hh:mm:a')
					};

					blackListArr?.push(punishment);

					setLocalStorageItem('blackList', JSON.stringify(blackListArr));

					socket.emit('punish', blackListArr);
				});
			});
		}

		if (!e.ctrlKey && !e.metaKey && e.keyCode === 13) {
			e.preventDefault();

			setTimeout(
				() =>
					socket.emit('chat', {
						message,
						username: getLocalStorageItem('username')
					}),
				500
			);

			setMessage('');
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

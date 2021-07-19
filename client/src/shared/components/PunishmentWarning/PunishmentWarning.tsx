import React, { memo, useEffect } from 'react';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	Typography
} from '@material-ui/core';
import {
	getLocalStorageItem,
	setLocalStorageItem
} from 'src/utils/localStorage';
import format from 'date-fns/format';
import isAfter from 'date-fns/isAfter';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

const PunishmentWarning = (): JSX.Element => {
	const blackList = JSON.parse(getLocalStorageItem('blackList'));

	const isBlacklisted = blackList?.some((punishment) => {
		return punishment.username === getLocalStorageItem('username');
	});

	const myPunishment = blackList?.filter(
		(list) => list.username === getLocalStorageItem('username')
	);

	const currentTime = format(new Date(), 'yyyy/MM/dd hh:mm:a');
	const myPunishmentTimestamp = myPunishment && myPunishment[0]?.timestamp;

	useEffect(() => {
		if (isAfter(new Date(currentTime), new Date(myPunishmentTimestamp))) {
			const filteredArr = blackList.filter(
				(list) => list.username !== myPunishment[0].username
			);

			socket.emit('punish', filteredArr);
			setLocalStorageItem('blackList', JSON.stringify(filteredArr));
		}
	}, [
		blackList,
		isBlacklisted,
		myPunishment,
		currentTime,
		myPunishmentTimestamp
	]);

	return (
		<Dialog aria-labelledby="customized-dialog-title" open={!!isBlacklisted}>
			<DialogTitle id="customized-dialog-title">Punishment notice</DialogTitle>
			<DialogContent dividers>
				<Typography gutterBottom>
					You got <strong>{myPunishment && myPunishment[0]?.punishment}</strong>{' '}
					due to rules violation <br />
					{myPunishment &&
						myPunishment[0]?.time &&
						`Violation expires in: ${myPunishment[0]?.time} minutes`}
				</Typography>
			</DialogContent>
		</Dialog>
	);
};

export default memo(PunishmentWarning);

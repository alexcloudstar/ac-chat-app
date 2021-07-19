import React, { useEffect, useState } from 'react';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	Typography,
	DialogActions,
	Button
} from '@material-ui/core';
import {
	getLocalStorageItem,
	setLocalStorageItem
} from 'src/utils/localStorage';

const PunishmentWarning = (): JSX.Element => {
	const handleClose = () => {
		console.log('close dialog');
	};

	const blackList = JSON.parse(getLocalStorageItem('blackList'));
	useEffect(() => {
		setLocalStorageItem('blackList', JSON.stringify(blackList));
	}, [blackList]);

	const isBlacklisted = blackList?.some((punishment) => {
		return punishment.username === getLocalStorageItem('username');
	});

	const myPunishment = blackList.filter(
		(list) => list.username === getLocalStorageItem('username')
	);

	return (
		<Dialog
			onClose={handleClose}
			aria-labelledby="customized-dialog-title"
			open={isBlacklisted}
		>
			<DialogTitle id="customized-dialog-title">Punishment notice</DialogTitle>
			<DialogContent dividers>
				<Typography gutterBottom>
					You got <strong>{myPunishment[0]?.punishment}</strong> due to rules
					violation
				</Typography>
			</DialogContent>
			<DialogActions>
				<Button autoFocus onClick={handleClose} color="primary">
					Save changes
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default PunishmentWarning;

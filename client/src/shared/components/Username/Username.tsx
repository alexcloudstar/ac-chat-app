import React, { FC, memo, useState } from 'react';
import { UsernameWrapper } from './style';
import { UsernameProps } from './types';
import { TextField, InputAdornment } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import {
	getLocalStorageItem,
	setLocalStorageItem
} from 'src/utils/localStorage';

const Username: FC<UsernameProps> = (): JSX.Element => {
	const [username, setUsername] = useState<string>('');

	const onChangeHandler = (e) => {
		setUsername(e.target.value);

		setLocalStorageItem('username', e.target.value);
	};
	return (
		<UsernameWrapper>
			<TextField
				id="input-with-icon-textfield"
				placeholder="Type your username"
				onChange={onChangeHandler}
				value={getLocalStorageItem('username') || username}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<AccountCircle />
						</InputAdornment>
					)
				}}
			/>
		</UsernameWrapper>
	);
};

export default memo(Username);

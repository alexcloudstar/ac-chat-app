import React, { FC, memo, useCallback, useState } from 'react';
import { UsernameWrapper } from './style';
import { UsernameProps } from './types';
import {
	getLocalStorageItem,
	setLocalStorageItem
} from 'src/utils/localStorage';
import TextField from '@material-ui/core/TextField/TextField';
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment';
import { AccountCircle } from '@material-ui/icons';

const Username: FC<UsernameProps> = (): JSX.Element => {
	const [username, setUsername] = useState<string>('');

	const onChangeHandler = useCallback((e) => {
		setUsername(e.target.value);

		setLocalStorageItem('username', e.target.value);
	}, []);
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

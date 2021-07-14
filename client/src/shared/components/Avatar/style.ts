import { getLocalStorageItem } from 'src/utils/localStorage';
import styled from 'styled-components';
import Box from '@material-ui/core/Box/Box';

export const AvatarWrapper = styled(Box)<{ username: string }>`
	margin: 6px 0 5px;
	padding: 0 6px;
	line-height: 1.5;
	border-radius: 20px;
	background-color: ${({ username }) =>
		username === getLocalStorageItem('username')
			? ({ theme }) => theme.palette.primary.secondary
			: ({ theme }) => theme.palette.primary.main};
	color: ${({ username }) =>
		username === getLocalStorageItem('username')
			? ({ theme }) => theme.palette.primary.main
			: ({ theme }) => theme.palette.primary.secondary};
`;

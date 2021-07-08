import { getLocalStorageItem } from 'src/utils/localStorage';
import styled from 'styled-components';

export const AvatarWrapper = styled.div<{ username: string }>`
	margin: 0 5px;
	padding: 0 5px;
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

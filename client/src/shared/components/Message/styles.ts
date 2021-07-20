import { getLocalStorageItem } from 'src/utils/localStorage';
import styled from 'styled-components';
import Box from '@material-ui/core/Box/Box';

export const MessageWrapper = styled(Box)<{ username: string }>`
	display: flex;
	justify-content: ${({ username }) =>
		username === getLocalStorageItem('username') ? 'flex-start' : 'flex-end'};

	margin: 5px 10px;
	padding: 5px 10px;
	border-radius: 6px;

	> div {
		display: flex;
		align-items: start;
		background-color: ${({ username }) =>
			username === getLocalStorageItem('username')
				? ({ theme }) => theme.palette.primary.main
				: ({ theme }) => theme.palette.primary.secondary};
		color: ${({ username }) =>
			username === getLocalStorageItem('username')
				? ({ theme }) => theme.palette.common.white
				: ({ theme }) => theme.palette.primary.contrast};
		direction: ${({ username }) =>
			username === getLocalStorageItem('username') ? 'ltr' : 'ltr'};
		justify-content: ${({ username }) =>
			username === getLocalStorageItem('username') ? 'flex-start' : 'flex-end'};
		overflow-wrap: anywhere;
		border-radius: 20px;
		padding: 0 10px;
	}

	p {
		padding: 7px 11px 7px 3px;
		display: flex;

		span {
			overflow-wrap: inherit;
			font-weight: ${({ username }) =>
				username === getLocalStorageItem('username')
					? ({ theme }) => theme.typography.weight.regular
					: ({ theme }) => theme.typography.weight.bold};
		}
	}
`;

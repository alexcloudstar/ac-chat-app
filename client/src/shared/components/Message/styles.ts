import { getLocalStorageItem } from 'src/utils/localStorage';
import styled from 'styled-components';

export const MessageWrapper = styled.div<{ username: string }>`
	display: flex;
	justify-content: flex-${({ username }) => (username === getLocalStorageItem('username') ? 'start' : 'end')};
	background-color: ${({ username }) =>
		username === getLocalStorageItem('username') ? 'blue' : 'red'}; ;
`;

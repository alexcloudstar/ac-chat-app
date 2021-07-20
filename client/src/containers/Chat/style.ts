import styled from 'styled-components';
import Box from '@material-ui/core/Box/Box';

export const ChatWrapper = styled(Box)`
	width: 500px;
	height: 500px;
	border: 1px solid ${({ theme }) => theme.palette.primary.main};
	font-family: ${({ theme }) => theme.typography.fontFamily.secondary};

	@media (max-width: 767px) {
		width: auto;
	} ;
`;

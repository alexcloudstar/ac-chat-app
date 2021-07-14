import styled from 'styled-components';
import Box from '@material-ui/core/Box/Box';

export const FooterWrapper = styled(Box)`
	width: 100%;
	height: 20%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	position: relative;
	border-top: 1px solid ${({ theme }) => theme.palette.primary.main};

	button {
		height: 100%;
		border-bottom-right-radius: 0;
		border-top-right-radius: 0;
	}
`;

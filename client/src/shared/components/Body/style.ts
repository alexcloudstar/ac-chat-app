import styled from 'styled-components';
import Box from '@material-ui/core/Box/Box';

export const BodyWrapper = styled(Box)`
	width: 100%;
	height: 70%;
	overflow-y: scroll;
	position: relative;
	padding-bottom: 35px;
	background: ${({ theme }) => theme.palette.common.white};
`;

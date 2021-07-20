import styled from 'styled-components';
import { pxToRem } from 'src/utils/pxToRem';
import Box from '@material-ui/core/Box/Box';

export const TextareaWrapper = styled(Box)`
	height: 100%;
	width: 100%;

	textarea {
		resize: none;
		height: 100% !important;
		width: 100%;
		border: none;
		outline: none;
		padding: 5px 10px;
		font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
		font-size: ${({ theme }) => pxToRem(theme.typography.sizes.md)};
		background: ${({ theme }) => theme.palette.common.white};
	}
`;

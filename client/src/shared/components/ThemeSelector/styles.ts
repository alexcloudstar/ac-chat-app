import styled from 'styled-components';
import Box from '@material-ui/core/Box/Box';
import { pxToRem } from 'src/utils/pxToRem';

export const ThemeSelectorWrapper = styled(Box)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
`;

export const ThemeSelectorEl = styled(Box)<{ theme: string }>`
	margin: 0 ${pxToRem(10)};
	width: ${pxToRem(40)};
	height: ${pxToRem(40)};
	border-radius: 100%;
	background-image: linear-gradient(
		to right top,
		${({ theme }) => theme.palette.primary.main},
		${({ theme }) => theme.palette.primary.secondary}
	);
`;

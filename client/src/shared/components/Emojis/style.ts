import { pxToRem } from 'src/utils/pxToRem';
import styled from 'styled-components';
import Box from '@material-ui/core/Box/Box';

export const EmojisWrapper = styled(Box)`
	position: absolute;
	top: -35px;
	padding: 2px 5px;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;

	aside {
		width: 90%;
	}

	span {
		margin: 0 5px;
		cursor: pointer;
		font-size: ${({ theme }) => pxToRem(theme.typography.sizes.lg)};
	}
`;

export const EmojiOpenPanelWrapper = styled(Box)`
	position: absolute;
	right: 0;
	bottom: 0;
`;

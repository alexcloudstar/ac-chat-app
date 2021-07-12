import { pxToRem } from 'src/utils/pxToRem';
import styled from 'styled-components';

export const EmojisWrapper = styled.div`
	position: absolute;
	bottom: 5px;
	padding: 0 5px;
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

export const EmojiOpenPanelWrapper = styled.div`
	position: absolute;
	right: 0;
	bottom: 0;
`;

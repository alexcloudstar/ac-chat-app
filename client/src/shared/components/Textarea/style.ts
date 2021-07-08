import styled from 'styled-components';
import { pxTorem } from 'src/utils/pxToRem';

export const TextareaWrapper = styled.div`
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
		font-size: ${({ theme }) => pxTorem(theme.typography.sizes.md)};
	}
`;

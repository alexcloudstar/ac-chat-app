import styled from 'styled-components';
import { pxToRem } from 'src/utils/pxToRem';

export const HeaderWrapper = styled.div`
	height: 10%;
	background: ${({ theme }) => theme.palette.primary.main};
	span {
		font-size: ${({ theme }) => pxToRem(theme.typography.sizes.md)};
		font-family: ${({ theme }) => theme.typography.fontFamily.main};
		color: ${({ theme }) => theme.palette.common.white};
	}

	display: flex;
	justify-content: center;
	align-items: center;
`;

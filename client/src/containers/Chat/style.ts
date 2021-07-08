import styled from 'styled-components';

export const ChatWrapper = styled.div`
	width: 500px;
	height: 500px;
	border: 1px solid ${({ theme }) => theme.palette.primary.main};
	font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
`;

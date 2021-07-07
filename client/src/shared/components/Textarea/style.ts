import styled from 'styled-components';

export const TextareaWrapper = styled.div`
	height: 100%;
	width: 100%;

	textarea {
		resize: none;
		height: calc(100% - 6px) !important;
		width: calc(100% - 6px) !important;
	}
`;

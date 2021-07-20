import styled from 'styled-components';
import Button from '@material-ui/core/Button/Button';

export const StyledBtn = styled(Button)<{ disabled: boolean }>`
	height: 100%;
	border-bottom-right-radius: 0;
	border-top-right-radius: 0;
`;

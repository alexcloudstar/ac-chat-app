import { messagesStateType, messageType } from 'src/shared/types/messagesTypes';

export type FooterProps = {
	onClickHandler: () => void;
	onKeyPressHandler: () => void;
} & messageType &
	messagesStateType;

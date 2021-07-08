import { messageType } from 'src/shared/types/messagesTypes';

export type textareaProps = {
	onKeyPressHandler: () => void;
} & messageType;

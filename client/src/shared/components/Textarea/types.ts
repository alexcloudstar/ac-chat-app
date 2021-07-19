import { messageType } from 'src/shared/types/messagesTypes';

export type TextareaProps = {
	cmds?: any[];
	ranks?: any[];
} & messageType;

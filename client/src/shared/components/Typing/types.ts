import { messagesStateType } from 'src/shared';

export type TypingProps = {
	messageState: messagesStateType[] | unknown[];
	setMessages: React.Dispatch<React.SetStateAction<messagesStateType[]>>;
};

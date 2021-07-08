import { messageStateType } from 'src/shared';

export type BodyProps = {
	isTyping: {
		isTyping: boolean;
		username?: string;
	};
	messageState: messageStateType[] | unknown[];
};

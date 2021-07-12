import { messageStateType, profanityWords } from 'src/shared';

export type BodyProps = {
	isTyping: {
		isTyping: boolean;
		username?: string;
	};
	messageState: messageStateType[] | unknown[];
	message: string;
	setMessage: React.Dispatch<React.SetStateAction<string>>;
} & profanityWords;

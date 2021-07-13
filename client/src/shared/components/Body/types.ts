import {
	messagesStateType,
	messageStateType,
	profanityWords
} from 'src/shared';

export type BodyProps = {
	messageState: messageStateType[] | unknown[];
	message: string;
	setMessage: React.Dispatch<React.SetStateAction<string>>;
	setMessages: React.Dispatch<React.SetStateAction<messagesStateType[]>>;
} & profanityWords;

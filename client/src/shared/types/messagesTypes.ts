export type messageType = {
	message: string;
	setMessage: React.Dispatch<React.SetStateAction<string>>;
};

export type messageStateType = {
	username: string;
	message: string;
};

export type messagesStateType = {
	messages: messageStateType[] | unknown[];
	setMessages: React.Dispatch<
		React.SetStateAction<messageStateType[] | unknown[]>
	>;
};

export type profanityWords = {
	profanityWords: string[];
};

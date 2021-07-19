import { profanityWords } from 'src/shared';

export type ChatProps = {
	// TODO: Fix Type
	cmds?: any[];
	ranks?: any[];
} & profanityWords;

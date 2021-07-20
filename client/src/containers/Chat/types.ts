import { profanityWords, rankType, punishmentType } from 'src/shared';

export type ChatProps = {
	cmds?: punishmentType[];
	ranks?: rankType[];
} & profanityWords;

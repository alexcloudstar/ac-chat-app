import { punishmentType, rankType, messageType } from 'src/shared/types';

export type TextareaProps = {
	cmds?: punishmentType[];
	ranks?: rankType[];
} & messageType;

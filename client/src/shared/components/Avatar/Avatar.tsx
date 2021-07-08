import React, { FC } from 'react';
import { AvatarWrapper } from './style';
import { AvatarProps } from './types';

const Avatar: FC<AvatarProps> = ({ username }) => {
	return (
		<AvatarWrapper username={username}>
			{!username ? 'G' : username.charAt(0)}
		</AvatarWrapper>
	);
};

export default Avatar;

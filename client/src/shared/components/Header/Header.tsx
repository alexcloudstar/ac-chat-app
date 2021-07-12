import React, { FC, memo } from 'react';
import { HeaderWrapper } from './style';
import { HeaderProps } from './types';

const Header: FC<HeaderProps> = ({ headline }): JSX.Element => {
	return (
		<HeaderWrapper>
			<span>{headline}</span>
		</HeaderWrapper>
	);
};

export default memo(Header);

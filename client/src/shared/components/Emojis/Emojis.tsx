import React, { FC, useState, useRef, useCallback, memo } from 'react';
import { EmojiProps } from './types';
import Picker from 'emoji-picker-react';
import { EmojiOpenPanelWrapper, EmojisWrapper } from './style';
import useOutsideClick from 'src/shared/hooks/useOutsideClick';

const Emojis: FC<EmojiProps> = ({ message, setMessage }) => {
	const [_, setChosenEmoji] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	const emojiRef = useRef(null);

	const onEmojiClick = useCallback(
		(_, emojiObject) => {
			setChosenEmoji(emojiObject);

			setMessage(`${message} ${emojiObject.emoji}`);
		},
		[message, setMessage]
	);

	const onFastEmojiClick = useCallback(
		(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
			const target = e.target as HTMLElement;

			setMessage(`${message} ${target.innerText}`);
		},
		[message, setMessage]
	);

	const openEmojiSelector = useCallback(() => setIsOpen(!isOpen), [isOpen]);

	const outsideEmojiSelectorClick = useCallback(() => setIsOpen(false), []);

	return (
		<EmojisWrapper>
			{!isOpen && (
				<div>
					<span onClick={onFastEmojiClick}>😂</span>
					<span onClick={onFastEmojiClick}>😁</span>
					<span onClick={onFastEmojiClick}>🥰</span>
					<span onClick={onFastEmojiClick}>🥵</span>
				</div>
			)}

			<EmojiOpenPanelWrapper>
				<span onClick={openEmojiSelector}>😀</span>
			</EmojiOpenPanelWrapper>

			{isOpen && (
				<div ref={emojiRef}>
					<Picker onEmojiClick={onEmojiClick} />
				</div>
			)}

			{useOutsideClick(emojiRef, outsideEmojiSelectorClick)}
		</EmojisWrapper>
	);
};

export default memo(Emojis);

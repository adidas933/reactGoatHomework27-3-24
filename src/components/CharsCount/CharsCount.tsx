import { useState } from 'react';
import './CharsCount.css';
import emojies from '../../data/charsCount/emoji.json';
// @ts-ignore
import useSound from 'use-sound';
import goatScream from '../../data/charsCount/goatScream.mp3';

interface Emojies {
  [key: string]: string;
}

export function CharCount() {
  const [word, setWord] = useState<string>('');
  const [playSound] = useSound(goatScream);
  const [IsIgnoreSpaces, setIsIgnoreSpaces] = useState(false);

  const handleWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputWord = e.target.value.toLowerCase();
    if (IsIgnoreSpaces) {
      setWord(
        (emojies as Emojies)[inputWord] || String(inputWord.trim().length)
      );
    } else {
      setWord((emojies as Emojies)[inputWord] || String(inputWord.length));
    }
    inputWord === 'goat' ? playSound() : inputWord;
  };

  const handleIsIgnoreSpaces = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsIgnoreSpaces(e.target.checked);
  };

  return (
    <div>
      <p>Try writing: sad, angry, goat, happy, laugh, cry</p>
      <input type='text' onChange={handleWord} />
      <p className='output'>{word}</p>
      <input type='checkbox' onChange={handleIsIgnoreSpaces} />
    </div>
  );
}

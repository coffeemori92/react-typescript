import * as React from 'react';
import { useState, useRef, useCallback } from 'react';

const App = () => {
  const [word, setWord] = useState('이발소');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitForm = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const input = inputRef.current;
    if(word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
    } else {
      setResult('땡');
      setValue(''); 
    }
    if(input) {
      input.focus();
    }
  }, [value]);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputRef}
          value={value}
          onChange={onChange}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default App;
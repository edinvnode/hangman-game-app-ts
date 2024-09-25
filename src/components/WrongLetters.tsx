import React from "react";

interface Props {
  wrongLetters: string[];
}

const WrongLetters: React.FC<Props> = ({ wrongLetters }) => {
  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && <p>Wrong</p>}
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce<React.ReactNode[]>(
            (prev, curr, i) =>
              prev.length === 0 ? [curr] : [...prev, ", ", curr],
            []
          )}
      </div>
    </div>
  );
};

export default WrongLetters;

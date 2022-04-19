import {useCallback, useEffect, useState} from "react";

function App() {
  const answer = "RIGHT";
  const [turn, setTurn] = useState<number>(0);
  const [status, setStatus] = useState<"playing" | "finished">("playing");
  const [words, setWords] = useState<string[][]>(() =>
    Array.from({length: 6}, () => new Array(5).fill("")),
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case "Enter": {
          if (words[turn].join("") === answer) {
            setStatus("finished");
          }

          setTurn((turn) => turn + 1);

          return;
        }
        case "Backspace": {
          let firstEmptyIndex = words[turn].findIndex((letter) => letter === "");

          if (firstEmptyIndex === -1) {
            firstEmptyIndex = words[turn].length;
          }

          words[turn][firstEmptyIndex - 1] = "";

          setWords(words.slice());

          return;
        }
        default: {
          if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
            const firstEmptyIndex = words[turn].findIndex((letter) => letter === "");

            if (firstEmptyIndex === -1) return;

            words[turn][firstEmptyIndex] = event.key.toUpperCase();

            setWords(words.slice());

            return;
          }
        }
      }
    },
    [turn, words, answer],
  );

  return (
    <main className="board">
      {words.map((word, wordIndex) => (
        <section className="word">
          {word.map((letter, letterIndex) => {
            const isCorrect = false;
            const isPresent =
              letter &&
              wordIndex < turn &&
              letter !== answer[letterIndex] &&
              answer.includes(letter);

            return (
              <article className={`letter ${isPresent && "present"} ${isCorrect && "correct"}`}>
                {letter}
              </article>
            );
          })}
        </section>
      ))}
    </main>
  );
}

export default App;

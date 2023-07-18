const WORDS = ["WRONG", "RIGHT", "WORLD", "WORMS", "GONCY", "BELEN"];

const api = {
  word: {
    random: (): Promise<string> => // CANDIDATE
      new Promise((resolve) =>
        setTimeout(() => resolve(WORDS[Math.floor(Math.random() * WORDS.length)]), 1000),
      ),
  },
};

export default api;

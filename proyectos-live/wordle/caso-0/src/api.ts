const WORDS = ["WRONG", "RIGHT", "WORLD", "WORMS", "GONCY", "BELEN"];

const api = {
  word: {
    random: (): Promise<string> => // CANDIDATE
      new Promise((resolve) => setTimeout(() => resolve("RIGHT"), 1000)),
  },
};

export default api;

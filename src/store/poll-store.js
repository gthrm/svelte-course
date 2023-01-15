import { writable } from "svelte/store";
export const pollStore = writable([
  {
    question: "Are you happy?",
    answerA: "Yes! ❤️",
    answerB: "Sure 💕",
    votesA: 5,
    votesB: 10,
    id: "52c3c402-00f1-4c8b-be40-6c7707c1afce",
  },
  {
    question: "Do you like it?",
    answerA: "Yes! 👍🏻",
    answerB: "Of course 😍",
    votesA: 1,
    votesB: 3,
    id: "52c3c402-00f1-4c8b-be40-6c7707c1afca",
  },
]);

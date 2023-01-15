<script>
  import { tweened } from "svelte/motion";
  import { pollStore } from "../store/poll-store";
  import Card from "./Card.svelte";
  import Button from "../shared/Button.svelte";
  import PollAnswer from "./PollAnswer.svelte";
  export let poll = {};

  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor((100 / totalVotes) * poll.votesA) || 0;
  $: percentB = Math.floor((100 / totalVotes) * poll.votesB) || 0;
  $: barColorA =
    percentA >= percentB ? "rgba(69, 196, 150, 0.2)" : "rgba(217, 27, 66, 0.2)";
  $: barColorB =
    percentB >= percentA ? "rgba(69, 196, 150, 0.2)" : "rgba(217, 27, 66, 0.2)";

  const tweenedA = tweened(0);
  const tweenedB = tweened(0);

  $: {
    tweenedA.set(percentA);
  }

  $: {
    tweenedB.set(percentB);
  }

  function handleDeletePoll() {
    pollStore.update((currentPolls) =>
      currentPolls.filter(({ id }) => id !== poll.id)
    );
  }
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>
    <p>Total votes: {totalVotes}</p>
    <PollAnswer
      id={poll.id}
      answer={poll.answerA}
      votes={poll.votesA}
      answerKey="A"
      percent={$tweenedA}
      barColor={barColorA}
    />
    <PollAnswer
      id={poll.id}
      answer={poll.answerB}
      votes={poll.votesB}
      answerKey="B"
      percent={$tweenedB}
      barColor={barColorB}
    />
    <div class="delete">
      <Button on:click={handleDeletePoll} flat>Delete</Button>
    </div>
  </div>
</Card>

<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }

  p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }
  .delete {
    margin-top: 30px;
    text-align: center;
  }
</style>

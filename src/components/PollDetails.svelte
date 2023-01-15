<script>
  import Card from "./Card.svelte";
  import PollAnswer from "./PollAnswer.svelte";
  export let poll = {};

  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor((100 / totalVotes) * poll.votesA);
  $: percentB = Math.floor((100 / totalVotes) * poll.votesB);
  $: barColorA =
    percentA >= percentB ? "rgba(69, 196, 150, 0.2)" : "rgba(217, 27, 66, 0.2)";
  $: barColorB =
    percentB >= percentA ? "rgba(69, 196, 150, 0.2)" : "rgba(217, 27, 66, 0.2)";
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
      percent={percentA}
      barColor={barColorA}
      on:vote
    />
    <PollAnswer
      id={poll.id}
      answer={poll.answerB}
      votes={poll.votesB}
      answerKey="B"
      percent={percentB}
      barColor={barColorB}
      on:vote
    />
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
</style>

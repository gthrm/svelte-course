<script>
  import { pollStore } from "../store/poll-store";

  export let answer;
  export let votes;
  export let answerKey;
  export let id;
  export let percent;
  export let barColor;

  function handleVote() {
    pollStore.update((polls) =>
      polls.map((poll) => {
        if (poll.id === id) {
          const currentKey = `votes${answerKey}`;
          const currentValue = poll[currentKey];
          return { ...poll, [currentKey]: currentValue + 1 };
        }
        return poll;
      })
    );
  }
</script>

<div class="answer" on:click|preventDefault={handleVote} on:keydown>
  <div
    class="percent"
    style="width: {percent}%; background-color: {barColor}; border-left: 4px solid {barColor}"
  />
  <span>{answer} ({votes})</span>
</div>

<style>
  .answer {
    background-color: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }

  .answer:hover {
    opacity: 0.6;
  }

  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
    /* transition: width 0.5s; */
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }
</style>

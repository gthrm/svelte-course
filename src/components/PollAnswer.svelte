<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let answer;
  export let votes;
  export let answerKey;
  export let id;
  export let percent;
  export let barColor;

  function handleCLick() {
    dispatch("vote", { answerKey, id });
  }
</script>

<div class="answer" on:click|preventDefault={handleCLick} on:keydown>
  <div
    class="percent "
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
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }
</style>

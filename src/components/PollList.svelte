<script>
  // import { onDestroy, onMount } from "svelte";
  import { fade, scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { pollStore } from "../store/poll-store";
  import PollDetails from "./PollDetails.svelte";

  // export let polls = [];

  // const unSubscribe = pollStore.subscribe((data) => {
  //   polls = data;
  // });

  // onMount(() => {});

  // onDestroy(() => {
  //   unSubscribe();
  // });
</script>

<div class="poll-list">
  {#each $pollStore as poll (poll.id)}
    <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <PollDetails {poll} />
    </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
</style>

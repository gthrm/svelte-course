<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import PollList from "./components/PollList.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import Tabs from "./shared/Tabs.svelte";

  // tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = items[0];

  function handleChangeTab(event) {
    activeItem = event.detail;
  }

  function handleCreateNewPoll() {
    activeItem = items[0];
  }


</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={handleChangeTab} />
  {#if activeItem === items[0]}
    <PollList />
  {:else if activeItem === items[1]}
    <CreatePollForm on:submit={handleCreateNewPoll} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 950px;
    margin: 40px auto;
  }
</style>

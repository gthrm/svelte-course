<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import PollList from "./components/PollList.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import Tabs from "./shared/Tabs.svelte";

  // tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = items[0];

  // Polls
  let polls = [
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
  ];

  function handleChangeTab(event) {
    activeItem = event.detail;
  }

  function handleCreateNewPoll(event) {
    polls = [event.detail, ...polls];
    activeItem = items[0];
  }

  function handleVote(event) {
    const { id, answerKey } = event.detail;
    polls = polls.map((poll) => {
      if (poll.id === id) {
        const currentKey = `votes${answerKey}`;
        const currentValue = poll[currentKey];
        return { ...poll, [currentKey]: currentValue + 1 };
      }
      return poll;
    });
  }
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={handleChangeTab} />
  {#if activeItem === items[0]}
    <PollList {polls} on:vote={handleVote} />
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

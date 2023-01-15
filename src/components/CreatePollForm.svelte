<script>
  import Button from "../shared/Button.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let fields = {
    question: "",
    answerA: "",
    answerB: "",
  };

  let errors = {
    question: null,
    answerA: null,
    answerB: null,
  };

  let errorsIsShown = false;

  $: isValid = !errors.question && !errors.answerA && !errors.answerB;
  $: {
    errors.question =
      fields.question.trim().length < 5
        ? "Question must be at least more then 5 characters"
        : null;

    errors.answerA = !fields.answerA.trim().length
      ? "Answer A must be exist"
      : null;

    errors.answerB = !fields.answerB.trim().length
      ? "Answer B must be exist"
      : null;
  }
  function handleSubmit() {
    errorsIsShown = true;
    if (isValid) {
      const poll = {
        ...fields,
        votesA: 0,
        votesB: 0,
        id: self.crypto.randomUUID(),
      };
      dispatch("submit", poll);
      errorsIsShown = false;
      fields = {
        question: "",
        answerA: "",
        answerB: "",
      };
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-field">
    <label for="question">Poll Question:</label>
    {#if errorsIsShown && errors.question}
      <p class="error-message">{errors.question}</p>
    {/if}
    <input
      type="text"
      id="question"
      bind:value={fields.question}
      class:error={errorsIsShown && errors.question}
    />
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A:</label>
    {#if errorsIsShown && errors.answerA}
      <p class="error-message">{errors.answerA}</p>
    {/if}
    <input
      type="text"
      id="answer-a"
      bind:value={fields.answerA}
      class:error={errorsIsShown && errors.answerA}
    />
  </div>
  <div class="form-field">
    <label for="answer-b">Answer B:</label>
    {#if errorsIsShown && errors.answerB}
      <p class="error-message">{errors.answerB}</p>
    {/if}
    <input
      type="text"
      id="answer-b"
      bind:value={fields.answerB}
      class:error={errorsIsShown && errors.answerB}
    />
  </div>
  <Button type="secondary" flat>Add Poll</Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px auto;
  }
  input {
    width: 100%;
    border-radius: 6px;
  }
  label {
    margin: 10px auto;
    text-align: left;
  }

  .error {
    border: 2px solid #d91b42;
  }

  .error-message {
    color: #d91b42;
    text-align: left;
  }
</style>

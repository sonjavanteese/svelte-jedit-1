<script>
	import { jelist } from "./store";
  import ListItem from "./ctrl/ListItem.svelte";
  import FetchBtn from "./ctrl/FetchBtn.svelte";
  let editorList;
  const unsubscribe = jelist.subscribe((value) => {
    editorList = value;
  });
  let act = true;
</script>

{#await editorList}
  <section>
    <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
  </section>
{:then payload}
  <slot {payload}>Error!</slot>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

<style>
    section {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
</style>
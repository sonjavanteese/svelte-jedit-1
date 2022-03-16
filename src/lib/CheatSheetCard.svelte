<script>
  import { fly } from "svelte/transition";

  export let title = "";
  export let content = "";
  export let doc = "";
  export let repl = "";
  let isCopied = false;
  function copy() {
    const element = document.getElementById(title).firstChild;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(element.innerText);
      isCopied = true;
      setTimeout(() => (isCopied = false), 1500);
    }
  }
</script>

<div class="card">
  <h5 class="card-header text-white bg-secondary">{title}</h5>
  <div class="code-out border-bottom">
    <pre id={title}>{content}</pre>
  </div>
  <div class="d-grid p-1"> 
    <div class="btn-group">
      <a href on:click|preventDefault={copy} class="btn btn-outline-primary" title="Copy to clipboard">
        Copy 📋</a>
      <a href={repl} target="_blank" class="btn btn-outline-secondary" title="See in REPL">
        REPL 💻</a>
    </div>
  </div>
  <div class="list-group list-group-flush">
    {#if isCopied}
    <div class="list-group-item list-group-item-success">
          <span transition:fly={{ x: 20 }}> Copied to clipboard </span>
    </div>
    {:else}
    <div class="list-group-item list-group-item-light">
      <span style="opacity: 0.3;">no message</span>
    </div>
    {/if}

  </div>
  
</div>

<style>
.code-out {
  overflow: hidden;
  border-radius: 6px;
}
pre {
    height: 100%;
    height: 300px;
    overflow: auto;
    border-radius: 6px;
    background-color: var(--bs-gray-100);
    color: var(--bs-gray-600);
    padding: .5rem;
    margin: 0 0 0 0;
  }
</style>
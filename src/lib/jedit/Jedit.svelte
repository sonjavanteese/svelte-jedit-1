<script>
  import { createEventDispatcher, onDestroy } from 'svelte';
  const dispatch = createEventDispatcher();
  import { jeLibReady, jeSchemOptions } from './store';
  import { delayTimer } from '../fetch';
  let  je_form;
  let  jsoneditor;
  let ready = false;
  const handleEditorChange = () => {
    let value = jsoneditor.getValue();
    dispatch("change", value);
  };
  const handleEditorReady = () => {
      dispatch("ready", "Editor is ready!");
  };
  const initEditor = () => {
    if (jsoneditor) {
          jsoneditor.destroy();
    }
    jsoneditor = new JSONEditor(je_form, $jeSchemOptions);
    jsoneditor.on('ready', handleEditorReady);
    jsoneditor.on("change", handleEditorChange);
  };
  
  const libLoaded = async () => {
    console.log("EDITOR LIB READY!!!");
    jeLibReady.set(true);
    await delayTimer(400);
    initEditor();
  };
  onDestroy(() => {
    jsoneditor.destroy();
  })
  $: if (ready && $jeSchemOptions) {
    console.log("Editor ReInit");
    initEditor();
  }
</script>


<svelte:head>
  <script on:load={libLoaded} src="./lib/jsoneditor.js"></script>
</svelte:head>

<section {...$$restProps}>
    <div id="json-editor-form" bind:this={je_form}></div>  
</section>

  {#if !jsoneditor}
  <article>
    <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
  </article>
  {/if}
<style>
  article {
      flex: 1;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;
  }
</style>


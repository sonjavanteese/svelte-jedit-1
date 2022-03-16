<script context="module">
    import { writable } from 'svelte/store';
    import { resOption } from './jcreate.config';
    export const jcOut = writable("");
    export const jcOptions = writable(resOption);
</script>

<script>
  import { createEventDispatcher, onDestroy } from 'svelte';
  import { supabase } from '../db';
  const dispatch = createEventDispatcher();
  import { delayTimer } from '../fetch';
 
  let  jc_form;
  let  jsoncreator;
  let ready = false;
  const adSchemDb = async (obj) => {
    //  id, titel, info, group, created_at, link, refer, daten  
    const { data, error } = await supabase.from('jedit_Schema')
    .insert([
        { titel: obj.title, info: obj.info, group: obj.group, daten: obj.options ? obj.options : null },
    ]);
    if (error) {
        console.error("AddDB Error", error)
    }
    if (data) {
        console.log("AddDB", data)
    }
  };
  
  const addToDb = async () => {
    let value = jsoncreator.getValue();
    if (value && value.options && value.title && value.group) {
        console.log("Add DB Test", value);
         adSchemDb(value);
    } else {
        console.error("Add DB Test Error", value);
    }
  };

  const handleCreatorChange = () => {
    let value = jsoncreator.getValue();
    $jcOptions.startval = value;
    if (value && value.options) {
        let out;
        try {
            out = JSON.parse(value.options);
        } catch (error) {
            console.error("Error", value.options, error);
            out = value.options;
        } finally {
           $jcOut = JSON.stringify(out, null, 2);
            dispatch("change", out); 
        }
    } else {
        $jcOut = JSON.stringify(value, null, 2);
        dispatch("change", value);
    }
  };
  const handleCreatorReady = () => {
      ready = true;
      dispatch("ready", "Creator is ready!");
  };
  const initCreator = () => {
    if (jsoncreator) {
          jsoncreator.destroy();
    }
    jsoncreator = new JSONEditor(jc_form, $jcOptions);
    jsoncreator.on('ready', handleCreatorReady);
    jsoncreator.on("change", handleCreatorChange);
  };
  
  const libLoaded = async () => {
    console.log("EDITOR LIB READY!!!");
    let t = await delayTimer(400);
    initCreator();
  };
  onDestroy(() => {
    jsoncreator.destroy();
  })
</script>

<svelte:head>
  <script on:load={libLoaded} src="./lib/jsoneditor.js"></script>
</svelte:head>


<section {...$$restProps}>
    {#if jsoncreator}
        <header class="py-2">
            <nav class="flex-bar">
                <button on:click={addToDb} class="btn btn-primary">
                    Add to DB
                </button>
            </nav>
        </header>    
    {/if}  
    <div id="json-editor-form" bind:this={jc_form}></div>  
</section>

  {#if !jsoncreator}
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


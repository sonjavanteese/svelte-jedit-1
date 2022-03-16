<script>
  import {addToast} from '../../toast';
  import {push} from 'svelte-spa-router';
  import {jeSchemOptions} from '../store';
  export let items = [];
  const setSchem = (d) => {
    let dat;
    try {
      dat = JSON.parse(d.daten);
    } catch (error) {
      dat = d.daten;
    } finally {
      jeSchemOptions.set(dat);
      addToast(`Schema (${d.id}) set!`, "info", 6000);
      push('/editor');
    }
        
        
  };
  //  id, titel, info, group, created_at, link, refer, daten 
</script>

<nav class="list-group">
  {#each items as d}
    <button
      on:click={() => setSchem(d)} 
      class="list-group-item list-group-item-action"
    >
      <h4 class="mb-0">{d.titel}</h4>
      <span>{d.info}</span>
    </button>
  {/each}
</nav>

<script>
	import { push } from 'svelte-spa-router';
	import { jEditout } from '../lib/stores';
  import { jeSchemOptions } from '../lib/jedit/store';
  import { openModal } from '../lib/Modal.svelte';
  import Jedit from '../lib/jedit/Jedit.svelte';
  let modObj = {titel: 'Schema Json', codebox: true, data: JSON.stringify($jeSchemOptions, null, 2)};
  const openA = () => {
    openModal(modObj);
  };
  const handleChange = (ev) => {
    let out = JSON.stringify(ev.detail, null, 2);
    jEditout.set(out);
  };
</script>


<div class="py-2">
  <nav class="container-fluid flex-bar">
    <button class="btn btn-secondary me-1" on:click={() => push('/list')}>
      List
    </button>
    <button class="btn btn-secondary" on:click={openA}>
      Schema
    </button>
  </nav>
</div>


 <Jedit
   class="container-fluid py-4" 
   on:ready={() => console.log("ready!")} 
   on:change={handleChange} 
   /> 


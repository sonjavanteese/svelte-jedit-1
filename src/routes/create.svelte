<script>
	import Jcreate from '../lib/jedit/Jcreate.svelte';
	import {jEditout} from '../lib/stores';
   const handleChange = (ev) => {
      let out = JSON.stringify(ev.detail, null, 2);
      jEditout.set(out);
   };
</script>



 <Jcreate
   class="container-fluid py-4" 
   on:ready={() => console.log("ready!")} 
   on:change={handleChange} 
   />  


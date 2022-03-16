<script>
	import Toasts from './lib/toast/Toasts.svelte';
	import { loadConfig, jedit } from './lib/jedit';
  import { jEditout } from './lib/stores';
  import ModalCodeA from './lib/modal/ModalCodeA.svelte';
  import Modal, {openModal} from './lib/Modal.svelte';
  import { configA, navi } from './lib/config';
  import Router from "svelte-spa-router";
  import { routes } from "./routes";
  import { onMount } from 'svelte';
  onMount(async () => {
    loadConfig().then(data => {
      console.log("load Config", data)
    })
  })
  const open = () => {
    if ($jEditout) {
      let c = {titel: "Code Preview", component: ModalCodeA, data: $jEditout}
      openModal(c);
    } else {
      openModal(configA)
    }
  };
  let fopen;
  // $: console.log("jEditout", $jEditout)
</script>
<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</svelte:head>

<header>
  <nav class="nav nav-pills flex-column flex-sm-row border-bottom">
  {#each navi as {path, name, icon}}
    <a href="#{path}" class="flex-fill text-center nav-link" style="font-size: 38px;">
      <svelte:component this={icon} />
    </a>
  {/each}
</nav>
</header>

<main id="main">
  <Router {routes} />
</main>
<footer class="border-top">
  <div class="d-grid">
    <button type="button" class="btn btn-primary btn-sm rounded-0" on:click={open}>
      Info
    </button>
  </div>
</footer>
<Toasts />
<Modal />

<style>
 
</style>


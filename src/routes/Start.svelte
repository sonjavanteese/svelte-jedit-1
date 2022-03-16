<script>
  import {slide} from "svelte/transition";
  import { quintInOut } from 'svelte/easing';
  import { Accordion, AccordionGroup } from "renderless-svelte";
  import Counter from "../lib/Counter.svelte";
  import SvgIcon from "../lib/SvgIcon.svelte";
  import { jeOps } from '../lib/jedit/store';
  export let icon;
  let daten = [];
  daten = $jeOps;
  $: console.log("Editor Settings", daten);
</script>

<section>
  <header>
    <div class="container text-center">
      <span class="mx-auto p-4">
        <SvgIcon component={icon} size={68} class="p-5 border rounded" />
      </span>
    </div>
  </header>
  <article class="container py-2 text-center">
    <h1>Start</h1>
    <Counter />
  </article>
  <hr>
  <article class="container py-2">
    <div class="list-group list-group flush">
    <AccordionGroup>
      {#each daten as {id, hidden, typ, name, def, desc}, i}
        <Accordion let:isOpen>
          <button 
          slot="header" 
          let:toggle 
          on:click={toggle} 
          class="list-group-item list-group-item-action d-flex text-truncate" 
          class:active={isOpen}
          >
            <span class:fs-4={isOpen} class:text-capitalize={!isOpen}>{name}</span>
          </button>
          <div 
            transition:slide={{duration: 500, delay: 50, easing: quintInOut}}
            class="list-group-item list-group-item-light"
            >
            <ul class="list-unstyled">
              <li class="h5">
                name: <span class="badge bg-primary">{name}</span>
              </li>
              <li>default: <span class="badge bg-danger">{def}</span></li>
              <li>type: <span class="badge bg-secondary">{typ}</span></li>
              <li class="pt-2">
                <em>{desc}</em>
              </li>
            </ul>
          </div>
        </Accordion>

      {/each}
    </AccordionGroup>
    </div>  
  </article>
</section>

<style>
  img {
    height: 16rem;
    width: 16rem;
    margin: auto;
  }
</style>

<script>
  import DetailCode from "./DetailCode.svelte";
  import DetailList from "./DetailList.svelte";
  import ListDetail from './ListDetail.svelte';

  import { openModal } from "renderless-svelte";
  let modal_daten = {
    titel: "Details",
    component: null,
    dataid: null,
    data: {
      id: 0
    },
    layout: "list",
    editor: true
  };
  const showDetails = (id) => {
    modal_daten.data.id = id;
    modal_daten.dataid = id;
    // modal_daten.component = DetailCode;
    // modal_daten.layout = 'code';
    modal_daten.component = ListDetail;
    modal_daten.layout = 'list';
    modal_daten.editor = true;
    openModal(modal_daten);
  };
  export let items = [];
  
</script>

<nav class="list-group">
  {#each items as d}
    <button
      on:click={() => showDetails(d.id)}
      class="list-group-item list-group-item-action"
    >
      <h4 class="mb-0">{d.titel}</h4>
      <span>{d.info}</span>
    </button>
  {/each}
</nav>

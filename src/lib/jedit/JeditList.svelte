<script>
  import FetchList from './FetchList.svelte';
  import ListItem from "./ctrl/ListItem.svelte";
  import FetchBtn from "./ctrl/FetchBtn.svelte";
</script>

<section {...$$restProps}>
    <nav class="flex-bar py-2">
    <FetchBtn />
    </nav>
    <FetchList let:payload>
      <ListItem items={payload} />
    </FetchList>
</section>

<style>
  section {
      flex: 1;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
  }
</style>
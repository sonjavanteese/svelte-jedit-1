<script>
  import FetchSchema from "./FetchSchema.svelte";
  import SchemaItem from "./ctrl/SchemaItem.svelte";
  import FetchSchBtn from "./ctrl/FetchSchBtn.svelte";
</script>

<section {...$$restProps}>
    <nav class="flex-bar mb-4">
    <FetchSchBtn />
    </nav>
    <FetchSchema let:payload>
      <SchemaItem items={payload} />
    </FetchSchema>
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
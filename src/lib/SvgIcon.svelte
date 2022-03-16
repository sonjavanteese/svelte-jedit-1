<script>
  export let name = 'at'
  export let size = 24
  export let unit = 'px'
  export let component = null;
  export let color = null;
  let fontSize = `${size}${unit}`;

</script>
{#if component}
  <span style="font-size: {fontSize}; {color ? color : ''}" {...$$restProps}>
    <svelte:component this={component} />
  </span>   
{:else}
  <svg class="icon icon-{name}" style="font-size: {fontSize};" {...$$restProps}>
    <use xlink:href="#icon-{name}" />
  </svg>
{/if}


<style windi:inject global>
  span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
  }
:global(.icon) {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}
</style>

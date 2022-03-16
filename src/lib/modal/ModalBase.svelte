<script>
	import { fade } from 'svelte/transition';
	export let close;
	export let titel = 'Info Modal';
	export let body = null;
	export let component = null;
	export let data = null;
	export let dataid = 0;
	export let layout = 'list';
	export let msg = `Godfather ipsum dolor sit amet. Whats wrong with being a lawyer My father is no different than any powerful man; any man with power; like a president or senator. I'm your older brother; Mike; and I was stepped over! Never hate your enemies. It affects your judgment`;
</script>


<div class="modal-header">
	{#if titel}
		<h5 class="modal-title">{titel}</h5>
	{/if}
	<button type="button" on:click={close} class="btn-close" aria-label="Close" />
</div>
{#if component}
	<div class="modal-body">
		<svelte:component this={component} {data} {body} {close} />
	</div>
{:else if  body}
	<div class="modal-body">
		{@html body}
	</div>
	<div class="modal-footer">
		<button on:click={close} class="btn btn-secondary">Close</button>
	</div>
{:else}
	<div class="modal-body">
		{msg}
	</div>
	<div class="modal-footer">
		<button on:click={close} class="btn btn-secondary">Close</button>
	</div>
{/if}

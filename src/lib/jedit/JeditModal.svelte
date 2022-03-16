<script>
	import FetchDetail from "./FetchDetail.svelte";
	export let close;
    export let payload;
	let newPayLoad = {
		titel: payload.titel ? payload.titel : null,
		component: payload.component ? payload.component : null,
		data: payload.data ? payload.data : null,
		dataid: payload.dataid ? payload.dataid : null,
		layout:  payload.layout ? payload.layout : 'list'
	};
	let modal = {
		id: 0,
		size: 'xl',
		center: true,
		scroll: true,
		full: false 
	};
</script>





<section
class="modal-dialog"
class:modal-xl={modal.size}
class:modal-dialog-centered={modal.center}
class:modal-dialog-scrollable={modal.scroll}
class:modal-fullscreen-lg-down={modal.full}
>
<div class="modal-content">

<div class="modal-header">
	{#if newPayLoad.titel}
		<h5 class="modal-title">{newPayLoad.titel}</h5>
	{/if}
	<button type="button" on:click={close} class="btn-close" aria-label="Close" />
</div>

{#if newPayLoad.component}
	<FetchDetail {...newPayLoad} let:payload>
		<svelte:component this={newPayLoad.component} {payload} {close} />
	</FetchDetail>
{:else}
	<div class="modal-body">
		Error!
	</div>
	<div class="modal-footer">
		<button on:click={close} class="btn btn-secondary">Close</button>
	</div>
{/if}




<!-- {#if component}
	{#if layout === 'code'}
		<svelte:component this={component} {close} {dataid} {data} {titel} {body} />

	{:else}
		<div class="modal-body">
			<svelte:component this={component} {close} {dataid} {data} {titel} {body} />
		</div>
		<div class="modal-footer">
			<button on:click={close} class="btn btn-secondary">Close</button>
		</div>
	{/if}
{:else if body}	
	<div class="modal-body">
		{body}
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
{/if} -->


</div>
</section>
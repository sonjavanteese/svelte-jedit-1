<script>
	import { fade } from 'svelte/transition';
    // import ModalBodyA from './ModalBodyA.svelte';
    // import ModalBodyB from './ModalBodyB.svelte';
    import JeditModal from '../jedit/JeditModal.svelte';
    import ModalCodeA from './ModalCodeA.svelte';
    import ModalBase from './ModalBase.svelte';
    const  modal_daten = {
        titel: "Details",
        body: null,
        component: null,
        data: null,
        dataid: 0,
        layout: 'list',
        modal: {
            id: 0,
            size: 'xl',
            center: true,
            scroll: true,
            full: false 
        }
    };
	export let close;
    export let payload;
    // console.log('modal obj:', payload);
</script>

<div
	transition:fade={{ duration: 500 }}
	class="modal fade show"
	style="padding-right: 16px; display: block;"
	tabindex="-1"
>
    {#if payload && payload.editor}
        <JeditModal {payload} {close} />
    {:else if payload && payload.codebox}
        <section class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    {#if payload.titel}
                        <h5 class="modal-title">{payload.titel}</h5>
                    {/if}
                    <button type="button" on:click={close} class="btn-close" aria-label="Close" />
                </div>
                <ModalCodeA {...payload} {close} />
            </div>
        </section>
    {:else}
        <section class="modal-dialog modal-xl">
            <div class="modal-content">
                <ModalBase {...payload} {close} />
            </div>
        </section>
    {/if}
</div>

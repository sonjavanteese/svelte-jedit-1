<script>
    import {fly} from 'svelte/transition';
    export let titel;
    export let data;
    export let close;
    let isCopied = false;
    function copy() {
        const element = document.getElementById("out1");
        if (navigator.clipboard) {
        navigator.clipboard.writeText(element.value);
        isCopied = true;
        setTimeout(() => (isCopied = false), 1500);
        }
    }
</script>


<section class="modal-body">
    <textarea class="form-control" id="out1" rows="12">{data ? data : ''}</textarea>
    <div class="message">
    {#if isCopied}
        <div class="alert alert-primary text-center mt-2 mb-0" role="alert">
        <span transition:fly={{ x: 20 }}>Copied to clipboard</span> 
        </div>
    {:else}
        <div class="alert alert-secondary text-center mt-2 mb-0" role="alert">
        <span style="opacity: 1;">Code Preview</span> 
        </div>
    {/if}
    </div>
</section>
<div class="modal-footer">
    <button on:click={copy} class="btn btn-primary me-2">Copy</button>
    <button on:click={close} class="btn btn-secondary">Close</button>
</div>

<style>
.message {
    height: 68px;
    overflow: hidden;
}
</style>
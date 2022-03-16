<script>
    import { fade, fly } from "svelte/transition";
    import { removeToast } from "./toastStore";
    export let toast;
    const icoSize = '20px';
    const si = `<svg style="width:${icoSize};height:${icoSize}" viewBox="0 0 24 24"> <path fill="currentColor" d="M2.2,16.06L3.88,12L2.2,7.94L6.26,6.26L7.94,2.2L12,3.88L16.06,2.2L17.74,6.26L21.8,7.94L20.12,12L21.8,16.06L17.74,17.74L16.06,21.8L12,20.12L7.94,21.8L6.26,17.74L2.2,16.06M13,17V15H11V17H13M13,13V7H11V13H13Z" /></svg>`;
    const ai = `<svg style="width:${icoSize};height:${icoSize}" viewBox="0 0 24 24"><path fill="currentColor" d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z" /></svg>`;
    const ii = `<svg style="width:${icoSize};height:${icoSize}" viewBox="0 0 24 24"> <path fill="currentColor" d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>`;
    
    let arr = toast.id.split("-");
    // $: console.log(arr);
</script>

<div in:fly={{ y: -100 }} out:fade={{duration: 400}} class="{toast.type}" role="alert" on:click="{() => {removeToast(toast.id)}}">
  <header class="flex items-center justify-between cursor-pointer mb-1">
   {#if toast.type === 'error'}
   {@html ai}
   {:else if  toast.type === 'success'}
   {@html si}
   {:else}
   {@html ii}
   {/if}
   <span class="text-xs opacity-50 truncate">{arr[0]}</span>
  </header>
    <article>
      {@html toast.msg}
    </article>
</div>

<style windi:inject>
.font-bold {
  font-weight: 700;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
div {
  border-radius: 0.75rem;
  border-left-width: 4px;
  margin-left: auto;
  margin-bottom: 1rem;
  max-width: 24rem;
  padding: 0.5rem 1rem;
  --tw-shadow-color: 0, 0, 0;
  --tw-shadow: 0 25px 50px -12px rgba(var(--tw-shadow-color), 0.25);
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  width: 100%;
}
.info {
  --tw-bg-opacity: 1;
  background-color: rgba(253, 230, 138, var(--tw-bg-opacity));
  --tw-border-opacity: 1;
  border-color: rgba(217, 119, 6, var(--tw-border-opacity));
  --tw-text-opacity: 1;
  color: rgba(217, 119, 6, var(--tw-text-opacity));
}
.success {
  --tw-bg-opacity: 1;
  background-color: rgba(191, 219, 254, var(--tw-bg-opacity));
  --tw-border-opacity: 1;
  border-color: rgba(37, 99, 235, var(--tw-border-opacity));
  --tw-text-opacity: 1;
  color: rgba(37, 99, 235, var(--tw-text-opacity));
}
.error {
  --tw-bg-opacity: 1;
  background-color: rgba(254, 202, 202, var(--tw-bg-opacity));
  --tw-border-opacity: 1;
  border-color: rgba(220, 38, 38, var(--tw-border-opacity));
  --tw-text-opacity: 1;
  color: rgba(220, 38, 38, var(--tw-text-opacity));
}
.font-bold {
  font-weight: 700;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
</style>
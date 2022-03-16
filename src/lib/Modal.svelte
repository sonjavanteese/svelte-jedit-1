<script context="module">
   export { openModal } from "renderless-svelte";
</script>

<script>
  import { Modal } from "renderless-svelte";
  import ModalContent from './modal/ModalContent.svelte';
</script>

<Modal let:close let:payload>
	<div class="modal-backdrop fade show" />
	<ModalContent {payload} {close} />

</Modal>
<script>
	import { jelist } from "../store";
	const handClick = () => {
		jelist.fetchAll();
	};
</script>

<button class="btn btn-secondary me-1" on:click={handClick}>
	Editor List
</button>
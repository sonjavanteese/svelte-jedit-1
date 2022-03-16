<script>
	import { schemalist } from "../store";
	const handClick = () => {
		schemalist.fetchAll();
	};
</script>

<button class="btn btn-secondary me-1" on:click={handClick}>
	Schema List
</button>
<script>
    export let format = true;
    export let data;
	// group,titel,info,dataobj,link,hidden,id,schema,config,created_at
</script>

<details class="rounded-3 border">
	<summary class="flex py-2 px-4 rounded-3 bg-primary text-white">
	Response
	</summary>
	<div class="p-2">
	<pre>
        {format ? JSON.stringify(data, null, 2) : JSON.stringify(data)}
	</pre>
	</div>
</details>
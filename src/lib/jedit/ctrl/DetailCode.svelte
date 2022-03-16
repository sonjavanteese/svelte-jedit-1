<script>
    import { fetchJeDetails } from "../api";
    let format = true;
    export let data;
    export let close;
    let daten;
    let promise;

    const fetchDet = async (id) => {
        let data = await fetchJeDetails(id);
        if (data) {
            daten = data;
        }
        
        return data;
    };
    if (data && data.id) {
        promise = fetchDet(data.id);
    }

    $: if (typeof daten == 'object') {
        console.log("Data Object", Object.keys(daten))
    }
</script>

    <section {...$$restProps}>
        {#await promise}
        <header class="flex-1 site center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
        </header>
        {:then payload}
     
        <textarea class="form-control" id="out1" style="height: 100%;">
            {format ? JSON.stringify(payload, null, 2) : JSON.stringify(payload)}
        </textarea>
          
       {:catch error}
          <p style="color: red">{error.message}</p>
        {/await}
    </section>

<div class="modal-footer">
    <button on:click={close} class="btn btn-secondary">Close</button>
</div>


<style>
section {
    display: flex;
    flex-direction: column;
    height: 100%;
}
textarea {
    flex: 1;
    border-radius: 0;
    border: none;
    background-color: var(--bs-light);
    color: var(--bs-gray-600);
}
textarea:focus {
    outline: none;
    background-color: #fff;
}
</style>
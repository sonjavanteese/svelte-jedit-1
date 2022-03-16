<script>
    import { fetchJeDetails } from "./api";
    export let data;
    export let dataid;
    let promise;
    const fetchDet = async (id = 0) => {
        let data = await fetchJeDetails(id);
        if (data) {
            return data;
        }
    };
    if (data && data.id) {
        promise = fetchDet(data.id);
    } else if (dataid) {
        promise = fetchDet(dataid);
    } else {
        console.error("FetchDetail Error");
    }
</script>


{#await promise}
<section>
    <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
</section>
{:then payload}
    <slot {payload}>Error!</slot>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

<style>
    section {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
</style>
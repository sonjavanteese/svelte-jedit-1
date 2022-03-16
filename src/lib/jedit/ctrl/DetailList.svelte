<script>
    import { fetchJeDetails } from "../api";
    import {jeOptions} from '../store';
    let format = true;
    export let data;
    export let close;
    let daten;
    let promise;
    const setSchema = (obj) => {
        if (obj.schema) {
          $jeOptions.schema = obj.schema;  
        }
        if (obj.startval) {
          $jeOptions.startval = obj.startval;  
        }
        console.log("New Options", $jeOptions);
    };

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

    $: temp = ``;
    $: codeout = ``;
    $: if (daten && daten.dataobj) {
        if (!Array.isArray(daten.dataobj)) {
        temp = `<tr class="table-warning">
            <th scope="row">Data</th><td>${Object.keys(daten.dataobj).map(x => x).join(', ')}</td></tr>`;
            if (daten.group === 'set') {
                codeout = `<textarea class="form-control" id="out1" rows="3">${JSON.stringify(daten.dataobj, null, 2)}</textarea>
                `;
            } else {
                codeout = `<textarea class="form-control" id="out1" rows="8">${JSON.stringify(daten.dataobj, null, 2)}</textarea>`;
            }    
        } else {
        temp = `<tr class="table-danger">
            <th scope="row">Data</th>
            <td> Is Array [${daten.dataobj.length}]</td></tr>`
        codeout = ``;
        }
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

        <!--  group,titel,info,dataobj,link,hidden,id,schema,config,created_at -->

        <table class="table">
        <tbody>
        <tr class="table-success">
            <th scope="row">Id</th>
            <td>{ payload.id }</td>
        </tr>
        <tr class="table-secondary">
            <th scope="row">Group</th>
            <td>{ payload.group }</td>
        </tr>
        <tr>
            <th scope="row">Titel</th>
            <td>{ payload.titel }</td>
        </tr>
        <tr>
            <th scope="row">Info</th>
            <td>{ payload.info }</td>
        </tr>
        <tr>
            <th scope="row">Link</th>
            <td>{ payload.link }</td>
        </tr>
                <tr class="table-primary">
            <th scope="row">created_at</th>
            <td>{ payload.created_at }</td>
        </tr>
        <tr class="table-primary">
            <th scope="row">Data</th>
            <td>{@html temp}</td>
        </tr>
        </tbody>
        </table>
        <div>
            {@html codeout}
            {#if payload.dataobj && payload.group === 'set'}
            <button class="btn btn-primary mt-2" on:click={() => setSchema(payload.dataobj)}>Set Editor</button>
            {/if}
        </div>
       {:catch error}
          <p style="color: red">{error.message}</p>
        {/await}
    </section>




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
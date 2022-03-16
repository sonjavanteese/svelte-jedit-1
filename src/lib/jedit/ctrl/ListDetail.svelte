<script>
    import {jeOptions} from '../store';
    export let payload;
    export let close;
    let editobj = {};
    let neweditobj = {};
    let isArr = false;
    let isSet = false;
    let isGroup = null;
    let schemid = payload && payload.id ? payload.id : null;
    const setSchema = () => {
        if (!isSet) {
            console.error("Could not set Editor Schema");
            return;
        }
        if (neweditobj.schema) {
          $jeOptions.schema = neweditobj.schema;  
        }
        if (neweditobj.startval) {
          $jeOptions.startval = neweditobj.startval;  
        }
        if (neweditobj.id) {
          $jeOptions.id = neweditobj.id;  
        }
        console.log("New Editor Schema", $jeOptions);
    };
    const setSchemaSet = () => {
        if (neweditobj.schema && neweditobj.theme) {
            $jeOptions = neweditobj; 
            console.log("New Editor Schema Set", $jeOptions); 
        } else {
            console.error("Could not set Editor Schema Set");
        }   
    };
    if (payload && payload.dataobj) {
        editobj = payload.dataobj;
        isArr = Array.isArray(editobj)
        if (!isArr) {
            let k = Object.keys(editobj);
            console.log(`DataObj is 'Object', keys:`, k);
            if (editobj.schema && editobj.theme) {
                isSet = true;
                neweditobj = editobj;
                neweditobj.id = schemid;
            } 
            console.log("neweditobj", neweditobj);
            console.log(`Data Group: ${payload.group === 'set' ? `Set valid: ${isSet}` : payload.group}`);
        } else {
            console.log("Data Obj is Array, length: ", editobj.length ? editobj.length : 0);
        }
    };
    $: temp = ``;
    $: codeout = ``;
    $: if (payload && payload.dataobj) {
        if (!Array.isArray(payload.dataobj)) {
        temp = `<tr class="table-warning">
            <th scope="row">Data</th><td>${Object.keys(payload.dataobj).map(x => x).join(', ')}</td></tr>`;
            if (payload.group === 'set') {
                codeout = `<textarea class="form-control" id="out1" rows="3">${JSON.stringify(payload.dataobj, null, 2)}</textarea>
                `;
            } else {
                codeout = `<textarea class="form-control" id="out1" rows="8">${JSON.stringify(payload.dataobj, null, 2)}</textarea>`;
            }    
        } else {
        temp = `<tr class="table-danger">
            <th scope="row">Data</th>
            <td> Is Array [${payload.dataobj.length}]</td></tr>`
        codeout = ``;
        }
    }
    $: console.log("schemaId", schemid)
</script>
<!--  group,titel,info,dataobj,link,hidden,id,schema,config,created_at -->
<div class="modal-body px-0 pt-0">
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
    <footer class="px-2 py-0">
        {@html codeout}
        {#if isSet}
        <button class="btn btn-primary mt-2" on:click={() => setSchema(payload.dataobj)}>Set Editor</button>
        {/if}
    </footer>
</div>
<div class="modal-footer">
	<button on:click={close} class="btn btn-secondary">Close</button>
</div>


<style>
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
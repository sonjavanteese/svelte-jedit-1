export const val = {
    "name": "nwp-app"
  };
export const schem = {
    "type": "object",
    "description": "JSON schema generated @load",
    "properties": {
      "name": {
        "type": "string"
      }
    }
  };
// export let jsoneditor;

export const handleEditorChange = () => {
    console.log("change")
};
export const handleEditorReady = () => {
    console.log("ready")
};

// export const editForm = () => document.querySelector("#json-editor-form");

export let options = {
    "theme": "bootstrap4",
    "iconlib": "fontawesome4",
    "prompt_before_delete": true,
    "enable_array_copy": true,
    "object_layout": "normal",
    "show_errors": "interaction",
    "schema": {
      "type": "object",
      "description": "JSON schema generated with JSONBuddy https://www.json-buddy.com",
      "properties": {
        "name": {
          "type": "string"
        }
      }
    },
    "startval": {
      "name": "nwp-app"
    },
    "array_controls_top": false
  };

// export let jedit = {
//     check () {
//         jsoneditor.validate();
//     },
//     start () {
//         if (jsoneditor) {
//             jsoneditor.destroy();
//         }
//         jsoneditor = new window.JSONEditor(editForm(), options);
//         jsoneditor.on('ready', handleEditorReady);
//         jsoneditor.on("change", handleEditorChange);
        
//     },
//     update (ops) {
//         if (jsoneditor) {
//             jsoneditor.destroy();
//         }
//         jsoneditor = new window.JSONEditor(editForm(), ops);
//         jsoneditor.on('ready', handleEditorReady);
//         jsoneditor.on("change", handleEditorChange);
//         router.navigate("/editor");
//     },
//     init () {
//         if (jsoneditor) {
//             jsoneditor.destroy();
//         }
//         options.schema = schem;
//         options.startval = val;
//         jsoneditor = new window.JSONEditor(editForm(), options);
//         jsoneditor.on('ready', handleEditorReady);
//         jsoneditor.on("change", handleEditorChange);
        
//     },
//     setSchem (el) {
//         try {
//             options.schema = JSON.parse(el.value)
//         } catch (e) {
//             alert('Invalid Schema: ' + e.message)
//             return
//         }
//     },
//     setData (el) {
//         jsoneditor.setValue(JSON.parse(el.value))
//     },
//     getData () {
//         let val = jsoneditor.getValue();
//         return val;
//     }
// };





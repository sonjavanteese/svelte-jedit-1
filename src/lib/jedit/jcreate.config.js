export const resOption = {
    "theme": "bootstrap4",
    "iconlib": "fontawesome4",
    "object_layout": "normal",
    "show_errors": "interaction",
    "startval": {
        "title": "",
        "info": "",
        "theme": "bootstrap4",
        "iconlib": "fontawesome4",
        "object_layout": "normal",
        "show_errors": "interaction",
        "schema": "{\"key\": \"value\"}",
        "startval": "{\"key\": \"value\"}",
        "options": "{\"theme\":\"bootstrap4\",\"iconlib\":\"fontawesome4\",\"object_layout\":\"normal\",\"show_errors\":\"interaction\",\"startval\":{\"key\": \"value\"},\"schema\":{\"key\": \"value\"}}"
    },
    "schema": {
        "title": "Json-Schema",
        "type": "object",
        "definitions": {
            "jsonobj": {
                "type": "string",
                "format": "json",
                "default": "{\"key\": \"value\"}"
            },
            "bool": {
                "type": "boolean",
                "format": "select",
                "options": {
                    "hidden": false
                }
            },
            "group": {
                "title": "Group",
                "type": "string",
                "default": "set",
                "enum": [
                    "data",
                    "schema",
                    "set"
                ]
            },
            "theme": {
                "title": "Theme",
                "type": "string",
                "default": "bootstrap4",
                "enum": [
                    "bootstrap4",
                    "spectre",
                    "html"
                ]
            },
            "iconlib": {
                "type": "string",
                "title": "Icon Libary",
                "default": "fontawesome4",
                "enum": [
                    "fontawesome4",
                    "fontawesome5",
                    "spectre",
                    "null"
                ]
            },
            "object_layout": {
                "type": "string",
                "title": "Object Layout",
                "default": "normal",
                "enum": [
                    "normal",
                    "grid",
                    "table"
                ]
            },
            "show_errors": {
                "type": "string",
                "title": "Show Errors",
                "default": "interaction",
                "enum": [
                    "interaction",
                    "change",
                    "always",
                    "never"
                ]
            },
            "image": {
                "type": "string",
                "links": [
                    {
                        "href": "{{self}}",
                        "mediaType": "image/png"
                    },
                    {
                        "rel": "Download File",
                        "href": "{{self}}",
                        "download": true
                    }
                ],
                "default": "https://nwp-cgn.de/img/poser/airhostess_128.png",
                "description": "https://nwp-cgn.de/img/poser/airhostess_128.png",
                "options": {
                    "hidden": false
                }
            }
        },
        "required": [
            "title",
            "info",
            "group",
            "theme",
            "iconlib",
            "object_layout",
            "prompt_before_delete",
            "enable_array_copy",
            "array_controls_top",
            "show_errors",
            "schema",
            "startval",
            "options"
        ],
        "properties": {
            "title": {
                "title": "Title",
                "type": "string",
                "options": {
                    "inputAttributes": {
                        "placeholder": "Schema Titel"
                    }
                },
                "propertyOrder": 20
            },
            "info": {
                "title": "Info",
                "type": "string",
                "format": "textarea",
                "options": {
                    "inputAttributes": {
                        "placeholder": "... more Infos"
                    }
                },
                "propertyOrder": 40
            },
            "group": {
                "$ref": "#/definitions/group",
                "propertyOrder": 50
            },
            "theme": {
                "$ref": "#/definitions/theme",
                "propertyOrder": 60
            },
            "iconlib": {
                "$ref": "#/definitions/iconlib",
                "propertyOrder": 70
            },
            "prompt_before_delete": {
                "title": "Warn before Delete",
                "$ref": "#/definitions/bool",
                "default": true,
                "propertyOrder": 74
            },
            "enable_array_copy": {
                "title": "Array Copy",
                "$ref": "#/definitions/bool",
                "default": false,
                "propertyOrder": 74
            },
            "array_controls_top": {
                "title": "Array Control Top",
                "$ref": "#/definitions/bool",
                "default": false,
                "propertyOrder": 76
            },
            "object_layout": {
                "$ref": "#/definitions/object_layout",
                "propertyOrder": 80
            },
            "show_errors": {
                "$ref": "#/definitions/show_errors",
                "propertyOrder": 90
            },
            "schema": {
                "title": "Schema",
                "$ref": "#/definitions/jsonobj",
                "propertyOrder": 180
            },
            "startval": {
                "title": "Init Data",
                "$ref": "#/definitions/jsonobj",
                "propertyOrder": 190
            },
            "options": {
                "type": "string",
                "title": "Generator Options",
                "format": "json",
                "propertyOrder": "300",
                "template": "{\"theme\":\"{{th}}\",\"iconlib\":\"{{ico}}\",\"prompt_before_delete\":{{v1}},\"enable_array_copy\":{{v2}},\"object_layout\":\"{{v3}}\",\"show_errors\":\"{{v4}}\",\"schema\":{{v5}},\"startval\":{{v6}},\"array_controls_top\":{{v7}}}",
                "watch": {
                    "th": "theme",
                    "ico": "iconlib",
                    "v1": "prompt_before_delete",
                    "v2": "enable_array_copy",
                    "v3": "object_layout",
                    "v4": "show_errors",
                    "v5": "schema",
                    "v6": "startval",
                    "v7": "array_controls_top"
                }
            }
        }
    }
};
export let jedit_ops;

export const loadConfig = async () => {
let data;
let res = await fetch('./data/jedit.config.json');
data = await res.json();
if (data && data.ops) {
    jedit_ops = data.ops;
    return data;
}
};
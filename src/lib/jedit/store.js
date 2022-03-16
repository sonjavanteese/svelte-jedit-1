import { writable } from 'svelte/store';
import { fetchJeList, fetchSeList } from "./api";
import { schem, val } from './editor';
let options = {
    theme: "bootstrap4",
    iconlib: "fontawesome4",
    prompt_before_delete: true,
    enable_array_copy: true,
    schema: schem,
    startval: val,
	id: -1
}
let settings = [
	{
		"id": 2,
		"hidden": 0,
		"typ": "config",
		"name": "ajax",
		"def": "false",
		"desc": "If true, JSON Editor will load external URLs in $ref via ajax."
	},
	{
		"id": 17,
		"hidden": 0,
		"typ": "config",
		"name": "iconlib",
		"def": "null",
		"desc": "The icon library to use for the editor. See the CSS Integration section below for more info."
	},
	{
		"id": 18,
		"hidden": 0,
		"typ": "config",
		"name": "remove_button_labels",
		"def": "false",
		"desc": "Display only icons in buttons. This works only if iconlib is set."
	},
	{
		"id": 23,
		"hidden": 0,
		"typ": "config",
		"name": "schema",
		"def": "{}",
		"desc": "A valid JSON Schema to use for the editor. Version 3 and Version 4 of the draft specification are supported."
	},
	{
		"id": 24,
		"hidden": 0,
		"typ": "config",
		"name": "show_errors",
		"def": "\"interaction\"",
		"desc": "When to show validation errors in the UI. Valid values are interaction, change, always, and never."
	},
	{
		"id": 25,
		"hidden": 0,
		"typ": "config",
		"name": "startval",
		"def": "null",
		"desc": "Seed the editor with an initial value. This should be valid against the editor's schema."
	},
	{
		"id": 26,
		"hidden": 0,
		"typ": "config",
		"name": "template",
		"def": "default",
		"desc": "The JS template engine to use. See the Templates and Variables section below for more info."
	},
	{
		"id": 27,
		"hidden": 0,
		"typ": "config",
		"name": "theme",
		"def": "html",
		"desc": "The CSS theme to use. See the CSS Integration section below for more info."
	},
	{
		"id": 28,
		"hidden": 0,
		"typ": "config",
		"name": "display_required_only",
		"def": "false",
		"desc": "If true, only required properties will be included by default."
	},
	{
		"id": 30,
		"hidden": 0,
		"typ": "config",
		"name": "prompt_before_delete",
		"def": "true",
		"desc": "If true, displays a dialog box with a confirmation message before node deletion."
	},
	{
		"id": 31,
		"hidden": 0,
		"typ": "config",
		"name": "object_layout",
		"def": "normal",
		"desc": "The default value of `format` for objects. If set to table for example, objects will use table layout if `format` is not specified."
	},
	{
		"id": 3,
		"hidden": 0,
		"typ": "option",
		"name": "ajaxBase",
		"def": "null",
		"desc": "Allows schema references to work either with or without cors; set to protocol://host:port when api is served by different host."
	},
	{
		"id": 4,
		"hidden": 0,
		"typ": "option",
		"name": "ajaxCredentials",
		"def": "false",
		"desc": "If true, JSON Editor will make ajax call with [credentials](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials)."
	},
	{
		"id": 5,
		"hidden": 0,
		"typ": "option",
		"name": "compact",
		"def": "false",
		"desc": "If true, the label will not be displayed/added."
	},
	{
		"id": 6,
		"hidden": 0,
		"typ": "option",
		"name": "disable_array_add",
		"def": "false",
		"desc": "If true, remove all add row buttons from arrays."
	},
	{
		"id": 7,
		"hidden": 0,
		"typ": "option",
		"name": "disable_array_delete",
		"def": "false",
		"desc": "If true, remove all delete row buttons from arrays."
	},
	{
		"id": 8,
		"hidden": 0,
		"typ": "option",
		"name": "disable_array_delete_all_rows",
		"def": "false",
		"desc": "If true, remove all delete all rows buttons from arrays."
	},
	{
		"id": 9,
		"hidden": 0,
		"typ": "option",
		"name": "disable_array_delete_last_row",
		"def": "false",
		"desc": "If true, remove all delete last row buttons from arrays."
	},
	{
		"id": 10,
		"hidden": 0,
		"typ": "option",
		"name": "disable_array_reorder",
		"def": "false",
		"desc": "If true, remove all move up and move down buttons from arrays."
	},
	{
		"id": 11,
		"hidden": 0,
		"typ": "option",
		"name": "enable_array_copy",
		"def": "false",
		"desc": "If true, add copy buttons to arrays."
	},
	{
		"id": 12,
		"hidden": 0,
		"typ": "option",
		"name": "disable_collapse",
		"def": "false",
		"desc": "If true, remove all collapse buttons from objects and arrays."
	},
	{
		"id": 13,
		"hidden": 0,
		"typ": "option",
		"name": "disable_edit_json",
		"def": "false",
		"desc": "If true, remove all Edit JSON buttons from objects."
	},
	{
		"id": 14,
		"hidden": 0,
		"typ": "option",
		"name": "disable_properties",
		"def": "false",
		"desc": "If true, remove all Edit Properties buttons from objects."
	},
	{
		"id": 15,
		"hidden": 0,
		"typ": "option",
		"name": "array_controls_top",
		"def": "false",
		"desc": "If true, array controls (add, delete etc) will be displayed at top of list."
	},
	{
		"id": 16,
		"hidden": 0,
		"typ": "option",
		"name": "form_name_root",
		"def": "root",
		"desc": "The first part of the `name` attribute of form inputs in the editor. An full example name is `root[person][name]` where root is the form_name_root."
	},
	{
		"id": 19,
		"hidden": 0,
		"typ": "option",
		"name": "no_additional_properties",
		"def": "false",
		"desc": "If true, objects can only contain properties defined with the properties keyword unless the property additionalProperties: true is specified in the object schema"
	},
	{
		"id": 20,
		"hidden": 0,
		"typ": "option",
		"name": "refs",
		"def": "{}",
		"desc": "An object containing schema definitions for URLs. Allows you to pre-define external schemas."
	},
	{
		"id": 21,
		"hidden": 0,
		"typ": "option",
		"name": "required_by_default",
		"def": "false",
		"desc": "If true, all schemas that don't explicitly set the required property will be required."
	},
	{
		"id": 22,
		"hidden": 0,
		"typ": "option",
		"name": "keep_oneof_values",
		"def": "true",
		"desc": "If true, makes oneOf copy properties over when switching."
	},
	{
		"id": 29,
		"hidden": 0,
		"typ": "option",
		"name": "show_opt_in",
		"def": "false",
		"desc": "If true, NON required properties will have an extra toggable checkbox near the title that determines if the value must be included or not in the editor´s value"
	},
	{
		"id": 32,
		"hidden": 0,
		"typ": "option",
		"name": "enum_source_value_auto_select",
		"def": "true",
		"desc": "Preserve value at Move Up or Down.(No value is selected automatically upon deletion.)"
	},
	{
		"id": 33,
		"hidden": 0,
		"typ": "option",
		"name": "max_depth",
		"def": "0",
		"desc": "Max depth of the nested properties to be rendered of provided json schema. The missing of this option could cause maximum call stack size exceeded in case of object properties with circular references. 0 value means render all."
	},
	{
		"id": 34,
		"hidden": 0,
		"typ": "option",
		"name": "use_default_values",
		"def": "true",
		"desc": "If true default values based on the type of the property will be used"
	},
	{
		"id": 35,
		"hidden": 0,
		"typ": "option",
		"name": "urn_resolver",
		"def": "false",
		"desc": "A callback function to resolve an undefined Uniform Resource Name (URN) for $ref. The function receives a URN and callback to pass back a serialized JSON response. The function should return a boolean (true if the URN can be resolved; false otherwise)."
	},
	{
		"id": 36,
		"hidden": 0,
		"typ": "setting",
		"name": "collapsed",
		"def": "null",
		"desc": "collapsed - If set to true, the editor will start collapsed (works for objects and arrays)"
	},
	{
		"id": 37,
		"hidden": 0,
		"typ": "setting",
		"name": "disable_array_add",
		"def": "null",
		"desc": "disable_array_add - If set to true, the “add row” button will be hidden (works for arrays)"
	},
	{
		"id": 38,
		"hidden": 0,
		"typ": "setting",
		"name": "disable_array_delete",
		"def": "null",
		"desc": "disable_array_delete - If set to true, all of the “delete” buttons will be hidden (works for arrays)"
	},
	{
		"id": 39,
		"hidden": 0,
		"typ": "setting",
		"name": "disable_array_delete_all_rows",
		"def": "null",
		"desc": "disable_array_delete_all_rows - If set to true, just the “delete all rows” button will be hidden (works for arrays)"
	},
	{
		"id": 40,
		"hidden": 0,
		"typ": "setting",
		"name": "disable_array_delete_last_row",
		"def": "null",
		"desc": "disable_array_delete_last_row - If set to true, just the “delete last row” buttons will be hidden (works for arrays)"
	},
	{
		"id": 41,
		"hidden": 0,
		"typ": "setting",
		"name": "disable_array_reorder",
		"def": "null",
		"desc": "disable_array_reorder - If set to true, the “move up/down” buttons will be hidden (works for arrays)"
	},
	{
		"id": 42,
		"hidden": 0,
		"typ": "setting",
		"name": "disable_collapse",
		"def": "null",
		"desc": "disable_collapse - If set to true, the collapse button will be hidden (works for objects and arrays)"
	},
	{
		"id": 43,
		"hidden": 0,
		"typ": "setting",
		"name": "disable_edit_json",
		"def": "null",
		"desc": "disable_edit_json - If set to true, the Edit JSON button will be hidden (works for objects)"
	},
	{
		"id": 44,
		"hidden": 0,
		"typ": "setting",
		"name": "disable_properties",
		"def": "null",
		"desc": "disable_properties - If set to true, the Edit Properties button will be hidden (works for objects)"
	},
	{
		"id": 45,
		"hidden": 0,
		"typ": "setting",
		"name": "array_controls_top",
		"def": "null",
		"desc": "array_controls_top - If set to true, array controls (add, delete etc) will be displayed at top of list (works for arrays)"
	},
	{
		"id": 46,
		"hidden": 0,
		"typ": "setting",
		"name": "enum",
		"def": "null",
		"desc": "enum - See Enum options"
	},
	{
		"id": 47,
		"hidden": 0,
		"typ": "setting",
		"name": "enum_titles",
		"def": "null",
		"desc": "enum_titles - An array of display values to use for select box options in the same order as defined with the enum keyword. Works with schema using enum values."
	},
	{
		"id": 48,
		"hidden": 0,
		"typ": "setting",
		"name": "expand_height",
		"def": "null",
		"desc": "expand_height - If set to true, the input will auto expand/contract to fit the content. Works best with textareas."
	},
	{
		"id": 49,
		"hidden": 0,
		"typ": "setting",
		"name": "grid_columns",
		"def": "null",
		"desc": "grid_columns - Explicitly set the number of grid columns (1-12) for the editor if it’s within an object using a grid layout."
	},
	{
		"id": 50,
		"hidden": 0,
		"typ": "setting",
		"name": "hidden",
		"def": "null",
		"desc": "hidden - If set to true, the editor will not appear in the UI (works for all types)"
	},
	{
		"id": 51,
		"hidden": 0,
		"typ": "setting",
		"name": "input_height",
		"def": "null",
		"desc": "input_height - Explicitly set the height of the input element. Should be a valid CSS width string (e.g. “100px”). Works best with textareas."
	},
	{
		"id": 52,
		"hidden": 0,
		"typ": "setting",
		"name": "input_width",
		"def": "null",
		"desc": "input_width - Explicitly set the width of the input element. Should be a valid CSS width string (e.g. “100px”). Works for string, number, and integer data types."
	},
	{
		"id": 53,
		"hidden": 0,
		"typ": "setting",
		"name": "remove_empty_properties",
		"def": "null",
		"desc": "remove_empty_properties - If set to true for an object, empty object properties (i.e. those with falsy values) will not be returned by getValue()."
	}
];
export const jeLibReady = writable(false);
export const jeOptions = writable(options);
export const jeSchemOptions = writable(options);
export const jeOps = writable(settings);
function createList() {
	const {subscribe, set, update} = writable([]);
	return {
		subscribe,
		fetchAll: () => {
			const fetchData = fetchJeList();
			set(fetchData);
		}
	}
}

export const jelist = createList();

function createSchemList() {
	const {subscribe, set, update} = writable([]);
	return {
		subscribe,
		fetchAll: () => {
			const fetchData = fetchSeList();
			set(fetchData);
		}
	}
}

export const schemalist = createSchemList();

function createPager() {
	const { subscribe, set, update } = writable(0);
	return {
		subscribe,
		goto: (i) => set(i),
		home: () => set(0)
	};
}
export const actPage = createPager();
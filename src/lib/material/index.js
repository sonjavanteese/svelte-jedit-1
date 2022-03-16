// @index(['./**/*.svelte', './templ/*.js'], (f, _, e) => `export { default as ${_.pascalCase(f.name)} } from '${f.path}${f.ext}';`)
export { default as Button } from './Button.svelte';
export { default as ButtonGroup } from './ButtonGroup.svelte';
export { default as Checkbox } from './Checkbox.svelte';
export { default as Dialog } from './Dialog.svelte';
export { default as ExpansionPanel } from './ExpansionPanel.svelte';
export { default as Icon } from './Icon.svelte';
export { default as Menu } from './Menu.svelte';
export { default as Menuitem } from './Menuitem.svelte';
export { default as Modal } from './Modal.svelte';
export { default as Popover } from './Popover.svelte';
export { default as Radio } from './Radio.svelte';
export { default as Ripple } from './Ripple.svelte';
export { default as Sidepanel } from './Sidepanel.svelte';
export { default as Snackbar } from './Snackbar.svelte';
export { default as Textfield } from './Textfield.svelte';
// @endindex
// @index(['./**/*.svelte'], (f, _, e) => `${e.isFirst ? '/* \n import { \n' : ''} ${_.pascalCase(f.name)}${e.isLast ? '\n } from "lib/_liblist"; \n*/' : ','}`)
/* 
 import { 
 Button,
 ButtonGroup,
 Checkbox,
 Dialog,
 ExpansionPanel,
 Icon,
 Menu,
 Menuitem,
 Modal,
 Popover,
 Radio,
 Ripple,
 Sidepanel,
 Snackbar,
 Textfield
 } from "$lib/material"; 
*/
// @endindex
// @index(['./**/*.jsx'], f => `// import * from '${f.path.replace(/\/index$/, '')}'`)

// @endindex
import { default as icoAlert } from '../assets/svg1/alert.svelte'
import { default as icoCode } from '../assets/svg1/code.svelte';
import { default as icoDb } from '../assets/svg1/db.svelte';
import { default as icoHome } from '../assets/svg1/home.svelte';
export const configA = {
  titel: "Info Modal 1",
  body: null,
  component: null,
  data: null,
msg: `Godfather ipsum dolor sit amet. Whats wrong with being a lawyer My father is no different than any powerful man, any man with power, like a president or senator. I'm your older brother, Mike, and I was stepped over! Never hate your enemies. It affects your judgment`
}  
export const configCode = {
  titel: "Code Preview",
  body: null,
  component: null,
  data: null,
}


export const navi = [
  {
    "name": "Start",
    "path": "/",
    "icon": icoHome
  },
  {
    "name": "List",
    "path": "/list",
    "icon": icoDb
  },
  {
    "name": "Editor",
    "path": "/editor",
    "icon": icoCode
  },
  {
    "name": "Creator",
    "path": "/create",
    "icon": icoAlert
  }
];

export {icoCode,icoDb,icoHome,icoAlert};





// @index(['../assets/svg1/*.{png,jpg,jpeg,svg,gif,svelte}', './routes/**/*.{svelte}'], (f, _) => `import { default as ico${_.pascalCase(f.name)} } from '${f.path}${f.ext}'`)


// @endindex
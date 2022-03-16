// @index('x../../../assets/svg1/*.{png,jpg,jpeg,svg,gif}', (f, _) => `import { default as img${_.pascalCase(f.name)} } from '${f.path}${f.ext}'`)

// @endindex

//@index('./*.svelte', f => `// export { default as ${f.name} } from '${f.path}${f.ext}'`)
// export { default as Debugger } from './Debugger.svelte'
// export { default as DetailCode } from './DetailCode.svelte'
// export { default as DetailFetch } from './DetailFetch.svelte'
// export { default as DetailList } from './DetailList.svelte'
// export { default as FetchBtn } from './FetchBtn.svelte'
// export { default as ListItem } from './ListItem.svelte'
// @endindex
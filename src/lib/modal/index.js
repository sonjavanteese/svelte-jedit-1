// @index(['./**/*.svelte', './templ/*.js'], (f, _, e) => `export { default as ${_.pascalCase(f.name)} } from '${f.path}${f.ext}';`)
export { default as ModalBase } from './ModalBase.svelte';
export { default as ModalBodyA } from './ModalBodyA.svelte';
export { default as ModalBodyB } from './ModalBodyB.svelte';
export { default as ModalContent } from './ModalContent.svelte';
// @endindex
// @index(['./x**/*.svelte'], (f, _, e) => `${e.isFirst ? '/* \n import { \n' : ''} ${_.pascalCase(f.name)}${e.isLast ? '\n } from "lib/_liblist"; \n*/' : ','}`)

// @endindex
// @index(['./x**/*.svelte', './templ/*.js'], (f, _, e) => `import ${_.pascalCase(f.name)} from '${f.path}${f.ext}';`)

// @endindex
// @index(['./**/*.jsx'], f => `// import * from '${f.path.replace(/\/index$/, '')}'`)

// @endindex
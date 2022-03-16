import { wrap } from 'svelte-spa-router/wrap';
// @index(['./routes/**/*.svelte', './templ/*.js'], (f, _, e) => `import ${_.pascalCase(f.name)} from '${f.path}${f.ext}';`)
import Create from './routes/create.svelte';
import Editor from './routes/editor.svelte';
// import ListData from './routes/list-data.svelte';
import List from './routes/list.svelte';
import NotFound from './routes/not-found.svelte';
import Start from './routes/Start.svelte';
// @endindex
import {icoCode,icoDb,icoHome,icoAlert} from './lib/config';


export const routes = {
      '/': wrap({
        component: Start,
        props: {
            icon: icoHome
        }
    }),
    '/list': wrap({
        component: List,
        props: {
            icon: icoDb
        }
    }),
    '/create': wrap({
        component: Create,
        props: {
            icon: icoCode
        }
    }),
    '/editor': wrap({
        component: Editor,
        props: {
            icon: icoAlert
        }
    }),
    '*': NotFound,
} 




function JEDITOR() {
    this.ops = [];
    this.config = {};
    this.setOps = function(data){
        this.ops = data;
    }
};


export const jedit = new JEDITOR();
// jedit.setOps = ["app"];

export const loadConfig = async () => {
    let data;
    let res = await fetch('./data/jedit.config.json');
    data = await res.json();
    if (data && data.ops) {
        jedit.setOps(data.ops);
        return data;
    }
};

//@index('./ctrl/*.svelte', f => `// import ${f.name} from '${f.path}${f.ext}'`)
// import Debugger from './ctrl/Debugger.svelte'
// import DetailCode from './ctrl/DetailCode.svelte'
// import DetailList from './ctrl/DetailList.svelte'
// import FetchBtn from './ctrl/FetchBtn.svelte'
// import ListDetail from './ctrl/ListDetail.svelte'
// import ListItem from './ctrl/ListItem.svelte'
// @endindex
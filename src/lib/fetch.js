import {supabase} from './db';

export const getData = async () => {
  try {
    let { data, error } = await supabase.from('jedit_data').select('group,titel,info,link,id').order('group', { ascending: true }).order('id', { ascending: true })
    if (data) {
      return data;
    }
  } catch (error) {
    console.log(error)
  }
};
export const getDetails = async (id) => {
  try {
    let { data, error } = await supabase.from('jedit_data').select('*').eq('id', id).single();
    if (data) {
      return data;
    }
  } catch (error) {
    console.log(error)
  }
};



export const fetchData = async (filter) => {
  let filterSets = filter;
  let query = supabase.from('jedit_data').select('*')
  if (filterSets) {
    query = query.eq('group', filterSets)
  }
  query = query.order('group', { ascending: true }).order('id', { ascending: true })
  try {
    let { data, error } = await query
    if (data) {
      return data;
    }
  } catch (error) {
    console.log(error)
  }
};

export const appData = [
    {
      "id": 0,
      "slug": "start",
      "head": {
        "titel": "Nwp-Studio",
        "sub": "Data Structure Editor",
        "bg": "https://nwp-cgn.de/studio/upload/kat11/server/php/files/sf1.png"
      },
      "link": {
        "path": "/",
        "name": "Start",
        "icon": "home"
      },
      "files": [
        {
          "titel": "Slide 1",
          "file": "https://nwp-cgn.de/img/poser/imgA01.png"
        },
        {
          "titel": "Slide 2",
          "file": "https://nwp-cgn.de/img/poser/imgA02.png"
        },
        {
          "titel": "Slide 3",
          "file": "https://nwp-cgn.de/img/poser/imgA03.png"
        },
        {
          "titel": "Slide 4",
          "file": "https://nwp-cgn.de/img/poser/imgA04.png"
        },
        {
          "titel": "Slide 5",
          "file": "https://nwp-cgn.de/img/poser/imgA05.png"
        },
        {
          "titel": "Slide 6",
          "file": "https://nwp-cgn.de/img/poser/imgA06.png"
        },
        {
          "titel": "Slide 7",
          "file": "https://nwp-cgn.de/img/poser/imgA07.png"
        },
        {
          "titel": "Slide 8",
          "file": "https://nwp-cgn.de/img/poser/imgA08.png"
        }
      ]
    },
    {
      "id": 1,
      "slug": "list",
      "head": {
        "titel": "Nwp-Editor",
        "sub": "nwp-cgn.de",
        "bg": "https://nwp-cgn.de/studio/upload/kat11/server/php/files/sf4.png"
      },
      "link": {
        "path": "/list/",
        "name": "List",
        "icon": "tube"
      },
      "files": []
    },
    {
      "id": 2,
      "slug": "editor",
      "head": {
        "titel": "Nwp-Editor",
        "sub": "nwp-cgn.de",
        "bg": "https://nwp-cgn.de/studio/upload/kat11/server/php/files/sf4.png"
      },
      "link": {
        "path": "/editor/",
        "name": "Editor",
        "icon": "tube"
      },
      "files": []
    }
];
export let navi = appData.map(x => x.link);
export let pages = appData.map(x => x.head);

export const delayTimer = (delay = 1000) =>
    new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("done");
        }, delay);
    });
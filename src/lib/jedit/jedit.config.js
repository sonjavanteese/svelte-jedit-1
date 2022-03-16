  export const configA = {
      titel: "Info Modal 1",
      body: null,
      component: null,
      data: null,
      dataid: 0,
    layout: 'default',
    msg: `Godfather ipsum dolor sit amet. Whats wrong with being a lawyer My father is no different than any powerful man, any man with power, like a president or senator. I'm your older brother, Mike, and I was stepped over! Never hate your enemies. It affects your judgment`
  }  
  export const configC = {
    titel: "Info Modal 3",
    body: `AK-47. The very best there is. When you absolutely, positively got to kill every motherfucker in the room, accept no substitutes. Ordell Robbie from Jackie Brown`,
    component: null,
    data: null,
    dataid: 0,
      layout: 'full'
  }  
  export const configB = {
    titel: "Scroll Modal 2",
    body: `I hid this uncomfortable piece of metal up my ass for two years. Then, after seven years, I was sent home to my family. And now, little man, I give the watch to you. Captain Koons from Pulp Fiction`,
    component: null,
    data: null,
    dataid: 0,
    layout: 'scroll'
  }
  export let modal_daten = {
    titel: "Details",
    body: null,
    component: null,
    data: null,
    dataid: 0,
    layout: 'scroll',
    modal: {
        id: 0,
        size: 'xl',
        center: true,
        scroll: true,
        full: false 
    },
    msg: ''
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
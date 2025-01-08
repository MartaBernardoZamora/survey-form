const getData = (e) => {
    const datas=[...e.target]

    datas.map(data=>{
        //console.log(data.type);
        //data.type=="text" && data.value && console.log(`${data.id}: ${data.value}`);
        //data.type=="email" && data.value && console.log(`${data.id}: ${data.value}`);
        //data.type=="select-one" && data.value && console.log(`${data.id}: ${data.value}`);
        //data.type=="radio" && data.checked && console.log(`${data.name}: ${data.value}`);
        data.type=="checkbox" && console.log(e);
        data.type=="checkbox" && data.checked && console.log(`${data.name}: ${data.value}`);
        //const type=data.name ? data.name : data.id;
        //data.value && console.log(`${type}: ${data.value}`);
    })
}
git 
document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault();
    getData(e);
});
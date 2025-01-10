const setConsole = (name, value) => console.log(`${name}: ${value}`);
const getData = (e) => {
    const datas=[...e.target];
    datas.map(data=>{
        ["text", "email", "select-one", "textarea"].includes(data.type) && data.value && setConsole(data.id || data.name, data.value);
        data.checked && setConsole(data.name, data.value);        
    })
}
document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault();
    getData(e);
});
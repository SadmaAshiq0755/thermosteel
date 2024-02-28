export function handleContinent(e){
    const cont = countries.filter(el=>el.continents == e.innerText);
    displayContent(cont);
}
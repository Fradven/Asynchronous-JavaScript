/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const tpl = document.querySelector("#tpl-hero");
    const target = document.querySelector("#target");
    const heroID = document.querySelector("#hero-id")

    document.querySelector('#run').addEventListener("click", async () => {
        const response = await fetch("http://localhost:3000/heroes/"+heroID.value);
        const responseJson = await response.json()

        let tplImport = document.importNode(tpl.content, true)
        tplImport.querySelector('.name').textContent = responseJson.name 
        tplImport.querySelector('.alter-ego').textContent = responseJson.alterEgo
        tplImport.querySelector('.powers').textContent = responseJson.abilities 
        target.appendChild(tplImport) 
        console.log(tplImport)
    });
})();

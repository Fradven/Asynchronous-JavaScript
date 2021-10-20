/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: list to template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const tpl = document.querySelector("#tpl-hero");
    const target = document.querySelector("#target");

    document.querySelector("#run").addEventListener("click", async () => {
        const response = await fetch("http://localhost:3000/heroes");

        // your code here
        let responseJson = await response.json()


        for(element of responseJson){
            let tplImport = document.importNode(tpl.content, true)

            let name = tplImport.querySelector(".name")
            let alterEgo = tplImport.querySelector(".alter-ego")
            let powers = tplImport.querySelector(".powers")

            name.textContent = element.name
            alterEgo.textContent = element.alterEgo
            powers.textContent = element.abilities

            target.appendChild(tplImport)
        }

});
})();


/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: add an element
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    
    document.querySelector("#run").addEventListener("click", async() => {
        const name = document.querySelector("#hero-name").value;
        const alterEgo = document.querySelector("#hero-alter-ego").value;
        const powers = document.querySelector("#hero-powers");
        let ability = powers.value.split(", ")
        if (name !== "" && alterEgo !== "" && powers !== "") {
            const result = await fetch("http://localhost:3000/heroes", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    alterEgo: alterEgo,
                    abilities: ability
                })
            });
            const getAll = await fetch("http://localhost:3000/heroes")
            console.log(await getAll.json())
            console.log(await result.json());
        }
    });
})();

/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // 1. on click on the button
        document.querySelector("#run").addEventListener("click", () => {
    // 2. call the getPosts function
    window.lib.getPosts( (error, posts)=> {

        let message;
            if (error) { message = error }
            else { message = posts };
    // 3. For each item, calls the getComments function

            message.forEach((item) => {
    // 4. adds the comments obtained in a comments property of the item
        
            window.lib.getComments(item.id,(err,comments) => {
            item.comments=comments;
            
        })

        
    });
    // 5. display the posts in the console    
    console.log(message);    
    })

});

})()

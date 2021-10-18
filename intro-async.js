// 1 Callback

function add(x,y) {
    return x + y
}

function addTen(a, callback) {
    return callback(10, a)
}

console.log( 
    addTen(7, add)
)

// 2 async Callback 
function multiplyByTen(x, callback) {
    let error; 
    let result; 
    if( typeof x !== 'number' ) {
        error = new Error("x must be a number!")
    }
    if ( x < 0 ) {
        error = new Error("x must be positive!")
    }
    
    if(error) {
        error
    } else {
        result = x * 10;
    }

    return callback(error, result)
}

console.log(
    multiplyByTen( "15", function(error, result) {
        let message;
        if(error) {
            message = error;
        } else if(result) {
            message = result
        }
        return message;
    })
)


// 3 Promise
function multiplyByTen(x) {
    return new Promise( (resolve, reject) => {
        let error; 
        if( typeof x !== 'number' ) {
            error = new Error("x must be a number!")
        }
        if ( x < 0 ) {
            error = new Error("x must be positive!")
        }
        
        if(error) {
            reject(error)
        } else {
            resolve(x * 10);
        }
    })
}


multiplyByTen("15").then( 
    result =>  console.log(result)
).catch(
    error => console.log(error)
)


// 4 async/await
const asyncMutiplyByTen = async(x) => {
    try {
        const result = await multiplyByTen(x)
        console.log(result)
    } catch(error) {
        console.log(error)
    }
}

asyncMutiplyByTen(-9)
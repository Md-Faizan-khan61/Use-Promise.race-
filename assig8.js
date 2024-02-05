/**Assignment 8
Create a function racePromises that takes an array of promises
 and returns the result of the first promise that
resolves or rejects. Use Promise.race() to implement this. */

// Promise.race() - It's useful when you want the first async task
// to complete, but do not care about its eventual state 
//(i.e. it can either succeed or fail).

function racePromises(promises){
 return Promise.race(promises);
}

const promise1 = new Promise((resolve)=>
    setTimeout(()=>resolve("promise 1 resolved"),1000)
)
const promise2 = new Promise((_,reject)=>
    setTimeout(()=>reject("promise 2 reject"),500)
)
racePromises([promise1,promise2])
.then((res)=>console.log(res))
.catch((error)=>console.log(error))
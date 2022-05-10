// // Promise is a JavaScript object for asynchronous operation.
// // State: pending -> fulfilled or rejected
// // Producer vs Consumer

// // 1. Producer
// // when new Promise is created, the executor runs automatically.
// const testPromise = new Promise((resolve, reject) => {
//     // doing some heavy work (network, read files)
//     console.log('doing something...');
//     setTimeout(() => {
//         resolve('woojin');
//         // reject(new Error('no network'));
//     }, 500);
// });

// // 2. Consumers: then, catch, finally
// testPromise
//     .then(console.log)
//     .catch(console.log);

// // 3. Promise chaining
// const fetchNumber = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
// });

// const fetchReturn = ()  => new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1500);
// });

// fetchNumber
//     .then(num => num * 2)
//     .then(num => num * 3)
//     .then(num => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => resolve(num - 1), 1000);
//         });
//     })
//     .then(num => console.log(num));
    

// fetchReturn().then(console.log)

// // 4. Error Handling
// const getHen = () => 
//     new Promise((resolve, reject) => {
//         setTimeout(() => resolve('닭'), 1000);
//     });

// const getEgg = hen => 
//     new Promise((resolve, reject) => {
//         // setTimeout(() => resolve(`${hen} => 달걀`), 1000);
//         setTimeout(() => reject(new Error(`${hen} => 달걀`)), 1000);
//     });

// const cook = egg => 
//     new Promise((resolve, reject) => {
//         setTimeout(() => resolve(`${egg} => 프라이`), 1000);
//     });

// getHen()//
// .then(hen => getEgg(hen))
// .catch(error => {
//     return '밥';
// })
// .then(egg => cook(egg))
// .then(meal => console.log(meal))
// .catch(error => console.log(error));

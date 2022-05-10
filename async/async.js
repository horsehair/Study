// // // async & await
// // // clear style of using promise

// // // 1. async
// // // - Promise
// // const fetchUser = () => {
// //     return new Promise((resolve, reject) => {
// //         // do network request in 10 secs ...
// //         resolve('woojin');
// //     });
// // }

// // // - Async
// // const fetchUserAsync = async () => {
// //     // do network request in 10 secs ...
// //     console.log('loading...');
// //     return 'jina';
// // }

// // const user = fetchUser();
// // user.then(console.log);
// // console.log(user);

// // const userAsync = fetchUserAsync();
// // userAsync.then(console.log);
// // console.log(userAsync);


// // // 2. await
// const delay = (ms) => {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// const getApple = async () => {
//     await delay(4000);
//     return '🍎';
// }

// const getBanana = async () => {
//     await delay(2000);
//     return '🍌';
// }

// // getApple().then(console.log);
// // getBanana().then(console.log);

// // const pickFruits = () => {
// //     return getApple().then(apple => {
// //         return getBanana().then(banana => `${apple} + ${banana}`);
// //     })
// // };

// // const pickFruits = async () => {
// //     const apple = await getApple();
// //     const banana = await getBanana();
// //     return `${apple} + ${banana}`;
// // }

// // // pickFruits().then(console.log);

// const pickAllFruits = () => {
//     return Promise.all([getApple(), getBanana()]).then(fruits =>
//         fruits.join(' + ')
//     );
// }

// pickAllFruits().then(console.log);

// const pickOnlyOne = () => {
//     return Promise.race([getApple(), getBanana()]);
// }

// pickOnlyOne().then(console.log);


// const delayApple = (ms) => {
//     return new Promise(resolve => setTimeout(() => resolve('🍎'), ms));
// }

// const getApple = async () => {
//     a = await delayApple(10000);
//     // a = delayApple(3000);
//     console.log(a)
//     fruit = a + '🍌'
//     return fruit;
// }

// getApple().then(console.log);
// // getBanana().then(console.log);

// // const getBanana = async () => {
// //     await delay(3000);
// //     return '🍌';₩
// // }


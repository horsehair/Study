// async & await
// clear style of using promise

// 1. async
// - Promise
// const fetchUser = (): Promise<string> =>  {
//     return new Promise((resolve, reject) => {
//         // do network request in 10 secs ...
//         resolve('woojin');
//     });
// }

// // - Async
// const fetchUserAsync = async (): Promise<string> => {
//     // do network request in 10 secs ...
//     console.log('loading...');
//     return 'jina';
// }

// const user = fetchUser();
// user.then(console.log);
// console.log(user);

// const userAsync = fetchUserAsync();
// userAsync.then(console.log);
// console.log(userAsync);


// 2. await
const delay = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getApple = async (): Promise<string> => {
    await delay(4000);
    return '🍎';
}

// const getBanana = async (): Promise<string> => {
//     await delay(2000);
//     return '🍌';
// }

// getApple().then(console.log);
// getBanana().then(console.log);

// const pickFruits = (): Promise<string> => {
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     })
// };

const pickFruits = async (): Promise<string> => {
    const apple: string = await getApple();
    const banana: string = await getBanana();
    return `${apple} + ${banana}`;
}

// pickFruits().then(console.log);

const pickAllFruits = (): Promise<string> => {
    return Promise.all([getApple(), getBanana()]).then(fruits =>
        fruits.join(' + ')
    );
}

// pickAllFruits().then(console.log);

const pickOnlyOne = (): Promise<string> => {
    return Promise.race([getApple(), getBanana()]);
}

// pickOnlyOne().then(console.log);


const delayApple = (ms: number): Promise<string> => {
    return new Promise(resolve => setTimeout(() => resolve('🍎'), ms));
}

const getApple = async (): Promise<string> => {
    var a: string = await delayApple(3000);
    // a = delayApple(3000);
    var fruit: string = a + '🍌'
    return fruit;
}

const getBanana = async (): Promise<string> => {
    // await delay(3000);
    return '🍌';
}

getApple().then(console.log);
// getBanana().then(console.log);



// // Callback Hell example

// class UserStorage {
//     loginUser(id, password, onSuccess, onError) {
//         setTimeout(() => {
//             if (
//                 (id === 'woojin' && password === 'hustle') ||
//                 (id === 'money' && password === 'many')
//             ) {
//                 onSuccess(id);
//             } else {
//                 onError(new Error('not found'));
//                 console.log(typeof Error);
//             }
//         }, 2000);
//     }

//     getRoles(user, onSuccess, onError) {
//         setTimeout(() => {
//             if (user === 'woojin') {
//                 onSuccess({ name: 'woojin', role: 'admin' });
//             } else {
//                 onError(new Error('no access'));
//             }
//         }, 1000);
//     }
// }

// const userStorage = new UserStorage();
// const id = 'woojin';
// const password = 'hustle1';
// userStorage.loginUser(
//     id,
//     password,
//     user => {
//         userStorage.getRoles(
//             user,
//             userWithRole => {
//                 console.log(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
//             },
//             error => {
//                 console.log(error);
//             }
//         );
//     },
//     error => {
//         console.log(error);
//     }
// );

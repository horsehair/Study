// Callback Hell example

class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'woojin' && password === 'hustle') ||
                    (id === 'money' && password === 'many')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'woojin') {
                    resolve({ name: 'woojin', role: 'admin' });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = 'money';
const password = 'many';

userStorage.loginUser(id, password)
    .then(id => userStorage.getRoles(id))
    .then(value => console.log(value))
    .catch(error => console.log(error));


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

// Callback Hell example
// type callBackType = (message: string) => void;

interface success {
    name: string;
    role: string;
}

const obj: success = {
    name: 'woojin',
    role: 'admin',
}

class UserStorage {
    loginUser(
        id: string,
        password: string,
        onSuccess: (x: string) => void,
        onError: (x: object) => void) {
        setTimeout((): void => {
            if (
                (id === 'woojin' && password === 'hustle') ||
                (id === 'money' && password === 'many')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user: string, onSuccess: (x: success) => void, onError: (x: object) => void) {
        setTimeout(() => {
            if (user === 'woojin') {
                // onSuccess({ name: 'woojin', role: 'admin' });
                onSuccess(obj);
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id: string = 'woojin';
const password: string = 'hustle';
userStorage.loginUser(
    id,
    password,
    (user: string) => {
        userStorage.getRoles(
            user,
            (userWithRole: success) => {
                console.log('hi')
                console.log(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);

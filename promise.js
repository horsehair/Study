const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 달걀`), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 후라이`), 1000);
    });

getHen()
    .then(x => cook(x))
    .then(x => console.log(x));

getHen()
    .then(x => getEgg(x))
    .then(x => cook(x))
    .then(x => console.log(x));
    
getHen()
    .then(x => console.log(x));

import {toast} from "react-toastify";

export const gift=[{
    imageUrl:"https://www.sendgiftsahmedabad.com/pub/media/catalog/product/cache/fe2a752764b2352ecdbaaa90a203554f/5/_/5_2.jpg",
    title: ""
},{
    imageUrl:"https://hips.hearstapps.com/hmg-prod/images/close-up-of-stack-gifts-on-table-against-blue-royalty-free-image-1676327737.jpg?crop=0.668xw:1.00xh;0,0&resize=640:*"
},{
    imageUrl:"https://hips.hearstapps.com/hmg-prod/images/christmas-gift-box-food-decor-and-fir-tree-branch-royalty-free-image-1694638050.jpg"
},{
    imageUrl:"https://st3.depositphotos.com/16102236/32196/i/450/depositphotos_321967208-stock-photo-female-woolen-white-sweater-holding.jpg"
},{
    imageUrl:"https://www.livemint.com/lm-img/img/2023/11/01/1600x900/Karwachauth_financial_gifts_1698810796399_1698810796687.jpg"
},{
    imageUrl:"https://hips.hearstapps.com/hmg-prod/images/how-to-wrap-a-gift-like-a-pro-1650557383.jpg?crop=1.00xw:0.753xh;0,0.161xh&resize=1200:*"
},{
    imageUrl:"https://5.imimg.com/data5/ZR/PE/WK/SELLER-2635424/doll-gift-sets-500x500.jpg"
},{
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TesZmap6g1LFAC6ee5Y22fx8gyVdofVqJQ&usqp=CAU"
},{
    imageUrl:"https://m.media-amazon.com/images/I/715igBNcyEL._AC_UF1000,1000_QL80_.jpg"
},{
    imageUrl:"https://m.media-amazon.com/images/I/715igBNcyEL._AC_UF1000,1000_QL80_.jpg"
},{
    imageUrl:"https://m.media-amazon.com/images/I/715igBNcyEL._AC_UF1000,1000_QL80_.jpg"
},]


export const successToast = (message) => {
    toast.success(message)
}

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const titles = ['Chocolate', 'Soft toy', 'Jewelry', 'Flower'];
const arrayObjects = [];

const generateRandomDescription = () => {
    const adjectives = ['beautiful', 'delicious', 'adorable', 'elegant', 'fragrant'];
    const nouns = ['gift', 'creation', 'present', 'ornament', 'bouquet'];
    const getRandomWord = (array) => array[getRandomInt(0, array.length - 1)];

    let description = '';
    for (let i = 0; i < 15; i++) {
        description += `${getRandomWord(adjectives)} ${getRandomWord(nouns)} `;
    }

    return description.trim();
};

for (let i = 1; i <= 50; i++) {
    const title = titles[getRandomInt(0, titles.length - 1)];
    const object = {
        id: `ID${i}`,
        title: title,
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: gift[i%10].imageUrl,
    };
    arrayObjects.push(object);
}

export const productDetails = arrayObjects;

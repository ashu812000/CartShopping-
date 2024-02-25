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
    for (let i = 0; i < 5; i++) {
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

export const productDetails1 = arrayObjects;

export const productDetails = [
    {
        id: "ID1",
        title: "Flower",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/fresh-flowers/c/m/o/midnight-passion-rose-bouquet-fnp-original-imagy57jzqgsyr6f.jpeg?q=70",
    },
    {
        id: "ID2",
        title: "Latte Chocolate",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/chocolate/t/o/w/-original-imagtjhfdqvj7vtq.jpeg?q=70",
    },
    {
        id: "ID3",
        title: "Jewelry",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://media.istockphoto.com/id/1277517088/photo/fancy-designer-antique-golden-bracelets-for-woman-fashion.jpg?s=612x612&w=0&k=20&c=n49O0S5rIgzxJX5bU1YjwRHfou0DYPcmsv-N5JAAM14=",
    },
    {
        id: "ID4",
        title: "Custom Jewelry",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/ring/6/b/h/-original-imagqgcymgqbeyvn.jpeg?q=70",
    },
    {
        id: "ID5",
        title: "Knight Flower",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/fresh-flowers/d/h/2/-original-imagxuzkyvww88zg.jpeg?q=70",
    },
    {
        id: "ID6",
        title: "Rose Flower",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/fresh-flowers/u/w/b/-original-imagxuzjrnmtpcub.jpeg?q=70",
    },
    {
        id: "ID7",
        title: "Delight Jewelry",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/kfwvcsw0-0/ring/d/p/x/adjustable-dr-018-ring-set-devora-original-imafw9waezyqp6rd.jpeg?q=70",
    },
    {
        id: "ID8",
        title: "Soft toy",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://media.istockphoto.com/id/1277517088/photo/fancy-designer-antique-golden-bracelets-for-woman-fashion.jpg?s=612x612&w=0&k=20&c=n49O0S5rIgzxJX5bU1YjwRHfou0DYPcmsv-N5JAAM14=",
    },
    {
        id: "ID9",
        title: "Child Toy",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/jwaztzk0/toy-weapon/u/r/u/hot-fire-soft-bullet-toy-gun-7036-bluekart-online-original-imafdpffqutx3jch.jpeg?q=70",
    },
    {
        id: "ID10",
        title: "Car toy",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/kqv8vww0/vehicle-pull-along/g/v/u/friction-powered-mini-monster-cars-for-kids-with-big-rubber-original-imag4rz9fbbfdbwf.jpeg?q=70",
    },
    {
        id: "ID11",
        title: "Bike Toy",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/vehicle-pull-along/5/x/s/1-14-scale-pull-back-diecast-alloy-classic-motorcycle-toy-bike-original-imagx5jqy4t7sumg.jpeg?q=70",
    },
    {
        id: "ID12",
        title: "Flower",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/fresh-flowers/v/v/5/-original-imagxuzjg6dqhqcq.jpeg?q=70",
    },
    {
        id: "ID13",
        title: "Chocolate",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/chocolate/c/a/v/-original-imagwh86f4pfgzm4.jpeg?q=70",
    },
    {
        id: "ID14",
        title: "Jewelry",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQ4q9HGvdNAFDQsQd_kr1mymYSGVfLmnJMd5E2ASBFw-Toa1pATYL46QMpWMi9Bow_Fk&usqp=CAU",
    },
    {
        id: "ID15",
        title: "Soft toy",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/b/n/y/super-soft-10-complete-pack-stuffed-soft-toy-combo-of-teddy-bear-original-imagwdf5marpgkfz.jpeg?q=70",
    },
    {
        id: "ID16",
        title: "Flower",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/fresh-flowers/y/k/u/-original-imagxuzj2czrdf7c.jpeg?q=70",
    },
    {
        id: "ID17",
        title: "Flower",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/fresh-flowers/x/q/6/-original-imagxuzkpyfdr3qu.jpeg?q=70",
    },
    {
        id: "ID18",
        title: "Flower",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/fresh-flowers/p/o/q/-original-imagy4r4v3guejq8.jpeg?q=70",
    },
    {
        id: "ID19",
        title: "Chocolate",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/chocolate/x/4/d/-original-imagtjhhujxswy3z.jpeg?q=70",
    },
    {
        id: "ID20",
        title: "Soft toy",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/kwwfte80/stuffed-toy/b/9/j/kids-seater-25-hello-baby-original-imag9h2cf7ghs9mn.jpeg?q=70",
    },
    {
        id: "ID21",
        title: "Flower",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/fresh-flowers/m/i/a/-original-imagy4r467e9gppt.jpeg?q=70",
    },
    {
        id: "ID22",
        title: "Chocolate",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/chocolate/n/j/l/-original-imagwdhgnubjune6.jpeg?q=70",
    },
    {
        id: "ID23",
        title: "Jewelry",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/pendant-locket/n/c/2/na-na-owl-b-pen-arrow-sil-syfer-original-imaggvzthgznm2gy.jpeg?q=70",
    },
    {
        id: "ID24",
        title: "Jewelry",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/pendant-locket/u/4/9/na-na-hanuman-ji-pandent-locket-with-chain-for-mens-and-boys-d-d-original-imagsyenfckgtwut.jpeg?q=70",
    },
    {
        id: "ID25",
        title: "Flower",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/fresh-flowers/p/t/v/-original-imagxuzjssneu2ge.jpeg?q=70",
    },
    {
        id: "ID26",
        title: "Soft toy",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/l0bbonk0/stuffed-toy/d/3/o/winky-doll-40-hello-baby-original-imagc4zcfrvhctdf.jpeg?q=70",
    },
    {
        id: "ID27",
        title: "Chocolate",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/chocolate/g/x/8/-original-imagr4jhuqhykwjy.jpeg?q=70",
    },
    {
        id: "ID28",
        title: "Flower",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/fresh-flowers/1/e/8/-original-imagxuzkbm8vczv5.jpeg?q=70",
    },
    {
        id: "ID29",
        title: "Jewelry",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/necklace-chain/c/f/j/-original-imagqgcyhnpyht5w.jpeg?q=70",
    },
    {
        id: "ID30",
        title: "Flower",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/fresh-flowers/i/j/w/-original-imagy4r4menjbx7k.jpeg?q=70",
    },
    {
        id: "ID31",
        title: "Soft toy",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/l0bbonk0/stuffed-toy/9/g/v/cap-doll-40-hello-baby-original-imagc4sp66k9jmhq.jpeg?q=70",
    },
    {
        id: "ID32",
        title: "Flower",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/fresh-flowers/9/c/m/-original-imagxur9wuyvzq8h.jpeg?q=70",
    },
    {
        id: "ID33",
        title: "Jewelry",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/jewellery-set/1/0/u/na-na-1-ns105515-sukkhi-original-imagra69zy3f2zgc.jpeg?q=70",
    },
    {
        id: "ID34",
        title: "Chocolate",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/k2nmaa80/chocolate/d/b/5/1-5-combo-pack-milk-compound-dark-compound-white-compound-morde-original-imafhympr6yhefeu.jpeg?q=70",
    },
    {
        id: "ID35",
        title: "Flower",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/fresh-flowers/p/k/2/-original-imagxuzj8hpcsnar.jpeg?q=70",
    },
    {
        id: "ID36",
        title: "Chocolate",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/l1tmf0w0/chocolate/j/t/f/-original-imagdasppq2kzbj9.jpeg?q=70",
    },
    {
        id: "ID37",
        title: "Jewelry",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/jewellery-set/g/m/l/freshwater-na-1-stylish-metal-stone-gold-plated-jewel-set-for-original-imagrm5zpmcm8fy9.jpeg?q=70",
    },
    {
        id: "ID38",
        title: "Flower",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/fresh-flowers/n/n/l/-original-imagy4r47p9nqvyz.jpeg?q=70",
    },
    {
        id: "ID39",
        title: "Flower",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/fresh-flowers/n/n/l/-original-imagy4r47p9nqvyz.jpeg?q=70",
    },
    {
        id: "ID40",
        title: "Chocolate",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/l4oi4cw0/chocolate/a/o/c/175-milk-choco-coin-175g-jar-1-winola-original-imagfgxpnbznvvwb.jpeg?q=70",
    },
    {
        id: "ID41",
        title: "Jewelry",
        desc: generateRandomDescription(),
        price: getRandomInt(1, 100),
        quantity: getRandomInt(1, 10),
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/pendant-locket/a/6/o/-original-imagqgcx3azaw3kf.jpeg?q=70",
    },
    
]

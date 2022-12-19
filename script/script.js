const products = [
    {
        productid: 1,
        categoryid: 1,
        title: "велосипед",
        price: 45000,
        count: 13,
        marks: [1, 4, 3, 5, 4, 3]
    },
    {
        productid: 2,
        categoryid: 1,
        title: "ролики",
        price: 25000,
        count: 22,
        marks: [3, 4, 3, 5]
    },
    {
        productid: 3,
        categoryid: 2,
        title: "стол",
        price: 10000,
        count: 7,
        marks: [4, 4, 5, 4, 5, 5, 5]
    },
    {
        productid: 4,
        categoryid: 3,
        title: "шкаф",
        price: 27000,
        count: 17,
        marks: [3, 2, 4, 3, 4, 3, 2, 4]
    },
    {
        productid: 5,
        categoryid: 3,
        title: "дверь",
        price: 7000,
        count: 1,
        marks: [2, 3, 1, 4, 3]
    }
];


// 1) создать функцию getProduct, которая в качестве аргумента получает id продукта и возвращает его

// function getProduct(id){
//     const product_id = products.find(pr => pr.productid === id);
//     return product_id
// }

// console.log(getProduct(2));


// 2) создать функцию getTotalPrice, которая не получает аргументов и возвращает общую сумму всех товаров. Произмедение кол-ва на цену и сумма этого значения у всех товаров. 

// function getTotalPrice () {
//     const total = products.reduce((prev, {price, count}) => prev + price * count, 0 )
//     return total
// }

// console.log(getTotalPrice())

// 3) создать функцию, getAvgMark  которая получает в качестве аргумента id продукта и возвращает среднюю оценку данного продукта.

// function getAvgMark(id){
//     const target = products.find(pr => pr.productid === id).marks;
//     return target.reduce((a, b) => (a + b)) / target.length
// }

// console.log(getAvgMark(2))

// 4) создать функцию, getAvgMarkByCategory которая получает в качестве аргумента id категории и возвращает среднюю оценку всех товаров данной категории. 
// Applied this function at lesson

// function getAvgMarkByCategory(id){
//     const target = products.filter(({categoryid}) => categoryid === id)
//                             .reduce((prev, {marks}) => [...prev, ...marks], []);
//     return target.reduce((a, b) => (a + b)) / target.length
// }


// 5) создайте функцию getLovelyProduct которая возвращает продукт с наибольшим рейтингом
// Corrected at lesson, I've deleted almost all my mistakes

// function getLovelyProduct(){
//     products.map(product => {
//         const marks_sum = product.marks.reduce((a, b) => a + b);
//         product.avg_mark = marks_sum / products.marks.length;
//         return product
//     })
//     const target = products.reduce((prev, item) => prev.avg_mark > item.avg_mark ? prev : item);

//     return target

//     // const target = getAvgMarkByCategory(?)
//     // products.foreach
// }

// Another way of this function:

// const getLovelyProduct = () => 
//     products.map(product => ({
//         ...product, 
//         avg_mark: product.marks.reduce((a, b) => a + b) / products.marks.length
//     }))
//     .reduce((prev, item) => 
//         prev.avg_mark > item.avg_mark ? prev : item
//     )
    

// Готовую работу опубликуйте в github и сдайте ссылку на него.
const Intreverse = (num) => {
    return parseInt(num.toString().split("").reverse().join("")) * Math.sign(num)
}

console.log(Intreverse(244))
console.log(Intreverse(534))
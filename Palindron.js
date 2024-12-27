const Palindron = (str) => {
    return str.split("").reverse().join("") === str
}

console.log(Palindron("Hello"))
console.log(Palindron("abba"))
const SentenceCapitalization = (sent, arr=null) => {
    // const word = sent.toLowerCase().split(" ")
    // let toUpper = ""
    // word.forEach(element => {
    //     for(let i = 0; i < element.length; i++) {
    //         if(!arr) {
    //             if(i === 0)
    //                 toUpper = `${toUpper}${element[i].toUpperCase()}`
    //             else
    //                 toUpper = `${toUpper}${element[i]}`
    //         }
    //         else {
    //             if(arr.includes(element[i]))
    //                 toUpper = `${toUpper}${element[i].toUpperCase()}`
    //             else 
    //                 toUpper = `${toUpper}${element[i]}`
    //         }
    //     }

    //     toUpper = toUpper + " "

    // });
    
    // return toUpper

    return sent.toLowerCase().split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")
}

console.log(SentenceCapitalization("chibueze thankgod"))
console.log(SentenceCapitalization("webdesign", ["w", "d"]))
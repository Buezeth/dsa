const ArrayChunk = (input, chunk) => {
    const result = []
    let modChunk = chunk
    for(let i = 0; i < input.length; i=i+chunk) {
        result.push(input.slice(i, modChunk))
        modChunk = modChunk + chunk
    }
    return result
} 

console.log(ArrayChunk([1,2,3,4,5,6, 7], 2))
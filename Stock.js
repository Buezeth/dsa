const Stock = (arr) => {
    let max = arr[arr.length - 1]
    let min = arr[0]

    let minIndex = 0
    for(let j = arr.length -1; j > 0; j--) {
        for(let i = 0; i < arr.length; i++) {
            if(min > arr[i]) {
                min = arr[i]
                minIndex = i
            }
            if( minIndex <= j) {
                if(max < arr[j]) {
                    max = arr[j]
                }
            }
        }
    }

    console.log(max, "", min)
    return max - min
}

console.log(Stock([7, 1, 5, 3, 6, 4]))
console.log(Stock([13, 12, 10, 2, 1, 3, 5, 7]))
console.log(Stock([1, 12, 10, 2, 4, 3, 5, 7]))
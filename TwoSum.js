var twoSum = function(nums, target) {
    let value = []

    for(let i = 0; i < nums.length; i++) {
        for(let j = i; j < nums.length; j++) {
            if(nums[i] + nums[j] === target )
                value = [nums[i], nums[j]]
        }
    }

   return value
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([1,4,5,13], 17))
// Write your code below this line.

function luckyNumbers(n) {
    let nums = [1,2,3,4,5,6,7,8,9,10]
    let luckyNums = []
    for (let i = 0; i < n; i++) {
        let x = Math.floor(Math.random() * nums.length)
        luckyNums.push(nums[x])
        nums.splice(x, 1)
    }   
    return luckyNums
}

console.log(luckyNumbers(3))
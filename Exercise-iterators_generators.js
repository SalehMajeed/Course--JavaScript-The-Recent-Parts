var numbers = {
    *[Symbol.iterator]({
        start = 0,
        end = 100,
        step = 1
    } = {}){
        for (let i = start; i <= end; i += step){ 
            yield i
        }
    }
}

for (let num of numbers){
    console.log(num)
}

console.log(`My lucky numberss are: ${
    [...numbers[Symbol.iterator]({
        start: 6,
        end: 30,
        step: 4
    })]
} `)
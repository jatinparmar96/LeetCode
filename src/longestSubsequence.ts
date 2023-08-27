console.time("input")
// const numsInput = new Array(10000000).fill(0).map(_ => Math.floor(Math.random()*100000000));
const numsInput = [9,1,4,7,3,-1,0,5,8,-1,6]
console.timeEnd("input")
function longestConsecutive(nums: number[]): number {

    const set = new Set(nums);
    const newArr = [...set]
    let longest = 0;
    console.time('start')
    for(let num of set ){

        if(!set.has(num-1)){
            let length = 0 ;
            while(set.has(num+length)){
                length+=1;
            }
            longest = Math.max(longest,length)
        }


    }
    console.timeEnd('start')    
   return longest;
}

console.log(longestConsecutive(numsInput));

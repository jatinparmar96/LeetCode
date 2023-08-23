
function topKFrequent(nums: number[], k: number): number[] {

    const map:Record<number,number> = {}
    for(let num of nums){
        map[num]= 1+(map[num] || 0)
    }

    const keys = Object.keys(map).sort((a:any,b:any)=>{
        return map[b]-map[a];
    });



    return keys.map(v => +v).slice(0,k);

};

console.log(topKFrequent([1,1,1,2,2,3],2))
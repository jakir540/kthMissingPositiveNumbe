let findKthPositive = function(arr, k) {
   let mA = []   
    let firstPositve = 1;
   let i = 0;
    while(true){
        if (firstPositve == arr[i]) {
            firstPositve++;
            i++;
        }else{
            mA.push(firstPositve);
            firstPositve++
            if (mA.length > k) {
                break;
            }
        }
    
    }
return mA[k-1];
};

let arr = [2,3,4,7,11];
let result = findKthPositive(arr, 5);
console.log(result);
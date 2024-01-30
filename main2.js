function main (nums,target){
    
    
    let left=0;
    let right=nums.length-1;
    
    while(left<right){

        const suma= nums[left] + nums[right];

        if(suma== target) return true;

        if(suma> target){
            right--;
        }

        else{
            left++
        }

    }

    return false;

}

const nums= [1,3,4,9];
const target= 13;
resultado= main(nums, target)
console.log(resultado);

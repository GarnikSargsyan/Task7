//Create a function that has one parameter: an array,nums ,
//n of  numbers. The function must find 
//and return the second largest number in nums.

let array = [8, 25, 25, 24, 28, 18, 35];

function maximum (array){
    let max = array[0];
        let max2;
    
   for (i = 0; i < array.length; i++ )
   {
        
        if ( max > array[i])
        {
            max2 = array[i];
        }
        else if (max < array[i]){
            max2 = max;
            max = array[i];
        }
        else if (max2 < array[i] && array[i] !== max){
            
            max2 = array[i];
        }
    }
    return max2;
}
console.log(maximum(array));




//You have an array of integers. 
//Create a function that reverse the values of that array ( [1,2,3,4] should be converted to [4,3,2,1])
// first variant
let first = [1, 2, 3, 4, 5]

let Reversed = first.reverse();

console.log(Reversed);

//You have a huge string. 
//Implement a function that returns all words in that string in array format.

let string = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

function stringToArr(){
    let newAarray = string.split(" ");
    return newAarray;
}
console.log(stringToArr());
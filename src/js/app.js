
let originalNumb = 121;
let reversedNumb = 0;

if (originalNumb < 0 || (originalNumb % 10 === 0 && originalNumb !== 0)) {
    console.log(false); 
} else {
    let x = originalNumb; 
    while (x > 0) {
        let lastDigit = x % 10;  
        reversedNumb = reversedNumb * 10 + lastDigit; 
        x = Math.floor(x / 10);  
    }

    console.log(reversedNumb); }


    // The second task-duplicates
    function findDuplicate(nums) {
    
        let sNumbers = [];
   for (let i = 0; i < nums.length; i++) {
       
            if (sNumbers.includes(nums[i])) {
            
                return true;
            }
            sNumbers.push(nums[i]);
        }
        return false;
    }
    
 
    console.log(findDuplicate([1, 2, 3, 1])); 
    console.log(findDuplicate([1, 2, 3, 4]));  
    console.log(findDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); 
// the second task -second solution
    function findDuplicate(nums) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] === nums[j]) {
                    return true;
                }
            }
        }
        return false;
    }
    
    console.log(findDuplicate([1, 2, 3, 1])); 
    console.log(findDuplicate([1, 2, 3, 4]));  
    console.log(findDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); 

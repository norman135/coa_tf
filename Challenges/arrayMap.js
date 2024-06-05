function arrayManipulation(arr, target) {
    // Enforcing the constraints
    if (arr.length < 1 || arr.length > 100000) {
        throw new Error("The array will contain between 1 and 100,000 elements.");
    }

    const minValue = -1000000000;
    const maxValue = 1000000000;

    if (target < minValue || target > maxValue) {
        throw new Error("The target sum will be between -1,000,000,000 and 1,000,000,000.");
    }

    for (let num of arr) {
        if (num < minValue || num > maxValue) {
            throw new Error("The elements in the array will be between -1,000,000,000 and 1,000,000,000.");
        }
    }

    // Expand and shrink window of analysis until a sum equal to the target is found, or not
    let currentSum = 0;
    let start = 0;

    
    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === target) {
            return true;
        }
    }

    return false;
}

// Example, as given in the Task Force Challenge PDF
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;

const result = arrayManipulation(arr, target)
console.log(result);

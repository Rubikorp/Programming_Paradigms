/*
Использую структурно-процедурный подход, таким образом эту функцию можно будет переиспользовать
и она остается читабельной
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const binarSearch = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const midIndex = (left + right) >> 1;
        const mid = nums[midIndex];
        if (mid === target) {
            return midIndex;
        } else if (mid > target) {
            right = midIndex - 1;
        } else {
            left = midIndex + 1;
        }
    }
    return -1; 
};

console.log(binarSearch(arr, 5));

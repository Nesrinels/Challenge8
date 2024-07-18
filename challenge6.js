function getUniqueElements(arr1, arr2) {
    const combined = [...arr1, ...arr2];
    return Array.from(new Set(combined));
}

// Example usage:
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
console.log(getUniqueElements(array1, array2)); 

// Create a row for elements
export const rowalizer = (array,item_per_row = 3) =>{
    const rowsNumber = Math.ceil(array.length / item_per_row);

    return Array.from({length:rowsNumber},(_, num) => { // '_' not usefull
        let start = num * item_per_row;
        let end = start + item_per_row;

        return array.slice(start,end);
    });
};

export const getLocalStorageItem = (key) =>{
    if(localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key));
    }
};


export const setLocalStorageItem = (key,item) =>{ // if string set an item in the localstorage
    if(item && typeof key === 'string'){
        localStorage.setItem(key,JSON.stringify(item));
    }
};
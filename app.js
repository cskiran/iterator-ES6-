//iterator
function myIterator(items){
    let nextIndex = 0;

    return {
        next : ()=>{
            return nextIndex < items.length ?
            { value : items[nextIndex++],done:false} : {done:true}
        } 
    }
}

//sample
items = [1,2,3,4];

const iteratedItems = myIterator(items);

console.log(iteratedItems.next().value);


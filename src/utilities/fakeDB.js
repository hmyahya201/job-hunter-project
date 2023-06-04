// use local storage to manage cart data
const addToDb = id =>{
    let jobCart = {};

  
    const storedCart = localStorage.getItem('job-cart');
    if(storedCart){
        jobCart = JSON.parse(storedCart);
    }
        jobCart[id] = 1
    localStorage.setItem('job-cart', JSON.stringify(jobCart));
}

const getStoredCart = () =>{
    let jobCart = {};
    const storedCart = localStorage.getItem('job-cart');
    if(storedCart){
        jobCart = JSON.parse(storedCart);
    }
    return jobCart;
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('job-cart');
    if(storedCart){
        const jobCart = JSON.parse(storedCart);
        if(id in jobCart){
            delete jobCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(jobCart));
        }
    }
}

const deleteJobCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb, 
    getStoredCart,
    removeFromDb,
    deleteJobCart
}
import { getStoredCart } from "../utilities/fakeDB";

export const jobsAndCartLoader = async () => {
    // get jobs
    const jobsData = await fetch('/feturedJobs.json');
    const allJobs = await jobsData.json();

    // get cart
    const savedCart = getStoredCart();
    const initialCart = [];
    
    for (const id in savedCart) {
        const addedJobs = allJobs.find(product => product.id === id);
        if (addedJobs) {
            initialCart.push(addedJobs);
        }
    }

    return { allJobs: allJobs, initialCart: initialCart };
}
/* eslint-disable no-unused-vars */
import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
           <div className='div-block'>
           <h2>When should you use context API?</h2> 
           <p><b>Ans:</b> Context API to store the current theme of your application and make it available to all components. This way, whenever the user switches the theme (such as enabling dark mode), all components will be updated with the new theme.</p>
           </div>
           <div className='div-block'>
           <h2>What is custom hook in react?</h2> 
           <p><b>Ans:</b> React custom hooks are reusable functions that a React JS developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem</p>
           </div>
           <div className='div-block'>
           <h2>What is useRef</h2> 
           <p><b>Ans:</b> useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current</p>
           </div>
           <div className='div-block'>
           <h2>What is useMemo</h2> 
           <p><b>Ans:</b> useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.</p>
           </div>
        </div>
    );
};

export default Blog;
import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='my-[5vw]'>
            <h1 className='text-[3vw] font-bold text-white'>Blog <span className='text-[#beafa7]'>Articles</span></h1>
            <div className='md:flex md:justify-around'>
                <div className="flex justify-center my-[5vw]">
                    <div className="rounded-lg shadow-lg bg-[#beafa7] max-w-sm p-5 h-[450px] w-[350px] hover:bg-indigo-50 mx-2">
                        <h6 className='text-[20px] font-bold mt-[20px]'>What are the Purpose of Context API?</h6>
                        <p className='text-[14px] mt-[40px] font-medium'>The React Context API is a method for a React app to produce global variables in an efficient way. This eradicates the problem of "prop drilling". In props drilling, props can't be sent directly to the leaves from the root. It had to pass through it's parent nodes.</p>
                        <br/>
                        <p className='text-[14px] mt-[40px] font-medium'>In context api props don't need to be sent through all the nodes rather any node can pass any prop to another node without any third party node. It is very effective as it's easier and lighter approach to state management.</p>
                    </div>
                </div>
                <div className="flex justify-center my-[5vw]">
                    <div className="rounded-lg shadow-lg bg-[#beafa7] max-w-sm p-5 h-[450px] w-[350px] hover:bg-indigo-50 mx-2">
                        <h6 className='text-[20px] font-bold mt-[20px]'>What is Semantic Tag?</h6>
                        <p className='text-[14px] mt-[40px] font-medium'>Semantic HTML tags provide information about the contents of those tags. It makes it easier to understand the code clearly. A semantic element perfectly describes its meaning to both the browser and the developer.</p>
                        <br/>
                        <p className='text-[14px] mt-[40px] font-medium'>For example, "header" tag represents the headings, "nav" tag represents the navbar, "footer" tag is where the footer content is set, "main" tag contains the primary contents of the site and so on. Semantic HTML5 is appreciated by all.</p>
                    </div>
                </div>
                <div className="flex justify-center my-[5vw]">
                    <div className="rounded-lg shadow-lg bg-[#beafa7] max-w-sm p-5 h-[450px] w-[350px] hover:bg-indigo-50 mx-2">
                        <h6 className='text-[20px] font-bold mt-[20px]'>Difference between inline block and inline block element:</h6>
                        <p className='text-[14px] mt-[40px] font-medium'>Inline elements display in a line. They don't push a new element to a new line. An anchor tag is an example of inline element. They can't have any horizontal margins or padding.</p>
                        <br/>
                        <p className='text-[14px] mt-[40px] font-medium'>On the other hand, inline block elements are similar to inline elements, but they can have margins and padding added on all four sides. We have to declare "display: inline-block" in our css code to make an element behave like an inline block.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
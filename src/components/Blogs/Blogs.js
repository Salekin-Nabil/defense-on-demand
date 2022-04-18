import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='my-[5vw]'>
            <h1 className='text-[3vw] font-bold text-white'>Blog <span className='text-[#beafa7]'>Articles</span></h1>
            <div className='md:flex md:justify-around'>
            <div className="flex justify-center my-[5vw]">
                    <div className="bg-[#beafa7] max-w-sm p-5 rounded-3xl shadow-2xl shadow-white h-[500px] w-[350px] hover:bg-indigo-50 mx-2">
                        <h6 className='text-[20px] font-bold mt-[20px]'>Difference between authorization and authentication</h6>
                        <p className='text-[14px] mt-[40px] font-medium'>Authentication refers to the process of whether we know someone or not. In case of web engineering identifying whether an user is registered to the system or not, is a sort of authentication. For instance the log in system.</p>
                        <br/>
                        <p className='text-[14px] mt-[40px] font-medium'>Authorization is more about governance. To be exact it is the process of verifying what specific applications, files, and data a user has access to. For instance admin panel and regular user have separate GUI and accessibility.</p>
                    </div>
                </div>
                <div className="flex justify-center my-[5vw]">
                    <div className="rounded-3xl shadow-2xl shadow-white bg-[#beafa7] max-w-sm p-5 h-[500px] w-[350px] hover:bg-indigo-50 mx-2">
                        <h6 className='text-[20px] font-bold mt-[20px]'>Why are you using firebase? What other options do you have to implement authentication?</h6>
                        <p className='text-[14px] mt-[40px] font-medium'>Firebase manages all the data on real-time in the database. So anyone can use firebase who wants to develop mobile apps such as live streaming, chat messaging, etc. Besides it provides the facility of hosting.</p>
                        <br/>
                        <p className='text-[14px] mt-[40px] font-medium'>There are several competitors and alternatives to firebase realtime database. Some of them are: Oracle Database, DataStax Enterprise, Redis Enterprise Cloud, Cloudera Enterprise Data Hub, Db2, MarkLogic, Couchbase Server, Neo4j.</p>
                    </div>
                </div>
                <div className="flex justify-center my-[5vw]">
                    <div className="rounded-3xl shadow-2xl shadow-white bg-[#beafa7] max-w-sm p-5 h-[500px] w-[350px] hover:bg-indigo-50 mx-2">
                        <h6 className='text-[20px] font-bold mt-[20px]'>What other services does firebase provide other than authentication?</h6>
                        <p className='text-[14px] mt-[40px] font-medium'>Authentication is not the only service that is provided by firebase. It is also a good place host a web, gaming or mobile applications. It is very useful when we need google analytics and predictions.</p>
                        <br/>
                        <p className='text-[14px] mt-[40px] font-medium'>Moreover it provides cloud storage and cloud messaging facilities, along with cloud firestore and cloud functions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
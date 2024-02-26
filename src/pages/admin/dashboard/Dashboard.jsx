import React, { useContext } from 'react';
import Layout from '../../../components/layout/Layout';
import myContext from '../../../context/data/myContext';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
    const context = useContext(myContext);
    const { mode } = context;
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear('admin');
        navigate('/');
    }

    return (
        <Layout>
            <div className="py-10">
                <div className="flex flex-wrap justify-start items-center lg:justify-center gap-2 lg:gap-10 px-4 lg:px-0 mb-8">
                    <div className="left">
                        <img
                            className="w-40 h-40 object-cover rounded-full border-2 border-pink-600 p-1"
                            src='src\assets\pp.jpeg' alt="profile"
                            //src={'https://drive.google.com/file/d/1OWQGpk3rzu9SAFo-QVYzoZO47OQfDxjY/view?usp=sharing'} alt="profile"
                        />
                    </div>
                    <div className="right">
                        <h1
                            className='text-center font-bold text-2xl mb-2'
                            style={{ color: mode === 'dark' ? 'white' : 'black' }}
                        >
                            Aditya Srivastava
                        </h1>

                        <h2
                            style={{ color: mode === 'dark' ? 'white' : 'black' }} className="font-semibold">
                            Software Developer
                        </h2>
                        <h2
                            style={{ color: mode === 'dark' ? 'white' : 'black' }} className="font-semibold">AdityaSrivastava@gmail.com
                        </h2>
                        <h2
                            style={{ color: mode === 'dark' ? 'white' : 'black' }} className="font-semibold">
                            <span>Total Blog : </span>  1
                        </h2>
                        <div className="flex gap-2 mt-2">
                            <Link to={'/createblog'}>
                                <div className="mb-2">
                                    <button
                                        style={{
                                            background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
                                            color: mode === 'dark' ? 'black' : 'white'
                                        }}
                                        className='px-8 py-2'>
                                        Create Blog
                                    </button>
                                </div>
                            </Link>
                            <div className="mb-2">
                                <button onClick={logout}
                                    style={{
                                        background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
                                        color: mode === 'dark' ? 'black' : 'white'
                                    }}
                                    className='px-8 py-2'>
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Line */}
                <hr className={`border-2
                 ${mode === 'dark' ? 'border-gray-300' : 'border-gray-400'}` 
                 }
                />

                {/* Table */}
                <div className="">
                    <div className='container mx-auto px-4 max-w-7xl my-5'>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
                            {/* table */}
                            <table className={`w-full border-2 border-white shadow-md text-sm text-left text-gray-500 ${mode === 'dark' ? 'dark:text-gray-400' : ''}`}>
                                {/* thead */}
                                <thead
                                    style={{
                                        background: mode === 'dark' ? 'white' : 'rgb(30, 41, 59)'
                                    }}
                                    className="text-xs ">
                                    <tr>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-3">
                                            S.No
                                        </th>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-3">
                                            Thumbnail
                                        </th>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-3">
                                            Title
                                        </th>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-3">
                                            Category
                                        </th>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-3">
                                            Date
                                        </th>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                {/* tbody */}
                                <tbody>
                                    <tr className="border-b-2" style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }}>
                                        {/* S.No */}
                                        <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                            {'1.'}
                                        </td>

                                        {/* Blog Thumbnail */}
                                        <th style={{ color: mode === 'dark' ? 'white' : 'black' }} scope="row" className="px-6 py-4 font-medium ">
                                            {/* thumbnail */}
                                            <img className="w-16 rounded-lg" src="src\assets\kasol.jpg" alt="thumbnail" />
                                            
                                        </th>

                                        {/* Blog Title */}
                                        <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                            {'kasol trecking'}
                                        </td>

                                        {/* Blog Category */}
                                        <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                            {'Treck'}
                                        </td>

                                        {/* Blog Date */}
                                        <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                            {'Jan 18, 2024'}
                                        </td>

                                        {/* Delete Blog */}
                                        <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                            <button className='px-4 py-1 rounded-lg text-white font-bold bg-red-500'>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;

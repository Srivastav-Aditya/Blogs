import { Fragment, useContext, useState } from "react";
import myContext from "../../context/data/myContext";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchDialog() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const context = useContext(myContext);
    const { mode } = context;

    return (
        <Fragment>
            {/* Search Icon */}
            <div onClick={handleOpen}>
                <AiOutlineSearch size={20} color="white" />
            </div>

            {/* Dialog */}
            {open && (
                <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${mode === 'light' ? 'bg-gray-800' : 'bg-gray-300'}`}>
                    {/* Dialog Body */}
                    <div className="bg-[#2C3A47] p-4 rounded-lg w-[25em] md:w-96">
                        <div className="flex w-full justify-center">
                            {/* Input */}
                            <input
                                type="search"
                                placeholder="Type here..."
                                className="w-full px-3 py-2 bg-[#2C3A47] text-white border border-gray-600 rounded"
                            />
                        </div>

                        {/* Blog Card */}
                        <div className="flex justify-center flex-wrap sm:mx-auto sm:mb-2 -mx-2 mt-4 mb-2">
                            <div className="p-2 sm:w-1/4 w-full">
                                <div className="container mx-auto px-4 bg-gray-200 p-2 rounded-lg">
                                    {/* Blog Thumbnail */}
                                    <img className="w-20 mb-2 rounded-lg" src={'https://firebasestorage.googleapis.com/v0/b/blog-fea71.appspot.com/o/blogimage%2FReact%20Introduction.png?alt=media&token=1ba7496b-2cbc-450c-ab1a-57e19882dc76'} alt="" />

                                    {/* Blog Date */}
                                    <p className="w-40 text-sm">{'date'}</p>

                                    {/* Blog Title */}
                                    <h1>{'title'}</h1>
                                </div>
                            </div>
                        </div>

                        {/* Heading */}
                        <div className="text-center">
                            <h1 className="text-gray-600">Powered By Devknus</h1>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
}

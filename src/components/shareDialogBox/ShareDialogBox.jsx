import { Fragment, useContext, useState } from "react";
import myContext from "../../context/data/myContext";
import { AiOutlineShareAlt, AiFillLinkedin, AiFillInstagram, AiFillGithub, AiFillFacebook } from 'react-icons/ai';

export default function ShareDialogBox() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const context = useContext(myContext);
    const { mode } = context;

    return (
        <Fragment>
            <div className="ml-auto">
                <AiOutlineShareAlt onClick={handleOpen} style={{ color: mode === 'dark' ? 'white' : 'white' }} size={20} />
            </div>
            {/* Dialog */}
            {open && (
                <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${mode === 'light' ? 'bg-gray-800' : 'bg-gray-300'}`}>
                    {/* DialogBody */}
                    <div className="bg-[#2f3542] p-4 rounded-lg w-[25em] md:w-96">
                        <div className="flex justify-center flex-wrap sm:mx-auto sm:mb-2 -mx-2 mt-4 mb-2">
                            {/* main */}
                            <div className="">
                                <div className="flex gap-3">
                                    {/* Linkedin Icon */}
                                    <div className="">
                                        <a href="#">
                                            <AiFillLinkedin size={35} style={{
                                                color: mode === 'dark' ? 'white' : 'white'
                                            }} />
                                        </a>
                                    </div>

                                    {/* Instagram Icon */}
                                    <div className="">
                                        <a href="#">
                                            <AiFillInstagram size={35} style={{
                                                color: mode === 'dark' ? 'white' : 'white'
                                            }} />
                                        </a>
                                    </div>

                                    {/* Github Icon */}
                                    <div className="">
                                        <a href="#">
                                            <AiFillGithub size={35} style={{
                                                color: mode === 'dark' ? 'white' : 'white'
                                            }} />
                                        </a>
                                    </div>

                                    {/* Facebook Icon */}
                                    <div className="">
                                        <a href="#">
                                            <AiFillFacebook size={35} style={{
                                                color: mode === 'dark' ? 'white' : 'white'
                                            }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <h1 className="text-gray-600">Powered By Devknus</h1>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
}

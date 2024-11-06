import logo from '../../assets/logo-footer.png';

const Footer = () => {
    return (
        <div className="bg-[#06091A] relative text-white">
            <div className='absolute top-[-150px] left-0 right-0 mx-auto flex justify-center'>
                <div className='bg-[#ffffff26] p-4 border-white border-2 rounded-3xl'>
                    <div className='bg-gradient-to-r from-blue-400 via-white to-orange-300 rounded-3xl w-[800px] h-[300px] flex justify-center items-center'>
                        <div className='text-center items-center'>
                            <h1 className='text-black text-3xl font-bold mb-4'>Subscribe to our Newsletter</h1>
                            <p className='text-[#131313b3]'>Get the latest updates and news right in your inbox!</p>
                            <div>
                                <input className='text-[#131313b3] py-4 pl-7 pr-12 rounded-xl mr-4' type="email" placeholder='Enter your email' />
                                <button className='font-bold text-black rounded-xl bg-gradient-to-r from-orange-300 to-pink-600 hover:text-white py-4 px-7 mt-6'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[85%] mx-auto flex flex-col '>
                <div className='flex justify-center mb-16 mt-[230px]'>
                    <img src={logo} alt="" />
                </div>
                <div className='flex justify-between mb-16'>
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>About Us</h3>
                        <p className='max-w-[291px] text-[#ffffff99]'>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
                        <ul className='flex flex-col gap-3 text-[#ffffff99]'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Subscribe</h3>
                        <p className='text-[#ffffff99] max-w-[291px] mb-5'>Subscribe to our newsletter for the latest updates.</p>
                        <div>
                            <input className='rounded-l-xl px-7 py-3' type="email" placeholder='Enter your email' />
                            <button className='rounded-r-xl bg-gradient-to-r from-orange-300 to-pink-600 hover:text-white px-7 py-3 font-bold text-black'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <hr className='divide-[#ffffff26]' />
                <div>
                    <p className='text-[#ffffff99] text-center p-8' >@2024 Your Company All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
import { Link } from 'react-router-dom';
import { FaUser, FaSignInAlt } from 'react-icons/fa';

const Header = () => {
    return (
        <nav className="bg-teal-500 p-6">
            <div className="container mx-auto flex items-center justify-between flex-wrap ">
                <Link to='/tasks'>
                    <h2 className="text-white font-bold text-xl">Task Management</h2>
                </Link>
                <div className='flex space-x-8'>
                    <Link to='/login' className='text-white font-semibold text-lg flex items-center'>
                        <FaSignInAlt className='mr-2' /> Login
                    </Link>
                    <Link to='/' className='text-white font-semibold text-lg flex items-center'>
                        <FaUser className='mr-2' /> Register
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;

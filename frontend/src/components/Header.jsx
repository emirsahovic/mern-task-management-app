import { Link } from 'react-router-dom';
import { FaUser, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

const Header = () => {
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
    }

    return (
        <nav className="bg-teal-500 p-6">
            <div className="container mx-auto flex items-center justify-between flex-wrap ">
                <Link to='/tasks'>
                    <h2 className="text-white font-bold text-xl mx-16">Task Management</h2>
                </Link>
                <div className='flex space-x-8'>
                    {user ? (
                        <button onClick={onLogout} className='text-white font-semibold text-lg flex items-center mx-16'>
                            <FaSignOutAlt className='mr-2' /> Logout
                        </button>
                    )
                        : (
                            <div className='flex space-x-8 mx-16'>
                                <Link to='/login' className='text-white font-semibold text-lg flex items-center'>
                                    <FaSignInAlt className='mr-2' /> Login
                                </Link>
                                <Link to='/' className='text-white font-semibold text-lg flex items-center'>
                                    <FaUser className='mr-2' /> Register
                                </Link>
                            </div>
                        )}
                </div>
            </div >
        </nav >
    )
}

export default Header;

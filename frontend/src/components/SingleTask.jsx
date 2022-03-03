import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import { AiOutlineCheck } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';
import Rating from './Rating';
import { useNavigate } from 'react-router-dom';

const SingleTask = ({ task }) => {
    const { message } = useSelector(state => state.task);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteTemp = (id) => {
        dispatch(deleteTask(id));
        setTimeout(() => {
            window.location.reload();
        }, 10)
    }

    return (
        <div className="rounded-lg shadow-xl p-12 flex flex-col mx-20 relative">
            <div className='flex flex-row items-center'>
                <h1 className="text-gray-600 text-2xl font-semibold">{task.title}</h1>
                <AiOutlineCheck className='text-3xl ml-2 font-bold text-teal-500' />
            </div>
            <p className="text-lg my-4">{task.description}</p>
            <div className='flex items-center'>
                <span className='mr-2 font-bold'>Priority:</span>
                <Rating value={task.priority} color={'#14B8A6'} />
            </div>
            <div className='absolute top-10 right-3'>
                <CgClose onClick={() => deleteTemp(task._id)} className='text-3xl text-red-600 font-bold cursor-pointer' />
            </div>
        </div>
    )
}

export default SingleTask;
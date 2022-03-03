import { AiOutlineCheck } from 'react-icons/ai';

const SingleTask = ({ task }) => {
    return (
        <div className="rounded-lg shadow-xl p-12 flex flex-col mx-12">
            <div className='flex flex-row items-center'>
                <h1 className="text-gray-600 text-2xl font-semibold">{task.title}</h1>
                <AiOutlineCheck className='text-2xl ml-2 text-teal-500' />
            </div>
            <p className="text-lg my-4">{task.description}</p>
            <p><span className="text-teal-500 font-bold mr-2">Priority:</span>{task.priority}</p>
        </div>
    )
}

export default SingleTask;

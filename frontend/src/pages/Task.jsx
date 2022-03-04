import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTask } from "../features/tasks/taskSlice";
import { toast } from "react-toastify";
import { MdDateRange, MdOutlineSubtitles } from 'react-icons/md';
import { FaVoteYea } from 'react-icons/fa';
import Spinner from "../components/Spinner";

const Task = () => {
    const { task, isLoading, isError, message } = useSelector(state => state.task);

    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        dispatch(getTask(params.taskId));
        // eslint-disable-next-line
    }, [isError, message, params.taskId])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="bg-gray-200 min-h-screen">
            <div className="container mx-auto pt-24">
                <div className="shadow-xl w-3/5 mx-auto p-8 border-4 border-teal-400 rounded relative bg-gray-100">
                    <Link to='/my-tasks' className="absolute top-3 left-3 bg-slate-300 p-2 rounded text-white font-bold hover:opacity-75">Go Back</Link>
                    <div className="flex flex-wrap justify-center items-center">
                        <h2 className="font-bold text-2xl mr-2">Title </h2>
                        <MdOutlineSubtitles className="fa fa-id-card text-3xl mt-1 text-teal-500 mr-2" />
                        <span className="text-gray-600 text-xl"> {task.title}</span>
                    </div>
                    <div className="flex flex-wrap justify-center items-center mr-3 mt-3">
                        <h2 className="font-semibold text-2xl mr-2">Priority </h2>
                        <FaVoteYea className="fa fa-id-card text-3xl mt-1 text-teal-500 mr-2" />
                        <span className={`text-xl font-bold ${task.priority <= 2 ? 'text-red-400' : task.priority === 3 ? 'text-yellow-600' : 'text-green-800'}`}> {task.priority <= 2 ? 'Low' : task.priority === 3 ? 'Medium' : 'High'}</span>
                    </div>
                    <div className="flex flex-wrap justify-center items-center mt-3">
                        <h2 className="font-semibold text-2xl mr-2">Task ID </h2>
                        <i className="fa fa-id-card text-2xl text-teal-500 mr-2"></i>
                        <span className="text-gray-600 text-xl"> {task._id}</span>
                    </div>
                    <div className="flex flex-wrap justify-center items-center mt-3">
                        <h2 className="font-semibold text-2xl mr-2">Created At</h2>
                        <MdDateRange className="text-2xl text-teal-500" />
                        <span className="text-gray-600 text-xl"> {new Date(task.createdAt).toLocaleString('en-GB')}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task;

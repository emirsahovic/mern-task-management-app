import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTasks, reset } from "../features/tasks/taskSlice";
import Spinner from '../components/Spinner';
import SingleTask from "../components/SingleTask";

const MyTasks = () => {
    const { tasks, isLoading, isSuccess } = useSelector(state => state.task);
    const { user } = useSelector(state => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            if (isSuccess) {
                dispatch(reset());
            }
        }
    }, [dispatch, isSuccess])

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else {
            dispatch(getTasks());
        }
    }, [user, navigate, dispatch])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="bg-gray-200 min-h-screen">
            <h1 className="text-center pt-16 font-semibold text-4xl text-gray-700">My Tasks</h1>
            <div className="bg-teal-500 text-teal-500 w-24 h-1 block mx-auto mt-3 rounded-md"></div>
            <div className="gap-6 grid pb-12 justify-center items-center grid-cols-1 container mx-auto mt-12">
                {tasks.map(task => (
                    <SingleTask task={task} key={task._id} />
                ))}
            </div>
        </div>
    )
}

export default MyTasks;

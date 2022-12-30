import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loading from '../../components/Loading/Loading';
import UpdateTaskModal from '../../components/UpdateTaskModal/UpdateTaskModal';
import { completeTaskRoute, deleteTaskRoute, myTaskRoute } from '../../Utilities/APIRoutes';

const MyTask = () => {

    const { user } = useContext(AuthContext);
    const [task, setTask] = useState(null);
    const navigate = useNavigate();
    // const data = axios.get(myTaskRoute);
    const { data: tasks = [], isLoading, refetch } = useQuery({
        queryKey: ['tasks', user?.email],
        queryFn: async () => {
            const res = await fetch(`${myTaskRoute}?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading />;
    }

    const handleComplete = async (id) => {
        const { data } = await axios.post(`${completeTaskRoute}/${id}`);


        if (data.isComplete === false) {
            toast.success('done');
            refetch();
            navigate('/completetask');
        } else {
            toast.error('error');
        }
    };

    const handleDelete = async (id) => {
        const { data } = await axios.delete(`${deleteTaskRoute}/${id}`);

        console.log(data);
        if (data.delete === true) {
            toast.success('delete success');
            refetch();
        } else {
            toast.error('error');
        }
    };

    const handleUpdate = (id) => {

    };


    return (
        <div className=' max-w-screen-xl px-4 py-2 w-full text-center'>
            {
                !tasks.length &&
                <p>No Task Available</p>
            }
            {
                tasks.map(task => {

                    return <div key={task._id} className="flex flex-col sm:flex-row w-full text-center shadow-md  rounded-lg overflow-hidden divide-x max-w-2xl bg-gray-900 text-gray-100 divide-gray-700 mt-5">
                        <div className="self-stretch justify-center py-1 flex items-center px-2 flex-shrink-0 bg-gray-700 text-violet-400">
                            <button onClick={() => handleDelete(task._id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 flex-col p-4 border-l-8 border-violet-400">
                            <span className="text-xl">{task.task}</span>
                        </div>
                        <button onClick={() => handleComplete(task._id)} className="px-2 justify-center flex items-center text-xs uppercase tracking-wide py-1 text-gray-400 border-gray-700">Complete</button>

                        <button onClick={() => setTask(task)} className="px-2 flex justify-center items-center py-1 text-xs uppercase tracking-wide text-gray-400 border-gray-700">Update</button>
                        {/* <label htmlFor="my-modal-3" className="btn" onClick={() => (setTask(task))}>open modal</label> */}
                        {/* <button
                            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(true)}
                        >
                            Open regular modal
                        </button> */}
                    </div>;
                })
            }

            {
                task &&
                <UpdateTaskModal setTask={setTask} task={task} refetch={refetch} />
            }
        </div>
    );
};

export default MyTask;
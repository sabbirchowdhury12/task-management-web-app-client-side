import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loading from '../../components/Loading/Loading';
import { allCompleteTaskRoute, completeTaskRoute, deleteCompleteTaskRoute, inCompleteTaskRoute } from '../../Utilities/APIRoutes';

const CompleteTask = () => {


    const { user } = useContext(AuthContext);
    // const data = axios.get(myTaskRoute);
    const { data: tasks = [], isLoading, refetch } = useQuery({
        queryKey: ['tasks', user?.email],
        queryFn: async () => {
            const res = await fetch(`${allCompleteTaskRoute}?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });


    if (isLoading) {
        return <Loading />;
    }

    const handleComplete = async (id) => {
        const { data } = await axios.post(`${inCompleteTaskRoute}/${id}`);
        console.log(data);
        if (data.isComplete === true) {
            toast.success('done');
            refetch();
        } else {
            toast.error('error');
        }
    };

    const handleDelete = async (id) => {
        const { data } = await axios.delete(`${deleteCompleteTaskRoute}/${id}`);

        console.log(data);
        if (data.delete === true) {
            toast.success('delete success');
            refetch();
        } else {
            toast.error('error');
        }
    };


    return (
        <div>
            {
                !tasks.length &&
                <p>No Task Available</p>
            }
            {
                tasks.map(task => {

                    return <div key={task._id} className="flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl dark:bg-gray-900 dark:text-gray-100 divide-gray-700 mt-5">
                        <div className="self-stretch flex items-center px-3 flex-shrink-0 dark:bg-gray-700 dark:text-violet-400">
                            <button onClick={() => handleDelete(task._id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 flex-col p-4 border-l-8 dark:border-violet-400">
                            <span className="text-2xl">{task.task}</span>
                        </div>
                        <button onClick={() => handleComplete(task._id)} className="px-4 flex items-center text-xs uppercase tracking-wide dark:text-gray-400 dark:border-gray-700">Incomplete</button>
                    </div>;

                })
            }
        </div>
    );
};

export default CompleteTask;
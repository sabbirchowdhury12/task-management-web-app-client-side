import axios from 'axios';
import React from 'react';
import { toast } from 'react-hot-toast';
import { addTaskRoute } from '../../Utilities/APIRoutes';

const AddTask = () => {

    const handleAddTak = async (e) => {
        e.preventDefault();
        const task = e.target.task.value;

        const { data } = await axios.post(addTaskRoute, {
            task
        });

        if (data.status === true) {
            toast.success('add done');
            e.target.reset();
        } else {
            toast.error('something wromg. try again');
        }
    };
    return (
        <div>
            <h3 className='text-center'>Add Tour Task</h3>
            <div className=" max-w-screen-xl px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  dark:text-gray-800">

                <form onSubmit={handleAddTak} className="space-y-6 ng-untouched ng-pristine ng-valid">


                    <input id="name" name='task' type="text" placeholder="Add a new Task" className="w-full p-3 rounded dark:text-gray-800" required />


                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900">Add Task</button>
                </form>
            </div>
        </div>
    );
};

export default AddTask;
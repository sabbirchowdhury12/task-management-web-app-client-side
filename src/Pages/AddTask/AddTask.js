import React from 'react';

const AddTask = () => {
    return (
        <div>
            <h3>Add Tour Task</h3>
            <div className=" max-w-screen-xl px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">

                <form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div>
                        <label for="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-800" />
                    </div>
                    <div>
                        <label for="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-800" />
                    </div>
                    <div>
                        <label for="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-800"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default AddTask;
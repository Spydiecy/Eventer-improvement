import React from 'react';
import { convertNanosecondsToDate } from './nanoToDateTime';

const SingleEventCard = ({eventData, setEditEvent, setDeleteEvent}) => {
    return (
        <div className="lg:w-2/4 w-full h-4/5 sm:h-full  p-4">
            <div className="w-full h-full px-8 bg-white rounded-xl shadow-lg flex flex-col justify-between">
                <div className='flex justify-end mt-8'>
                    <div className={`shadow-xl px-2 text-white rounded-full uppercase border-[2px] ${eventData?.status === 'Upcoming' ? `border-yellow-700 bg-yellow-700` : eventData?.status === 'Ongoing' ? `border-green-700 bg-green-700` : eventData?.status === 'Past' ? `border-red-700 bg-red-700` : 'border-black bg-black'}`}>
                        <p className='text-xs font-semibold'>{eventData?.status ?? "Loading"}</p>
                    </div>
                </div>
                <div className='flex justify-center w-full'>
                    <p className="text-center w-3/5 truncate text-2xl sm:text-3xl font-bold text-blue-900 underline decoration-2 underline-offset-4">
                        {eventData?.name}
                    </p>
                </div>
                <div className="overflow-y-auto overflow-x-hidden my-4 flex justify-start items-start h-full flex-wrap w-full">
                    <p className="text-md sm:text-lg md:text-lg text-gray-600 lg:my-3 md:my-2 sm:my-1 max-h-32 px-2">
                        {eventData?.description}
                    </p>
                </div>
                <div className="flex flex-col justify-center items-start h-2/4 flex-wrap w-full gap-4 text-xs sm:text-base">
                    <div className="flex w-full flex-col sm:flex-row justify-center items-center px-4 gap-2 sm:gap-0">
                        <p className="w-full font-bold text-black">Start Time: <span className="ml-5 font-normal">{eventData?.startTime ? convertNanosecondsToDate(eventData?.startTime) : 'No Time'}</span></p>
                        <p className="w-full font-bold text-black">End Time: <span className="ml-5 font-normal">{eventData?.endTime ? convertNanosecondsToDate(eventData?.endTime) : 'No Time'}</span></p>
                    </div>
                    <div className="flex w-full flex-col sm:flex-row justify-center items-center px-4 gap-2 sm:gap-0">
                        <p className="w-full font-bold text-black">Total Seats: <span className="ml-5 font-normal">{eventData?.totalSeats}</span></p>
                        <p className="w-full font-bold text-black">Claimed Seats: <span className="ml-5 font-normal">{eventData?.claimedSeats}</span></p>
                    </div>

                </div>
                <div className="flex gap-2 justify-between py-4">
                    <button className="flex w-full justify-center items-center p-2 border-2  rounded-xl cursor-pointer border-blue-900 hover:bg-blue-900 hover:text-white duration-300 ease-in-out"
                        onClick={() => setEditEvent(true)}
                    > <span className="text-md lg:text-lg md:text-lg font-semibold">
                            Edit Event
                        </span>
                    </button>
                    <button className="flex w-full justify-center items-center p-2 border-2  rounded-xl cursor-pointer border-red-700 hover:bg-red-700 text-red-700 hover:text-white duration-300 ease-in-out"
                        onClick={() => setDeleteEvent(true)}
                    > <span className="text-md lg:text-lg md:text-lg font-semibold">
                            Delete Event
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleEventCard;

import React, { useState, useEffect } from 'react';
import { Toaster, toast } from "react-hot-toast"

function Clock() {
            // State to hold remaining time (seconds)
            const [secondsLeft, setSecondsLeft] = useState(calculateTimeLeft());

            // Runs once when component mounts (appears on screen)
            useEffect(() => {
                        // Interval to update timer every second
                        const intervalId = setInterval(() => {
                                    // Recalculate remaining seconds
                                    setSecondsLeft(calculateTimeLeft());
                        }, 1000);

                        // Cleanup function: Stops timer when component disappears
                        return () => clearInterval(intervalId);
            }, []);  // Empty dependency array: runs only once on mount

            // Calculates remaining seconds until the end of the day (midnight)
            function calculateTimeLeft() {
                        const now = new Date();
                        const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
                        // Get difference in milliseconds
                        const timeDiff = endOfDay - now;
                        // Convert milliseconds to seconds (divide by 1000)
                        return Math.floor(timeDiff / 1000);
            }

            const handleClick = () => {
                        toast.error("Bhai mat daba isse!💀");
            }

            // Convert remaining seconds to hours, minutes, seconds
            const hoursLeft = Math.floor(secondsLeft / (60 * 60));
            const minutesLeft = Math.floor((secondsLeft % (60 * 60)) / 60);
            const remainingSeconds = secondsLeft % 60;

            // Display the countdown
            return (
                        <div className='h-screen w-screen grid place-content-center '>
                                    <Toaster position='top-center' />
                                    <h1 className='text-center text-4xl lg:text-8xl '>Chettrapal  You have:-</h1>
                                    <p onClick={handleClick} className='text-4xl text-center mt-4 bg-black text-white w-fit m-auto rounded-full px-4 py-2 hover:bg-white hover:text-black hover:shadow-lg cursor-pointer'>
                                                {hoursLeft}h {minutesLeft}m {remainingSeconds}s left
                                    </p>
                        </div>
            );
}

export default Clock;

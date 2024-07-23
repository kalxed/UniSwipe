'use client'
import { useState, useEffect } from 'react';

const InterestArrows = () => {
    const [showArrows, setShowArrows] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowArrows(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`fixed top-1/2 left-0 right-0 flex justify-between items-center pointer-events-none z-50 transition-opacity duration-1000 ${
                showArrows ? 'opacity-100 blink-fade-out' : 'opacity-0'
            }`}
        >
            <div className="text-center mx-4">
                <div className="text-4xl">&larr;</div>
                <div>Not Interested</div>
            </div>
            <div className="text-center mx-4">
                <div className="text-4xl">&rarr;</div>
                <div>Interested</div>
            </div>
        </div>
    );
};

export default InterestArrows;

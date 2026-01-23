'use client';

import React, { useState } from 'react';
import BookingModal from './BookingModal';

interface BookingButtonProps {
    className?: string;
    text?: string;
    children?: React.ReactNode;
}

const BookingButton: React.FC<BookingButtonProps> = ({ className, text, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className={className || "px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black uppercase text-xs tracking-widest transition-all"}
            >
                {children || text || "Book Appointment"}
            </button>

            <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};

export default BookingButton;

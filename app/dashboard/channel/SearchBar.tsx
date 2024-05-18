'use client';
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
    const [showInput, setShowInput] = useState<boolean>(false);

    return (
        <div className="flex ml-10 items-center space-x-3 mb-2">
            <div className="relative flex items-center space-x-3">
                <IoSearchOutline
                    className="text-xl text-textSecondary cursor-pointer"
                    onClick={() => setShowInput(true)}
                />
                <input
                    type="text"
                    placeholder="Search"
                    className={`bg-transparent text-white outline-none border-b-2 border-b-white ${showInput ? 'block' : 'hidden'}`}
                    onBlur={() => setShowInput(false)}
                    autoFocus={showInput}
                />
            </div>
        </div>
    );
};

export default SearchBar;

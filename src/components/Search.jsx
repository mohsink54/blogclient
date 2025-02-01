import React from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

const Search = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const handleKeyPress = (e)=>{
        if (e.key === "Enter") {
            const query = e.target.value;
            if (location.pathname === "/posts") {
                setSearchParams({ ...Object.fromEntries(searchParams), searchQuery: query });
            }else{
                navigate(`/posts?searchQuery=${query}`);
            }
        }
    };
  return (
    <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill='none'
            stroke='gray'
        >
            <circle cx="10.5" cy="10.5" r="8" />
            <line x1="16" y1="16" x2="22" y2="22" />
        </svg>

        <input
         type='text'
         placeholder='Search a post'
         className='bg-transparent'
         value={searchParams.get("searchQuery") || ""}
         onKeyDown={handleKeyPress}
        />
    </div>
  )
}

export default Search
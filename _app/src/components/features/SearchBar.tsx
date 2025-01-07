import { ChangeEvent, useState } from "react";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({
  onSearch,
  placeholder = "Search samples...",
  className = "",
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);
    onSearch(newQuery);
  };

  const clearSearch = () => {
    setSearchQuery("");
    onSearch("");
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative flex items-center">
        <IoSearchOutline className="absolute left-3 text-gray-500" size={20} />
        <input
          type="search"
          value={searchQuery}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full py-2 pl-10 pr-10 text-base bg-white border-0 rounded
                   text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#3858e9]"
          aria-label="Search samples"
        />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-3 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <IoCloseOutline size={20} />
          </button>
        )}
      </div>
    </div>
  );
}

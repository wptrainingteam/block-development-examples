import { SearchBar } from "../features/SearchBar";

interface HeaderProps {
  onSearch: (query: string) => void;
  className?: string;
}

export function Header({ onSearch, className = "" }: HeaderProps) {
  return (
    <header className={`bg-[#1d2327] text-white py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-[2.5rem] font-serif">
              Block Development Examples
            </h1>
            <p className="text-[#c3c4c7] mt-2">
              Enhance your WordPress development skills! Explore practical
              examples for building custom blocks and extending the Block
              Editor.
            </p>
          </div>
          <div className="max-w-2xl">
            <SearchBar onSearch={onSearch} placeholder="Search examples" />
          </div>
        </div>
      </div>
    </header>
  );
}

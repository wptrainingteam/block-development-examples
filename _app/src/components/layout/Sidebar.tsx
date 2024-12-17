import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import * as Tooltip from "@radix-ui/react-tooltip";
import parse from "html-react-parser";
import tagsData from "../../data/tags.json";

interface SidebarProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
  onClearAll?: () => void;
  className?: string;
}

// Helper function to convert markdown to HTML
const convertMarkdownToHTML = (text: string) => {
  return (
    text
      // Convert double backticks first
      .replace(
        /``([^`]+)``/g,
        '<code class="aaa bg-gray-800 text-gray-200 px-1 py-0.5 rounded text-sm font-mono">$1</code>'
      )
      // Then convert single backticks
      .replace(
        /`([^`]+)`/g,
        '<code class="bbb bg-gray-800 text-gray-200 px-1 py-0.5 rounded text-sm font-mono">$1</code>'
      )
      // Then convert markdown links
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-300 hover:text-blue-200 underline">$1</a>'
      )
  );
};

// Create a map of tag slugs to their HTML descriptions
const TAG_DESCRIPTIONS = new Map(
  tagsData.map((tag) => [tag.slug, convertMarkdownToHTML(tag.description)])
);

export function Sidebar({
  categories,
  selectedCategories,
  onCategoryChange,
  onClearAll,
  className = "",
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Tooltip.Provider>
      <div className={`bg-white ${className}`}>
        {/* Mobile Toggle */}
        <button
          className="flex items-center justify-between w-full p-4 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-lg font-medium text-gray-900">Tags</span>
          {isOpen ? <IoChevronUp size={20} /> : <IoChevronDown size={20} />}
        </button>

        {/* Sidebar Content */}
        <div className={`${isOpen ? "block" : "hidden"} lg:block`}>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-medium text-gray-900">Tags</h2>
              {selectedCategories.length > 0 && (
                <button
                  onClick={onClearAll}
                  className="text-sm text-[#2271b1] hover:text-[#135e96] 
                           hover:underline focus:outline-none"
                >
                  Clear all
                </button>
              )}
            </div>
            <div className="space-y-2">
              {categories.map((category) => {
                const isSelected = selectedCategories.includes(category);
                return (
                  <label
                    key={category}
                    className="flex items-center justify-between cursor-pointer 
                             hover:bg-gray-50 px-2 py-0 rounded group"
                  >
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => onCategoryChange(category)}
                        className="w-4 h-4 text-[#3858e9] border-gray-300 rounded
                                 focus:ring-[#3858e9] cursor-pointer"
                      />
                      <span className="text-gray-700 group-hover:text-[#2271b1]">
                        {category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {TAG_DESCRIPTIONS.get(category) && (
                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <button
                              className={`${
                                isSelected
                                  ? "opacity-100"
                                  : "opacity-0 group-hover:opacity-100"
                              } transition-opacity
                                       text-gray-400 hover:text-gray-600 focus:outline-none`}
                            >
                              <QuestionMarkCircledIcon className="w-4 h-4" />
                            </button>
                          </Tooltip.Trigger>
                          <Tooltip.Portal>
                            <Tooltip.Content
                              className="max-w-xs bg-gray-900 text-white px-3 py-2 
                                       rounded text-sm leading-relaxed"
                              sideOffset={5}
                            >
                              <div className="prose prose-invert prose-sm prose-a:text-blue-300">
                                {parse(TAG_DESCRIPTIONS.get(category) || "")}
                              </div>
                              <Tooltip.Arrow className="fill-gray-900" />
                            </Tooltip.Content>
                          </Tooltip.Portal>
                        </Tooltip.Root>
                      )}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Tooltip.Provider>
  );
}

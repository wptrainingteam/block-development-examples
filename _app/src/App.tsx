import { useState, useCallback, useMemo, useEffect } from "react";
import { Header } from "./components/layout/Header";
import { Sidebar } from "./components/layout/Sidebar";
import { SampleGrid } from "./components/layout/SampleGrid";
import examplesData from "./data/examples.json";
import type { Example } from "./types/Example";
import { getContributorInfo } from "./utils/contributors";

// Get tags sorted by frequency
const AVAILABLE_TAGS = Array.from(
  examplesData
    .flatMap((example) => example.tags)
    .reduce((acc, tag) => {
      acc.set(tag, (acc.get(tag) || 0) + 1);
      return acc;
    }, new Map<string, number>())
)
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  .map(([tag]) => tag);

// Helper function to get tags from URL
const getTagsFromURL = () => {
  const params = new URLSearchParams(window.location.search);
  const tags = params.get("tags");
  return tags ? tags.split(",") : [];
};

// Helper function to update URL with tags
const updateURLWithTags = (tags: string[]) => {
  const params = new URLSearchParams(window.location.search);

  if (tags.length > 0) {
    params.set("tags", tags.join(","));
  } else {
    params.delete("tags");
  }

  // Update URL without reloading the page
  window.history.pushState(
    {},
    "",
    `${window.location.pathname}${
      params.toString() ? `?${params.toString()}` : ""
    }`
  );
};

// Add type assertion to ensure all examples have required fields
const examples: Example[] = examplesData.map((example) => ({
  slug: example.slug || "", // Provide default value for optional fields
  name: example.name,
  description: example.description,
  tags: example.tags,
  contributors: example.contributors,
  created: example.created,
  lastModified: example.lastModified,
}));

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>(() =>
    getTagsFromURL()
  );
  const [samples] = useState<Example[]>(examples);

  // Update URL when tags change
  useEffect(() => {
    updateURLWithTags(selectedTags);
  }, [selectedTags]);

  // Listen to browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setSelectedTags(getTagsFromURL());
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleTagChange = useCallback((tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }, []);

  const handleTagClick = useCallback((tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev : [...prev, tag]));
  }, []);

  const handleClearAllTags = useCallback(() => {
    setSelectedTags([]);
  }, []);

  const filteredAndSortedSamples = useMemo(() => {
    const filtered = samples.filter((sample) => {
      if (selectedTags.length > 0) {
        const hasAllSelectedTags = selectedTags.every((tag) =>
          sample.tags.includes(tag)
        );
        if (!hasAllSelectedTags) {
          return false;
        }
      }

      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          sample.slug.toLowerCase().includes(query) ||
          sample.name.toLowerCase().includes(query) ||
          sample.description.toLowerCase().includes(query) ||
          sample.tags.some((tag: string) =>
            tag.toLowerCase().includes(query)
          ) ||
          sample.contributors.some((username: string) => {
            const { name } = getContributorInfo(username);
            const searchStr = `${username} ${name}`.toLowerCase();
            return searchStr.includes(query);
          })
        );
      }

      return true;
    });

    return filtered.sort((a, b) => {
      const dateA = new Date(a.lastModified).getTime();
      const dateB = new Date(b.lastModified).getTime();
      return dateB - dateA;
    });
  }, [samples, selectedTags, searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      <Header onSearch={setSearchQuery} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="w-full lg:w-64 flex-shrink-0">
              <Sidebar
                categories={AVAILABLE_TAGS}
                selectedCategories={selectedTags}
                onCategoryChange={handleTagChange}
                onClearAll={handleClearAllTags}
                className="rounded-lg"
              />
            </aside>

            <main className="flex-1">
              <SampleGrid
                samples={filteredAndSortedSamples}
                onTagClick={handleTagClick}
              />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

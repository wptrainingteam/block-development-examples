import { format } from "date-fns";
import type { Example } from "../../types/Example";
import { getContributorInfo } from "../../utils/contributors";

interface SampleCardProps {
  sample: Example;
  className?: string;
  onTagClick?: (tag: string) => void;
}

export function SampleCard({
  sample,
  className = "",
  onTagClick,
}: SampleCardProps) {
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "MMM dd, yyyy");
  };

  const renderContributor = (username: string) => {
    const { name } = getContributorInfo(username);
    return (
      <a
        key={username}
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors"
      >
        <img
          src={`https://github.com/${username}.png`}
          alt={`${username}'s avatar`}
          className="w-5 h-5 rounded-full"
          title={`Contributor: ${username} (${name})`}
          data-username={username}
        />
      </a>
    );
  };

  const exampleUrl = `https://github.com/WordPress/block-development-examples/tree/trunk/plugins/${sample.slug}`;

  return (
    <div className={`bg-white border-b border-gray-200 py-6 ${className}`}>
      <div className="space-y-3">
        <h3 className="text-lg font-normal">
          <a
            href={exampleUrl}
            className="text-[#2271b1] hover:text-[#135e96] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {sample.name}
          </a>
        </h3>

        <div className="flex flex-wrap gap-4 text-xs text-gray-500">
          <p>Last modified: {formatDate(sample.lastModified)}</p>
        </div>

        <p className="text-gray-600">{sample.description}</p>

        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-1">
            {sample.tags.map((tag: string, index: number) => (
              <button
                key={`${tag}-${index}`}
                onClick={() => onTagClick?.(tag)}
                className="px-2 py-0.5 text-xs bg-[#f0f0f1] text-gray-600 rounded 
                         whitespace-nowrap hover:bg-gray-200 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="text-xs text-gray-500">
            <div className="flex flex-wrap gap-2 mt-1">
              {sample.contributors.map(renderContributor)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

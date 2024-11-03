import { useState, ChangeEvent } from 'react';

type TagProps = {
  tags: string[];
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
  maxTags: number;
  placeholder?: string;
};

export const TagInput = ({ tags, addTag, removeTag, maxTags, placeholder }: TagProps) => {
  const [userInput, setUserInput] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (
        userInput.trim() !== '' &&
        userInput.length <= 12 &&
        tags.length < maxTags
      ) {
        addTag(userInput.trim());
        setUserInput('');
      }
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-wrap items-center gap-2 border-2 border-gray-300 rounded-md px-3 py-2">
        {tags.map((tag, index) => (
          <span
            key={`${index}-${tag}`}
            className="inline-flex items-center px-3 py-1 text-md border-gray-300 border-1 rounded-md"
          >
            {tag}
            <button
              className="ml-3"
              onClick={() => removeTag(tag)}
              title={`Remove ${tag}`}
            >
              &times;
            </button>
          </span>
        ))}
        {tags.length < maxTags && (
          <input
            name="keyword_tags"
            type="text"
            placeholder={placeholder}
            className="flex-grow min-w-[50px] focus:outline-none"
            onKeyDown={handleKeyPress}
            onChange={handleInputChange}
            value={userInput}
          />
        )}
      </div>
    </div>
  );
};

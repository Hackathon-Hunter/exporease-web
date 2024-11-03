import { useState } from 'react';
import { Param } from './useTag.hook.types';

const useTagInput = ({ maxTags }: Param) => {
  const [tags, setTags] = useState<string[]>([]);

  const handleAddTag = (newTag: string) => {
    if (newTag && !tags.includes(newTag) && tags.length < maxTags) {
      setTags([...tags, newTag]);
    }
  };
  
  const handleRemoveTag = (tag: string) => setTags(tags.filter(t => t !== tag));

  return { tags, handleAddTag, handleRemoveTag };
};

export default useTagInput;

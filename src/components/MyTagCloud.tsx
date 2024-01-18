import {TagCloud, TagCloudProps} from 'react-tagcloud';
import {FC} from 'react';


interface MyTagCloudProps {
  /** Количество упоминаний в тегах достаточное для показа, от 1 */
  minCountTags?: number;
  tags: TagCloudProps['tags'],
  minSize?: number
  maxSize?: number
}

export const MyTagCloud: FC<MyTagCloudProps> = ({
  minCountTags = 2,
  minSize = 14,
  maxSize = 60,
  tags
}) => (
  <TagCloud
    tags={tags}
    minSize={minSize}
    maxSize={maxSize}
    shuffle={false}
    colorOptions={{
      luminosity: 'light'
    }}
    renderer={(tag, size, color) => {
      return tag.count >= minCountTags ? (
        <span
          key={tag.value + tag.count}
          style={{
            color,
            fontSize: size,
            margin: '0px 3px',
            verticalAlign: 'middle',
            display: 'inline-block'
          }}
          className={`tag-${size}`}
          title={`${tag.value} (${tag.count})`}
        >
          {tag.value}
        </span>
      ) : <span key={tag.value + tag.count}></span>
    }}
  />
);

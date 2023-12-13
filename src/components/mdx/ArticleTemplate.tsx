import {HeadTitle} from './HeadTitle';
import {PageTemplates} from 'src/components/PageTemplates';
import {titleWithSiteName} from 'src/utils/titleWithSiteName';
import {FC, PropsWithChildren} from 'react';
import {LOCALES} from 'src/constants/common';


interface ArticleTemplateProps {
  title: string;
  pubdate: string;
}

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  const date = new Date(dateString);
  return date.toLocaleDateString(LOCALES.ruRU, options);
}

export const ArticleTemplate: FC<PropsWithChildren<ArticleTemplateProps>> = ({
  title,
  children,
  pubdate
}) => {
  return (
    <PageTemplates header={<h1>{title}</h1>}>
      <HeadTitle title={titleWithSiteName(title)} />
      <article>
        <time
          data-pubdate={'pubdate'}
          data-datetime={pubdate}
          className="badge bg-secondary mb-4"
        >
          {formatDate(pubdate)}
        </time>

        <div>
          {children}
        </div>
      </article>
    </PageTemplates>
  );
};

import {HeadTitleProps, MetaHead} from './MetaHead';
import {PageTemplates} from 'src/components/PageTemplates';
import {titleWithSiteName} from 'src/utils/titleWithSiteName';
import {FC, PropsWithChildren} from 'react';
import {formatDate} from 'src/utils/formatDate';


interface ArticleTemplateProps extends HeadTitleProps {
  pubdate: string;
}

export const ArticleTemplate: FC<PropsWithChildren<ArticleTemplateProps>> = ({
  title,
  children,
  pubdate,
  ...props
}) => {
  return (
    <PageTemplates header={<h1>{title}</h1>}>
      <MetaHead title={titleWithSiteName(title)} {...props} />
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

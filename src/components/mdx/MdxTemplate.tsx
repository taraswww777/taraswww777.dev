import { HeadTitleProps, MetaHead } from './MetaHead';
import { PageTemplate } from 'src/components/PageTemplate';
import { FC, PropsWithChildren } from 'react';
import { formatDate } from 'src/utils/formatDate';
import { ContentContainer } from '../../ui';
import { Badge } from '../../ui';

interface ArticleTemplateProps extends HeadTitleProps {
  pubdate: string;
}

export const MdxTemplate: FC<PropsWithChildren<ArticleTemplateProps>> = ({
  title,
  children,
  pubdate,
  metaTitle,
  description,
  keywords
}) => {
  return (
    <PageTemplate>
      <MetaHead
        metaTitle={metaTitle}
        description={description}
        keywords={keywords}
        title={title}
      />
      <ContentContainer>
        <div className={'mdxContent'}>
          <h1 className="text-center">{title}</h1>
          <article>
            <p>
              <span>Обновлено: </span>
              <Badge>
                <time data-pubdate={pubdate} data-datetime={pubdate}>
                  {formatDate(new Date(pubdate))}
                </time>
              </Badge>
            </p>
            <div>
              {children}
            </div>
          </article>
        </div>
      </ContentContainer>
    </PageTemplate>
  );
};

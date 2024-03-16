import "src/globals.css";
import "src/highlightjs.css";
import { FC, PropsWithChildren } from 'react';
import Script from 'next/script';
import { YaMetricCounter } from '../components/metrics/YaMetricCounter';


export const MdxLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <meta name="zen-verification" content="z0wd2SS2t0DrS2qFsQEG5fIHme88fCZEm4V3N4nuwewvhhKFLkWCuVjwFYJeFIaG" />
      <Script src="https://kit.fontawesome.com/45f9b38c9b.js" crossOrigin="anonymous"></Script>
      {children}
      <YaMetricCounter />
    </>
  )
}

export default MdxLayout;

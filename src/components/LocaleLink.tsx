import React from 'react'
import L from 'next/link'
import { observer } from 'mobx-react-lite'
import store from '../store/store'

/** Replaces next link and handles locale. (href should start with / which is relative to root) */
const LocaleLink = observer(({
  children,
  locale,
  href,
  style,
  tabIndex,
  target,
  rel
}: {
  children?: React.ReactNode;
  locale?: string;
  href: string;
  style?: React.CSSProperties;
  tabIndex?: number;
  target?: string;
  rel?: string;
}) => {
  const l = locale ?? store.lang;

  href = `/${l}${href}`;

  return (
    <>
      <L tabIndex={tabIndex} rel={rel} target={target} href={href} onClick={() => {
        store.lang = l;
        document.documentElement.lang = l;
      }} style={{textDecoration: "inherit", color: "inherit", ...style}}>
        {children}
      </L>
    </>
  );
});

export default LocaleLink
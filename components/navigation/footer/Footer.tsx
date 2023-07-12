import React from 'react';

export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer = ({ className, ...footerProps }: IFooter) => {
  return (
    <footer
      {...footerProps}
      className={`w-full p-5 bg-slate-100 text-slate-500 ${className}`}
    >
      <p>Ethiopia</p>
    </footer>
  );
};

export default Footer;

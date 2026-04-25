import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { RequestStatusType, useCMSContent } from '../cms';
import { LayoutCMSContent } from '../cms/types';
import { Footer, Navbar } from '../components';

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const layoutCMS = useCMSContent<LayoutCMSContent>('layout.json');

  switch (layoutCMS.status) {
    case RequestStatusType.LOADING:
      return (
        <section className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-gold-500 tracking-widest text-xs">LOADING LAYOUT...</div>
        </section>
      );

    case RequestStatusType.ERROR:
      return (
        <section className="min-h-screen flex items-center justify-center">
          <p className="text-red-400">Erro ao carregar layout</p>
        </section>
      );

    case RequestStatusType.SUCCESS:
      return (
        <>
          <Navbar content={layoutCMS.data.header} />
          <main>{children ?? <Outlet />}</main>
          <Footer content={layoutCMS.data.footer} />
        </>
      );

    case RequestStatusType.IDLE:
    default:
      return null;
  }
};

export default Layout;

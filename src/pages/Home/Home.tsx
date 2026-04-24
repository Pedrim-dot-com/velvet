import { RequestStatusType, useCMSContent } from '../../cms';
import { HomeCMSContent } from '../../cms/types';
import { Footer, Hero, Navbar } from '../../components';

const Home = () => {
  const homeCMS = useCMSContent<HomeCMSContent>('home.json');

  switch (homeCMS.status) {
    case RequestStatusType.LOADING:
      return (
        <section className="min-h-[80vh] flex items-center justify-center">
          <div className="animate-pulse text-gold-500 tracking-widest text-xs">LOADING EXPERIENCE...</div>
        </section>
      );

    case RequestStatusType.ERROR:
      return (
        <section className="min-h-[80vh] flex items-center justify-center">
          <p className="text-red-400">Erro ao carregar conteúdo</p>
        </section>
      );

    case RequestStatusType.SUCCESS:
      return (
        <>
          <Navbar content={homeCMS.data.header} />
          <Hero content={homeCMS.data.hero} />
          <Footer content={homeCMS.data.footer} />
        </>
      );

    case RequestStatusType.IDLE:
    default:
      return null;
  }
};

export default Home;

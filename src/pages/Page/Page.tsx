import { RequestStatusType, useCMSContent } from '../../cms';
import { PageCMSContent, PageSection } from '../../cms/types';
import { PageProps } from './Page.types';

const renderSection = (section: PageSection) => {
  switch (section.type) {
    case 'richText':
      return (
        <article key={section.id} className="space-y-4">
          <h2 className="text-2xl sm:text-3xl">{section.title}</h2>
          <p className="text-text-secondary leading-relaxed">{section.body}</p>
        </article>
      );

    case 'featureList':
      return (
        <article key={section.id} className="space-y-4">
          <h2 className="text-2xl sm:text-3xl">{section.title}</h2>
          <ul className="list-disc pl-6 space-y-2 text-text-secondary">
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      );

    case 'cta':
      return (
        <article key={section.id} className="space-y-4">
          <h2 className="text-2xl sm:text-3xl">{section.title}</h2>
          <p className="text-text-secondary leading-relaxed">{section.description}</p>
          <button className="bg-gold-500 text-brown-900 px-6 py-3 rounded-full hover:scale-105 transition-all duration-300">
            {section.ctaLabel}
          </button>
        </article>
      );
  }
};

const Page = ({ slug }: PageProps) => {
  const pageCMS = useCMSContent<PageCMSContent>(`pages/${slug}.json`);

  switch (pageCMS.status) {
    case RequestStatusType.LOADING:
      return (
        <section className="min-h-[80vh] flex items-center justify-center">
          <div className="animate-pulse text-gold-500 tracking-widest text-xs">LOADING PAGE...</div>
        </section>
      );

    case RequestStatusType.ERROR:
      return (
        <section className="min-h-[80vh] flex items-center justify-center">
          <p className="text-red-400">Erro ao carregar página: {slug}</p>
        </section>
      );

    case RequestStatusType.SUCCESS:
      return (
        <section className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 py-16 space-y-12">
          <header className="space-y-4">
            <p className="text-gold-500 tracking-[0.3em] text-xs">PAGE CONTENT</p>
            <h1 className="text-4xl sm:text-5xl leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              {pageCMS.data.title}
            </h1>
            <p className="text-text-secondary max-w-2xl">{pageCMS.data.description}</p>
          </header>

          {pageCMS.data.sections.map((section) => renderSection(section))}
        </section>
      );

    case RequestStatusType.IDLE:
    default:
      return null;
  }
};

export default Page;

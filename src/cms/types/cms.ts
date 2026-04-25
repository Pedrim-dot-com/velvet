export interface NavigationLinkCMS {
  label: string;
  path: string;
}

export type FooterLinks = {
  instagram: string;
  contact: string;
};

export interface HeaderCMSContent {
  brand: string;
  navigation: NavigationLinkCMS[];
}

export interface HeroCMSContent {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
}

export interface FooterCMSContent {
  brand: {
    name: string;
    description: string;
  };
  navigation: {
    title: string;
    links: NavigationLinkCMS[];
  };
  newsletter: {
    title: string;
    placeholder: string;
    cta: string;
  };
  bottom: {
    copyright: string;
    links: FooterLinks;
  };
}

export interface LayoutCMSContent {
  header: HeaderCMSContent;
  footer: FooterCMSContent;
}

export interface HomeCMSContent {
  hero: HeroCMSContent;
}

export interface PageRichTextSection {
  id: string;
  type: 'richText';
  title: string;
  body: string;
}

export interface PageFeatureListSection {
  id: string;
  type: 'featureList';
  title: string;
  items: string[];
}

export interface PageCtaSection {
  id: string;
  type: 'cta';
  title: string;
  description: string;
  ctaLabel: string;
}

export type PageSection = PageRichTextSection | PageFeatureListSection | PageCtaSection;

export interface PageCMSContent {
  slug: string;
  title: string;
  description: string;
  sections: PageSection[];
}

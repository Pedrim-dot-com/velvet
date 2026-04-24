type NavLinks = {
  home: string;
  shop: string;
  about: string;
};

type FooterLinks = {
  instagram: string;
  contact: string;
};

export interface HomeCMSContent {
  header: {
    brand: string;
    navigation: NavLinks;
  };

  hero: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
  };

  footer: {
    brand: {
      name: string;
      description: string;
    };
    navigation: {
      title: string;
      links: NavLinks;
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
  };
}

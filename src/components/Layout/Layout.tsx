import { Header } from '../header/Header';
import heroData from '../../data/hero/hero.json';
import { Footer } from '../footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  const { children } = props;
  const { titleData, subtitleData, imageLinkData } = heroData;

  return (
    <div>
      <Header
        title={titleData}
        subtitle={subtitleData}
        imageLink={imageLinkData}
      />
      {children}

      <Footer />
    </div>
  );
}

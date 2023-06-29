import Header from '@/components/Organisms/Header';
import GlobalStyles from '../../GlobalStyles';
import Hero from '@/components/Organisms/Hero';
import Webinars from '@/components/Organisms/Webnars';

export default function Home() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Hero />
      <Webinars />
    </div>
  )
}

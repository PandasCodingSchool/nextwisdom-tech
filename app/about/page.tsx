import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us | Nextwisdom Tech - Our Story, Mission & Vision',
  description: 'Learn about Nextwisdom Tech — our story, mission to bridge the digital divide, vision for inclusive technology, and the expert team behind our innovative software solutions.',
  keywords: ['about Nextwisdom Tech', 'software company Jaipur', 'tech company India', 'digital transformation company', 'IT solutions Rajasthan'],
  openGraph: {
    title: 'About Us | Nextwisdom Tech',
    description: 'Passionate technologists dedicated to creating innovative solutions that transform businesses and empower communities.',
    url: 'https://nextwisdomtech.com/about',
    type: 'website',
  },
  alternates: {
    canonical: 'https://nextwisdomtech.com/about',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}

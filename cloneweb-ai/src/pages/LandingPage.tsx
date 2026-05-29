import Scene1Hero from '../components/landing/Scene1Hero';
import Scene2Problem from '../components/landing/Scene2Problem';
import Scene3Recording from '../components/landing/Scene3Recording';
import Scene4CodeGen from '../components/landing/Scene4CodeGen';
import Scene5Pipeline from '../components/landing/Scene5Pipeline';
import Scene6Comparison from '../components/landing/Scene6Comparison';
import Scene7Refinement from '../components/landing/Scene7Refinement';
import Scene8Engine from '../components/landing/Scene8Engine';
import Scene9Metrics from '../components/landing/Scene9Metrics';
import Scene10Features from '../components/landing/Scene10Features';
import Scene11DashboardPreview from '../components/landing/Scene11DashboardPreview';
import Scene12Testimonials from '../components/landing/Scene12Testimonials';
import Scene13Pricing from '../components/landing/Scene13Pricing';
import Scene14CTA from '../components/landing/Scene14CTA';

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Scene1Hero />
      <Scene2Problem />
      <Scene3Recording />
      <Scene4CodeGen />
      <Scene5Pipeline />
      <Scene6Comparison />
      <Scene7Refinement />
      <Scene8Engine />
      <Scene9Metrics />
      <Scene10Features />
      <Scene11DashboardPreview />
      <Scene12Testimonials />
      <Scene13Pricing />
      <Scene14CTA />
    </div>
  );
}

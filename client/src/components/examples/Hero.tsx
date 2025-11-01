import Hero from '../Hero';
import heroImage from '@assets/generated_images/Hero_generator_in_operation_2f44dd7d.png';

export default function HeroExample() {
  return (
    <Hero
      title="Professional Generator Solutions for Every Need"
      subtitle="Reliable power generation systems with expert installation and 24/7 support"
      backgroundImage={heroImage}
      showCTA={true}
      height="full"
    />
  );
}

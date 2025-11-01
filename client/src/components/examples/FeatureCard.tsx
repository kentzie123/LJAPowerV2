import FeatureCard from '../FeatureCard';
import { Zap } from 'lucide-react';

export default function FeatureCardExample() {
  return (
    <div className="max-w-sm">
      <FeatureCard
        icon={Zap}
        title="Reliable Power"
        description="Industry-leading generators that deliver consistent power when you need it most"
      />
    </div>
  );
}

import ServiceCard from '../ServiceCard';
import { Settings } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="max-w-md">
      <ServiceCard
        icon={Settings}
        title="Installation"
        description="Professional installation services for all generator types"
        features={[
          "Site assessment and planning",
          "Professional installation team",
          "Code compliance certification",
          "System testing and commissioning"
        ]}
        onLearnMore={() => console.log('Learn more clicked')}
      />
    </div>
  );
}

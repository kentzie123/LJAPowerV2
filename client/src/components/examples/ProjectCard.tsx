import ProjectCard from '../ProjectCard';
import projectImage from '@assets/generated_images/Generator_installation_project_66ff5c5e.png';

export default function ProjectCardExample() {
  return (
    <div className="max-w-md">
      <ProjectCard
        title="Hospital Backup Power System"
        client="Regional Medical Center"
        location="Downtown District"
        capacity="1,500 kW"
        image={projectImage}
        description="Complete backup power solution ensuring uninterrupted operations during power outages"
      />
    </div>
  );
}

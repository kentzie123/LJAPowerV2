import projectImage1 from '@assets/generated_images/Generator_installation_project_66ff5c5e.png';
import projectImage2 from '@assets/generated_images/Technician_servicing_generator_d5ab4806.png';
import showroomImage from '@assets/generated_images/Generator_showroom_display_040b73ab.png';

export interface ProjectDetails {
  duration: string;
  completedDate: string;
  challenges: string;
  solution: string;
  outcome: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  location: string;
  capacity: string;
  image: string;
  description: string;
  details: ProjectDetails;
}

export const projects: Project[] = [
  {
    slug: "hospital-backup-power-system",
    title: "Hospital Backup Power System",
    client: "Regional Medical Center",
    location: "Downtown District",
    capacity: "1,500 kW",
    image: projectImage1,
    description: "Complete backup power solution ensuring uninterrupted operations during power outages with dual redundancy.",
    details: {
      duration: "6 months",
      completedDate: "March 2024",
      challenges: "Installing critical infrastructure while maintaining hospital operations",
      solution: "Phased installation with redundant systems to ensure zero downtime during construction",
      outcome: "100% uptime since installation with seamless automatic failover tested monthly"
    }
  },
  {
    slug: "manufacturing-facility-power",
    title: "Manufacturing Facility Power",
    client: "Manufacturing Solutions Inc.",
    location: "Industrial Park",
    capacity: "2,000 kW",
    image: projectImage2,
    description: "Prime power installation supporting continuous 24/7 manufacturing operations with load management system.",
    details: {
      duration: "8 months",
      completedDate: "January 2024",
      challenges: "Supporting continuous operations with precise power quality requirements",
      solution: "Custom load management system with advanced voltage regulation and harmonic filtering",
      outcome: "Zero production interruptions with 15% energy cost reduction through load optimization"
    }
  },
  {
    slug: "data-center-infrastructure",
    title: "Data Center Infrastructure",
    client: "Tech Industries Corp.",
    location: "Technology District",
    capacity: "3,000 kW",
    image: projectImage1,
    description: "Mission-critical power system with N+1 redundancy and automated failover capabilities.",
    details: {
      duration: "10 months",
      completedDate: "November 2023",
      challenges: "Meeting Tier III data center uptime requirements with multiple redundancy levels",
      solution: "N+1 generator configuration with automatic transfer switches and UPS integration",
      outcome: "99.982% uptime achieved, exceeding Tier III certification requirements"
    }
  },
  {
    slug: "commercial-complex-backup",
    title: "Commercial Complex Backup",
    client: "Metro Shopping Center",
    location: "City Center",
    capacity: "800 kW",
    image: projectImage2,
    description: "Emergency backup power for high-traffic commercial facility with integrated building management.",
    details: {
      duration: "4 months",
      completedDate: "September 2023",
      challenges: "Limited space in urban environment with noise restrictions",
      solution: "Compact rooftop installation with advanced sound attenuation and vibration isolation",
      outcome: "Maintains full operations during outages while meeting strict city noise ordinances"
    }
  },
  {
    slug: "university-campus-power",
    title: "University Campus Power",
    client: "State University",
    location: "University District",
    capacity: "1,200 kW",
    image: showroomImage,
    description: "Distributed power generation system serving multiple campus buildings with central monitoring.",
    details: {
      duration: "12 months",
      completedDate: "June 2023",
      challenges: "Coordinating installation across active campus during academic year",
      solution: "Distributed generator placement with centralized monitoring and control system",
      outcome: "Uninterrupted campus operations with integrated smart grid capabilities"
    }
  },
  {
    slug: "water-treatment-facility",
    title: "Water Treatment Facility",
    client: "Municipal Water Authority",
    location: "Waterfront",
    capacity: "1,800 kW",
    image: projectImage1,
    description: "Critical infrastructure power backup ensuring continuous water treatment and distribution.",
    details: {
      duration: "7 months",
      completedDate: "April 2023",
      challenges: "Ensuring continuous water supply to 500,000+ residents",
      solution: "Dual generator system with automatic load sharing and priority load management",
      outcome: "Zero service interruptions with automated testing and maintenance schedules"
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}

import productImage from '@assets/generated_images/Product_generator_white_background_cfbb511e.png';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductDetails {
  description: string;
  features: string[];
  applications: string[];
  warranty: string;
}

export interface Product {
  name: string;
  slug: string;
  category: string;
  image: string;
  specs: ProductSpec[];
  price: string;
  details: ProductDetails;
}

function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

//todo: remove mock functionality - replace with real data
export const products: Product[] = [
  {
    name: "Commercial Generator 100kW",
    slug: createSlug("Commercial Generator 100kW"),
    category: "commercial",
    image: productImage,
    specs: [
      { label: "Power Output", value: "100 kW" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "Voltage", value: "480V" },
      { label: "Engine", value: "Cummins 6BT" }
    ],
    price: "Contact for Quote",
    details: {
      description: "Perfect for small to medium commercial applications, this reliable generator provides consistent backup power for offices, retail stores, and light industrial facilities.",
      features: [
        "Compact footprint for limited space installations",
        "Fuel-efficient operation reduces operating costs",
        "Quiet operation suitable for urban environments",
        "Automatic transfer switch compatible",
        "Remote monitoring capabilities"
      ],
      applications: ["Office buildings", "Retail stores", "Small warehouses", "Restaurants", "Medical clinics"],
      warranty: "3-year comprehensive warranty with optional extended coverage"
    }
  },
  {
    name: "Commercial Generator 250kW",
    slug: createSlug("Commercial Generator 250kW"),
    category: "commercial",
    image: productImage,
    specs: [
      { label: "Power Output", value: "250 kW" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "Voltage", value: "480V 3-Phase" },
      { label: "Engine", value: "Cummins QSB7" }
    ],
    price: "Contact for Quote",
    details: {
      description: "Ideal for medium-sized commercial facilities requiring reliable backup or prime power. This generator offers excellent performance and fuel efficiency.",
      features: [
        "Three-phase power output for commercial loads",
        "Advanced control system with digital display",
        "Sound-attenuated enclosure available",
        "Multiple voltage configurations",
        "Parallel capability for expandability"
      ],
      applications: ["Shopping centers", "Hotels", "Data centers", "Manufacturing facilities", "Educational institutions"],
      warranty: "3-year comprehensive warranty with optional extended coverage"
    }
  },
  {
    name: "Industrial Generator 500kW",
    slug: createSlug("Industrial Generator 500kW"),
    category: "industrial",
    image: productImage,
    specs: [
      { label: "Power Output", value: "500 kW" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "Voltage", value: "480V 3-Phase" },
      { label: "Engine", value: "Cummins QSX15" }
    ],
    price: "Contact for Quote",
    details: {
      description: "Heavy-duty industrial generator designed for demanding applications requiring consistent, reliable power for extended periods.",
      features: [
        "Industrial-grade Cummins engine",
        "Advanced load management system",
        "Weather-resistant enclosure",
        "Remote start and monitoring",
        "Dual fuel capability option"
      ],
      applications: ["Manufacturing plants", "Hospitals", "Wastewater treatment", "Large commercial buildings", "Mining operations"],
      warranty: "5-year comprehensive warranty with 24/7 support"
    }
  },
  {
    name: "Industrial Generator 750kW",
    slug: createSlug("Industrial Generator 750kW"),
    category: "industrial",
    image: productImage,
    specs: [
      { label: "Power Output", value: "750 kW" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "Voltage", value: "480V 3-Phase" },
      { label: "Engine", value: "Cummins QSK19" }
    ],
    price: "Contact for Quote",
    details: {
      description: "High-capacity industrial generator built for mission-critical applications where power failure is not an option.",
      features: [
        "Premium Cummins QSK series engine",
        "Redundant control systems",
        "Advanced paralleling capabilities",
        "Real-time performance monitoring",
        "Extended run time fuel systems available"
      ],
      applications: ["Critical infrastructure", "Large hospitals", "Data centers", "Industrial manufacturing", "Water treatment facilities"],
      warranty: "5-year comprehensive warranty with priority support"
    }
  },
  {
    name: "Prime Power Generator 1000kW",
    slug: createSlug("Prime Power Generator 1000kW"),
    category: "prime",
    image: productImage,
    specs: [
      { label: "Power Output", value: "1000 kW" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "Voltage", value: "480V 3-Phase" },
      { label: "Engine", value: "Cummins QSK23" }
    ],
    price: "Contact for Quote",
    details: {
      description: "Designed for continuous prime power applications, this generator provides reliable, efficient power for facilities requiring 24/7 operation.",
      features: [
        "Rated for continuous prime power duty",
        "Advanced emissions control systems",
        "Integrated load bank testing capability",
        "Multiple parallel units supported",
        "Cloud-based monitoring and analytics"
      ],
      applications: ["Remote facilities", "Utility peaking", "Cogeneration systems", "Island mode operations", "Industrial plants"],
      warranty: "5-year comprehensive warranty with guaranteed uptime SLA"
    }
  },
  {
    name: "Prime Power Generator 1500kW",
    slug: createSlug("Prime Power Generator 1500kW"),
    category: "prime",
    image: productImage,
    specs: [
      { label: "Power Output", value: "1500 kW" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "Voltage", value: "480V 3-Phase" },
      { label: "Engine", value: "Cummins QSK38" }
    ],
    price: "Contact for Quote",
    details: {
      description: "Premium prime power solution for large-scale operations requiring maximum reliability and performance in continuous duty applications.",
      features: [
        "Ultra-reliable QSK38 engine platform",
        "N+1 redundancy capable",
        "Advanced SCADA integration",
        "Predictive maintenance monitoring",
        "Custom voltage and frequency options"
      ],
      applications: ["Large campuses", "Industrial complexes", "Utility support", "Mining operations", "Marine applications"],
      warranty: "7-year comprehensive warranty with dedicated support team"
    }
  },
  {
    name: "Commercial Generator 150kW",
    slug: createSlug("Commercial Generator 150kW"),
    category: "commercial",
    image: productImage,
    specs: [
      { label: "Power Output", value: "150 kW" },
      { label: "Fuel Type", value: "Natural Gas" },
      { label: "Voltage", value: "480V" },
      { label: "Engine", value: "Cummins G-Drive" }
    ],
    price: "Contact for Quote",
    details: {
      description: "Natural gas powered generator offering clean, efficient backup power for commercial facilities with gas infrastructure.",
      features: [
        "Clean-burning natural gas operation",
        "Lower operating costs vs diesel",
        "Quiet operation for urban settings",
        "Unlimited run time with gas supply",
        "Reduced emissions compliance"
      ],
      applications: ["Office complexes", "Schools", "Municipal buildings", "Healthcare facilities", "Multi-tenant buildings"],
      warranty: "3-year comprehensive warranty with gas system certification"
    }
  },
  {
    name: "Industrial Generator 600kW",
    slug: createSlug("Industrial Generator 600kW"),
    category: "industrial",
    image: productImage,
    specs: [
      { label: "Power Output", value: "600 kW" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "Voltage", value: "480V 3-Phase" },
      { label: "Engine", value: "Cummins QSX15" }
    ],
    price: "Contact for Quote",
    details: {
      description: "Robust industrial generator combining proven Cummins reliability with advanced power management for demanding industrial environments.",
      features: [
        "Ruggedized for harsh environments",
        "Advanced vibration isolation",
        "Integrated fuel polishing system",
        "Multi-unit synchronization ready",
        "Comprehensive diagnostics system"
      ],
      applications: ["Manufacturing", "Food processing", "Cold storage", "Pharmaceutical production", "Heavy industry"],
      warranty: "5-year comprehensive warranty with preventive maintenance program"
    }
  },
  {
    name: "Prime Power Generator 2000kW",
    slug: createSlug("Prime Power Generator 2000kW"),
    category: "prime",
    image: productImage,
    specs: [
      { label: "Power Output", value: "2000 kW" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "Voltage", value: "480V 3-Phase" },
      { label: "Engine", value: "Cummins QSK50" }
    ],
    price: "Contact for Quote",
    details: {
      description: "Our flagship prime power generator delivering exceptional reliability and performance for the most demanding continuous power applications.",
      features: [
        "Industry-leading QSK50 engine",
        "Maximum efficiency at all load points",
        "Integrated heat recovery capability",
        "Advanced emissions after-treatment",
        "Full redundancy and failover systems"
      ],
      applications: ["Power generation plants", "Large industrial complexes", "Mission-critical facilities", "Island power systems", "Utility grid support"],
      warranty: "10-year comprehensive warranty with performance guarantees"
    }
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter(p => p.category === category);
}

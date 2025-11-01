import TestimonialCard from '../TestimonialCard';

export default function TestimonialCardExample() {
  return (
    <div className="max-w-md">
      <TestimonialCard
        quote="LJA Power delivered exceptional service from consultation to installation. Our facility has been running smoothly with zero downtime."
        author="Sarah Johnson"
        company="Manufacturing Solutions Inc."
        rating={5}
      />
    </div>
  );
}

import ProductCard from '../ProductCard';
import productImage from '@assets/generated_images/Product_generator_white_background_cfbb511e.png';

export default function ProductCardExample() {
  return (
    <div className="max-w-sm">
      <ProductCard
        name="Industrial Generator 500kW"
        image={productImage}
        specs={[
          { label: "Power Output", value: "500 kW" },
          { label: "Fuel Type", value: "Diesel" },
          { label: "Voltage", value: "480V 3-Phase" },
          { label: "Engine", value: "Cummins QSX15" }
        ]}
        price="Contact for Quote"
        onViewDetails={() => console.log('View details clicked')}
      />
    </div>
  );
}

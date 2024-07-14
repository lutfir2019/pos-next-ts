import Image from "next/image";

interface ProductItemProps {
  product: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  };
  onAddToCart: (product: any) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onAddToCart }) => {
  const addToCartHandler = () => {
    onAddToCart(product);
  };

  return (
    <div className="bg-white h-fit rounded-lg shadow-md overflow-hidden">
      <Image
        className="w-full h-48 object-cover"
        src={product.imageUrl}
        alt={product.name}
        width={500}
        height={500}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-700 mb-2">${product.price}</p>
        <button
          onClick={addToCartHandler}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;

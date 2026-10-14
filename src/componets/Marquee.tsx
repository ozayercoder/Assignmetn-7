import { IProduct } from "@/types/type";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data: IProduct[] = await res.json();

  return (
    <div>
      <MarqueeText direction="right" duration={15} pauseOnHover={true}>
        <div className="flex items-center gap-6">
          {data.map((product) => (
            <span
              key={product.id}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm shadow-sm"
            >
              <span>{product.image}</span>
              <span className="font-medium text-gray-700">
                {product.nameBn}
              </span>
              <span className="font-semibold text-green-700">
                ৳{product.today}/{product.unit}
              </span>
              <span
                className={`inline-flex items-center gap-1 ${
                  product.change.dir === "up"
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {product.change.dir === "up" ? <span>▲</span> : <span>▼</span>}
                {Math.abs(product.change.pct)}%
              </span>
            </span>
          ))}
        </div>
      </MarqueeText>
    </div>
  );
};

export default Marquee;

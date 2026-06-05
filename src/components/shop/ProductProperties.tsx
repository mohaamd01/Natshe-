import type { Product } from "@/types/product";

interface ProductPropertiesProps {
  properties: Product["properties"];
  includes: Product["includes"];
  stoneName: string;
}

const propertyLabels: Record<keyof Product["properties"], string> = {
  energy:    "Energy",
  chakra:    "Chakra",
  idealFor:  "Ideal For",
  material:  "Material",
};

const propertyIcons: Record<keyof Product["properties"], string> = {
  energy:   "✦",
  chakra:   "◎",
  idealFor: "♡",
  material: "◇",
};

export default function ProductProperties({
  properties,
  includes,
  stoneName,
}: ProductPropertiesProps) {
  return (
    <div className="space-y-6">
      {/* Crystal Properties */}
      <div>
        <h3 className="font-sans text-[11px] tracking-[0.2em] uppercase text-brown/40 mb-3">
          Crystal Properties
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {(Object.keys(propertyLabels) as (keyof Product["properties"])[]).map((key) => (
            <div
              key={key}
              className="bg-ivory-dark rounded-xl p-3.5 flex flex-col gap-1"
            >
              <span className="text-gold text-sm" aria-hidden="true">
                {propertyIcons[key]}
              </span>
              <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-brown/40">
                {propertyLabels[key]}
              </p>
              <p className="font-serif text-sm text-brown font-light leading-snug">
                {properties[key]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* What's Included */}
      <div>
        <h3 className="font-sans text-[11px] tracking-[0.2em] uppercase text-brown/40 mb-3">
          What's Included
        </h3>
        <ul className="space-y-2">
          {includes.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="text-gold text-xs mt-0.5 flex-shrink-0">✦</span>
              <span className="font-sans text-sm text-brown/70 leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Natural stone disclaimer */}
      <p className="font-sans text-[11px] text-brown/35 leading-relaxed border-t border-brown/10 pt-4">
        Each {stoneName} stone is unique — colour, patterning, and texture vary naturally.
        Your piece is one of a kind.
      </p>
    </div>
  );
}

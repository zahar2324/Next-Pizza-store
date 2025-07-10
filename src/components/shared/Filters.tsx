'use client';
import React from "react";
import { Title } from "./Title";
import { FilterChekbox } from "./FilterChekbox";
import { Input } from "../ui/input";
import { RangeSlider } from "./Range-slider";
import { CheckboxFiltersGroup } from "./check-box-filters-group";

const Filters: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = React.useState<Set<string>>(new Set(["vegetarian"]));

  const toggleCategory = (value: string) => {
    setSelectedCategories((prev) => {
      const updated = new Set(prev);
      if (updated.has(value)) {
        updated.delete(value);
      } else {
        updated.add(value);
      }
      return updated;
    });
  };

  return (
    <div>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterChekbox text="Able to build" value="able-to-build" />
        <FilterChekbox text="New one" value="new-one" />
      </div>

      <div className="mt-5 border-y border-y-natural-100 py-6 pb-7">
        <div className="mt-10 pb-7">
          <p className="font-bold mb-3">Цена от и до:</p>
          <div className="flex gap-3 mb-5">
            <Input type="number" placeholder="0" min={0} max={30000} />
            <Input type="number" min={100} max={30000} placeholder="30000" />
          </div>

          <RangeSlider
            min={0}
            max={30000}
            step={100}
            className="w-full"
            value={[0, 30000]}
          />
        </div>
      </div>

      <CheckboxFiltersGroup
        title="Categories"
        items={[
          { text: "Vegetarian", value: "vegetarian" },
          { text: "Meat", value: "meat" },
          { text: "Seafood", value: "seafood" },
          { text: "Spicy", value: "spicy" },
    
          { text: "Dessert", value: "dessert" },
          { text: "Beverages", value: "beverages" },
        ]}
        selectedIds={selectedCategories}
        onClickCheckbox={toggleCategory}
        name="categories"
        limit={3}
      />
    </div>
  );
};

export default Filters;

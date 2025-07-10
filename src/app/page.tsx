import Categories from "@/components/shared/Categories";
import { Container } from "@/components/shared/Container";
import { FilterChekbox } from "@/components/shared/FilterChekbox";
import Filters from "@/components/shared/Filters";
import SortPopup from "@/components/shared/Sort-popup";
import { Title } from "@/components/shared/Title";
import TopBar from "@/components/shared/top-bar";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import { CheckboxFiltersGroup } from "@/components/shared/check-box-filters-group";
import ProductCard from "@/components/shared/Product-card";
import ProductsGroupList from "@/components/shared/Products-group-list";
import { text } from "stream/consumers";

export default function Home() {
  return (
  <>
  <Container className="mgt-10">
    <Title text="Welcome to Next Pizza" />
  </Container>
  <TopBar/>

  <Container className="pb-14">
    <div className="flex gap-[60px]">
      <div className="w-[250px]">
        Filter:

        <Filters/>
        
      </div>

      <div className="flex-1 ">
        <div className="flex flex-col gap-16">
                  <ProductsGroupList categoryId={1} title="Pizzas" items={[{
          id: 1,
          name: "Pepperoni Pizza",
          price: 500, 
          imageUrl: "https://pizza-italy.com.ua/414-tm_thickbox_default/pica-francheska-z-bilim-sousom.jpg",
          text: "Pepperoni pizza is a classic favorite, topped with spicy pepperoni slices and melted cheese on a crispy crust.",
        }, {
          id: 2,
          name: "Margherita Pizza",
          price: 450,
          imageUrl: "https://example.com/margherita-pizza.jpg",
          text: "Margherita pizza is a simple yet delicious pizza topped with fresh mozzarella, tomatoes, and basil.",
        }, {
          id: 3,
          name: "BBQ Chicken Pizza", 
          price: 550,
          imageUrl: "https://example.com/bbq-chicken-pizza.jpg",
          text: "BBQ Chicken Pizza is a delicious pizza topped with grilled chicken, BBQ sauce, and red onions.",
        }]} />



        <ProductsGroupList categoryId={2} title="Sandwiches" items={[{
          id: 1,
          name: "Club Sandwich",
          price: 500,
          imageUrl: "https://example.com/club-sandwich.jpg",
          text: "Club Sandwich is a hearty sandwich made with layers of turkey, bacon, lettuce, tomato, and mayonnaise."
        }, {
          id: 2,
          name: "BLT Sandwich",
          price: 450,
          imageUrl: "https://example.com/blt-sandwich.jpg",
          text: "BLT Sandwich is a classic sandwich made with crispy bacon, fresh lettuce, and ripe tomatoes."
        }, {
          id: 3,
          name: "BBQ Chicken Sandwich",
          price: 550,
          imageUrl: "https://example.com/bbq-chicken-sandwich.jpg",
          text: "BBQ Chicken Sandwich is a delicious sandwich made with grilled chicken, BBQ sauce, and coleslaw."
        }]} />

        <ProductsGroupList categoryId={3} title="Rolls" items={[{
          id: 1,
          name: "California Roll",
          price: 500,
          imageUrl: "https://example.com/california-roll.jpg",
          text: "California Roll is a popular sushi roll made with crab, avocado, and cucumber, wrapped in seaweed and rice."
        }, {
          id: 2,
          name: "Spicy Tuna Roll",
          price: 450,
          imageUrl: "https://example.com/spicy-tuna-roll.jpg",
          text: "Spicy Tuna Roll is a delicious sushi roll made with spicy tuna, avocado, and cucumber."
        }, {
          id: 3,
          name: "Dragon Roll",
          price: 550,
          imageUrl: "https://example.com/dragon-roll.jpg",
          text: "Dragon Roll is a delicious sushi roll made with eel, avocado, and cucumber, topped with sweet eel sauce."
        }]} />

        <ProductsGroupList categoryId={4} title="Snacks" items={[{
          id: 1,
          name: "French Fries",
          price: 200,
          imageUrl: "https://example.com/french-fries.jpg",
          text: "French Fries are a popular snack made from deep-fried potatoes, served with ketchup or mayonnaise."
        }, {
          id: 2,
          name: "Onion Rings",
          price: 250,
          imageUrl: "https://example.com/onion-rings.jpg",
          text: "Onion Rings are a classic snack made from battered and deep-fried onion slices."
        }, {
          id: 3,
          name: "Mozzarella Sticks",
          price: 550,
          imageUrl: "https://example.com/mozarella-sticks.jpg",
          text: "Mozzarella Sticks are a popular snack made from breaded and deep-fried mozzarella cheese, served with marinara sauce."
        }]} />
        </div>

      </div>
    </div>
  </Container>
  </>
  );
}

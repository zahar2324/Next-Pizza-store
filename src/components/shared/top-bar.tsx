import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./Container";
import Categories from "./Categories";
import SortPopup from "./Sort-popup";

const TopBar: React.FC = () => {
  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10')}>
        <Container className="flex items-center justify-between gap-4">
            <Categories />
            <SortPopup />
        </Container>
    </div>
  );
};

export default TopBar;

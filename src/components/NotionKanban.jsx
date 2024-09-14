"use client";

import { DEFAULT_CARDS } from "@/app/data/columns";
import React, { useState } from "react";

const NotionKanban = () => {
  return (
    <div className="h-screen w-full bg-neutral-900 text-neutral-50">
      <Board />
    </div>
  );
};

export default NotionKanban;

const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      
    </div>
  );
};

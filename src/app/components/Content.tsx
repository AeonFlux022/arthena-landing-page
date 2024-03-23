"use client";

import React, { useState } from "react";
import Card from "./Card";

interface Artwork {
  title: string;
  imageUrl: string;
  description?: string; // Optional property for description
}

const Content: React.FC = () => {
  const artworkData: Artwork[] = [
    {
      title: "The Coldest Sunset",
      imageUrl: "https://placehold.co/600x500/313638/d2d2d2",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.",
    },
    {
      title: "The Bridge",
      imageUrl: "https://placehold.co/600x500/313638/d2d2d2",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.",
    },
    {
      title: "A Breathtaking View",
      imageUrl: "https://placehold.co/600x500/313638/d2d2d2",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.",
    },
    {
      title: "Summer Solstice",
      imageUrl: "https://placehold.co/600x500/313638/d2d2d2",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.",
    },
  ];

  return (
    <section className="container mx-auto h-auto my-20">
      <div className="container mx-auto w-1/2 text-center mb-12">
        <h1 className="text-4xl mb-4">Our Featured Artworks</h1>
        <span className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quippe: habes
          enim a rhetoribus; Quis istud possit, inquit, negare? Satis est ad hoc
          responsum.
        </span>
      </div>
      <div className="flex flex-col-1 mx-auto md:flex-cols-2 gap-4">
        {artworkData.map((artwork) => (
          <Card key={artwork.title} {...artwork} />
        ))}
      </div>
    </section>
  );
};

export default Content;

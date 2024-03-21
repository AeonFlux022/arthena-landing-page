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
      imageUrl: "https://placehold.co/600x400",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.",
    },
    {
      title: "The Bridge",
      imageUrl: "https://placehold.co/600x400",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.",
    },
    {
      title: "A Breathtaking View",
      imageUrl: "https://placehold.co/600x400",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.",
    },
  ];

  return (
    <section className="container h-96 mt-16">
      <h1 className="text-center text-4xl mb-8">Our Featured Artworks</h1>
      <div className="flex flex-col-1 md:flex-cols-2 gap-4">
        {artworkData.map((artwork) => (
          <Card key={artwork.title} {...artwork} />
        ))}
      </div>
    </section>
  );
};

export default Content;

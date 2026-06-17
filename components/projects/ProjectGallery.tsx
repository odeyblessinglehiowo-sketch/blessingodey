"use client";

import { useState } from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type ProjectGalleryProps = {
  coverImage: string;
  images: string[];
  title: string;
};

export default function ProjectGallery({
  coverImage,
  images,
  title,
}: ProjectGalleryProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(true);
  }}
  className="
    group
    relative
    cursor-pointer
    overflow-hidden
    rounded-3xl
    border
    border-zinc-800/20
    bg-[var(--card)]
    shadow-[0_25px_60px_rgba(0,0,0,0.12)]
  "
>
        <Image
          src={coverImage}
          alt={title}
          width={1000}
          height={700}
          className="
            w-full
            h-auto
            transition-transform
            duration-700
            group-hover:scale-[1.03]
          "
        />

        {/* Gradient Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/60
            via-black/10
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-300
          "
        />

        {/* View Gallery */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
          "
        >
          <span
            className="
              opacity-0
              group-hover:opacity-100
              translate-y-3
              group-hover:translate-y-0
              transition-all
              duration-300

              px-6
              py-3
              rounded-xl
              bg-black/70
              backdrop-blur-xl
              text-white
              font-semibold
            "
          >
            View Gallery
          </span>
        </div>

        {/* Project Label */}

        

      </div>

      <Lightbox
  open={open}
  close={() => {
    setOpen(false);
  }}
        slides={images.map((image) => ({
          src: image,
        }))}
        carousel={{
          finite: false,
        }}
        controller={{
          closeOnBackdropClick: true,
        }}
        animation={{
          fade: 300,
          swipe: 400,
        }}
        noScroll={{
    disabled: true,
  }}
      />
    </>
  );
}
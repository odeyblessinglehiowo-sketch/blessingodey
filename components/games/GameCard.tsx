import Image from "next/image";
import Link from "next/link";

type GameCardProps = {
  image: string;
  title: string;
  description: string;
  href: string;
};

export default function GameCard({
  image,
  title,
  description,
  href,
}: GameCardProps) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-zinc-800/20
        bg-[var(--card)]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-amber-400
      "
    >
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={800}
          height={500}
          className="
            h-[300px]
            lg:h-[350px]
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      <div className="p-5">

        <h3
          className="
            text-2xl
            font-bold
            text-[var(--foreground)]
          "
        >
          {title}
        </h3>

      <p
  className="
    mt-2
    text-xs
    text-[var(--muted)]
    line-clamp-2
    md:line-clamp-none
    md:text-base
    md:leading-relaxed
  "
>
  {description}
</p>

        <Link
  href={href}
  className="
    mt-5
    block
    w-fit
    mx-auto
    px-15
    py-2
    rounded-xl
    bg-amber-400
    text-black
    font-semibold
    text-center
    transition-all
    duration-300
    hover:scale-105
  "
>
  Play Now
</Link>

      </div>
    </div>
  );
}
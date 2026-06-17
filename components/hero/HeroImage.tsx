import Image from "next/image";
import { Globe } from "lucide-react";

export default function HeroImage() {
  return (
    <div
      className="
        relative
        flex
        flex-col
        items-center
        justify-center
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          h-[350px]
          w-[350px]
          lg:h-[550px]
          lg:w-[550px]
          rounded-full
          bg-amber-400/20
          blur-[120px]
        "
      />

      {/* Gold Ring */}

      <div
        className="
          absolute
          h-[320px]
          w-[320px]
          lg:h-[500px]
          lg:w-[500px]
          rounded-full
          border
          border-amber-400/20
        "
      />

      {/* Image Container */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-[520px]
        "
      >
        <Image
          src="/images/blessingb.png"
          alt="Blessing Odey"
          width={550}
          height={650}
          priority
          className="
            w-full
            h-auto
            object-contain
            drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]
          "
        />
      </div>

      {/* Floating Card */}

      <div
        className="
          relative
          z-20
          -mt-8
          w-full
          max-w-[500px]
          rounded-3xl
          border
          border-amber-400/20
          bg-[var(--card)]
          backdrop-blur-xl
          px-6
          py-2
          shadow-xl
        "
      >
        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-amber-400/10
            "
          >
            <Globe
              size={22}
              className="text-amber-400"
            />
          </div>

          <div>
            <h3
              className="
                text-lg
                font-bold
                text-[var(--foreground)]
              "
            >
              Web Developer
            </h3>

            <p
  className="
    text-sm
    text-[var(--muted)]
  "
>
  Building scalable websites

  <span className="hidden lg:inline">
    {" "}and digital experiences.
  </span>
</p>
          </div>

        </div>
      </div>
    </div>
  );
}
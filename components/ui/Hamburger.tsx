
type HamburgerProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function Hamburger({
  isOpen,
  onClick,
}: HamburgerProps) {
  return (
    <button
      onClick={onClick}
      className="
        relative
        h-8
        w-8
        cursor-pointer
      "
      aria-label="Toggle Menu"
    >
      <span
        className={`
          absolute
          left-0
          top-2
          h-[3px]
          w-8
          rounded-full
          bg-white
          transition-all
          duration-300
          ${
            isOpen
              ? "translate-y-[8px] rotate-45"
              : ""
          }
        `}
      />

      <span
        className={`
          absolute
          left-0
          top-4
          h-[3px]
          w-8
          rounded-full
          bg-white
          transition-all
          duration-300
          ${
            isOpen
              ? "opacity-0"
              : ""
          }
        `}
      />

      <span
        className={`
          absolute
          left-0
          top-6
          h-[3px]
          w-8
          rounded-full
          bg-white
          transition-all
          duration-300
          ${
            isOpen
              ? "-translate-y-[8px] -rotate-45"
              : ""
          }
        `}
      />
    </button>
  );
}
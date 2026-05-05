import { tv, type VariantProps } from "tailwind-variants";

const tagVariants = tv({
  base: "font-semibold text-zinc-600 bg-surface-low transition-colors active:scale-95 flex items-center justify-center line-clamp-1",
  variants: {
    size: {
      sm: "px-2 py-0.5 text-[0.625rem]",
      md: "px-3 py-1 text-[0.6875rem]",
      lg: "px-4 py-1.5 text-xs",
    },
    shape: {
      pill: "rounded-full",
      box: "rounded",
    },
  },
  defaultVariants: {
    size: "md",
    shape: "pill",
  },
});

interface TagProps extends VariantProps<typeof tagVariants> {
  label: string;
  onClick?: (tag: string) => void;
  className?: string;
}

export function Tag({ label, onClick, className, ...props }: TagProps) {
  const hover = onClick ? "hover:bg-zinc-200/80 cursor-pointer" : ""
  return (
    <button
      onClick={() => onClick && onClick(label)}
      className={tagVariants({ ...props, className }) + hover}
    >
      {label}
    </button>
  );
}

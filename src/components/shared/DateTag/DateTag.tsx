import { tv, type VariantProps } from "tailwind-variants";

const dateTagVariants = tv({
    slots: {
        container: "flex items-center text-slate-400",
        icon: "material-symbols-outlined",
        text: "font-medium"
    },
    variants: {
        size: {
            sm: {
                container: "gap-1",
                text: "text-[0.625rem]",
                icon: "!text-[1.1rem]"
            },
            md: {
                container: "gap-1.5",
                text: "text-xs",
                icon: "!text-[1.5rem]"
            },
            lg: {
                container: "gap-2",
                text: "text-sm",
                icon: "!text-[1.75rem]"
            }
        }
    },
    defaultVariants: {
        size: "md"
    }
});

interface DateTagProps extends VariantProps<typeof dateTagVariants> {
    date?: Date | string;
    className?: string;
}

export function DateTag({ date, size, className }: DateTagProps) {
    const { container, icon, text } = dateTagVariants({ size });

    return (
        <div className={container({ className })}>
            <span className={icon()}>
                history
            </span>
            <span className={text()}>
                {date ? new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'N/A'}
            </span>
        </div>
    );
}

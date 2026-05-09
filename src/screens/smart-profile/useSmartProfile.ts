import { useRef, useState } from "react";

export const useSmartProfile = () => {
    const [isStep1ModalOpen, setIsStep1ModalOpen] = useState(false);

    const scrollRef = useRef<HTMLDivElement>(null);

    const handleWheel = (e: React.WheelEvent) => {
        if (scrollRef.current) {
            // Direct scrollLeft modification for smooth horizontal scrolling with mouse wheel
            // Multiplied by 1.5 to increase scroll speed as requested
            scrollRef.current.scrollLeft += e.deltaY * 0.8;
        }
    };

    const openStep1Modal = () => setIsStep1ModalOpen(true);
    const closeStep1Modal = () => setIsStep1ModalOpen(false);

    return {
        scrollRef,
        handleWheel,
        isStep1ModalOpen,
        openStep1Modal,
        closeStep1Modal,
    };
};
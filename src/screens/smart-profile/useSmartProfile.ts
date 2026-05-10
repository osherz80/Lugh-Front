import { useRef, useState } from "react";

export const useSmartProfile = () => {
    const [isStep1ModalOpen, setIsStep1ModalOpen] = useState(false);
    const [isStep2ModalOpen, setIsStep2ModalOpen] = useState(false);
    const [isStep3ModalOpen, setIsStep3ModalOpen] = useState(false);
    const [isStep4ModalOpen, setIsStep4ModalOpen] = useState(false);
    const [isStep5ModalOpen, setIsStep5ModalOpen] = useState(false);

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

    const openStep2Modal = () => setIsStep2ModalOpen(true);
    const closeStep2Modal = () => setIsStep2ModalOpen(false);

    const openStep3Modal = () => setIsStep3ModalOpen(true);
    const closeStep3Modal = () => setIsStep3ModalOpen(false);

    const openStep4Modal = () => setIsStep4ModalOpen(true);
    const closeStep4Modal = () => setIsStep4ModalOpen(false);

    const openStep5Modal = () => setIsStep5ModalOpen(true);
    const closeStep5Modal = () => setIsStep5ModalOpen(false);

    return {
        scrollRef,
        handleWheel,
        isStep1ModalOpen,
        openStep1Modal,
        closeStep1Modal,
        isStep2ModalOpen,
        openStep2Modal,
        closeStep2Modal,
        isStep3ModalOpen,
        openStep3Modal,
        closeStep3Modal,
        isStep4ModalOpen,
        openStep4Modal,
        closeStep4Modal,
        isStep5ModalOpen,
        openStep5Modal,
        closeStep5Modal,
    };
};
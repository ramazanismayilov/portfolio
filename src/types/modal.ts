export type ModalProps = {
    size?: string;
    title: string;
    description: string;
    skills: string[];
    detailedFeatures?: string[];
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};
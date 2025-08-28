import { Modal as FlowbiteModal, ModalBody, ModalHeader } from "flowbite-react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { ModalProps } from "../../types/modal";
import { FaCode } from "react-icons/fa";

const ProjectModal: React.FC<ModalProps> = ({
    size = "md",
    title = "",
    description = "",
    skills = [],
    detailedFeatures = [],
    openModal,
    setOpenModal
}) => {
    return (
        <FlowbiteModal className="backdrop-blur-md backdrop-brightness-50" show={openModal} size={size} onClose={() => setOpenModal(false)}>
            <ModalHeader className="modal-header px-5 py-2 bg-emerald-500 text-white border-none rounded-t-lg">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
            </ModalHeader>
            <ModalBody className="bg-gray-50 rounded-b-lg p-0">
                <div className="p-5 space-y-8 h-[500px] overflow-y-auto">
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center mr-3">
                                <IoInformationCircleOutline className="text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-800">
                                About This Project
                            </h4>
                        </div>
                        <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
                            <p className="text-gray-700 leading-relaxed text-base">
                                {description}
                            </p>
                        </div>
                    </div>
                    {detailedFeatures && detailedFeatures.length > 0 && (
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                                    <IoMdCheckmarkCircleOutline className="text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-800">
                                    Key Features
                                </h4>
                            </div>
                            <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
                                {detailedFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start p-2">
                                        <div className="flex-shrink-0 mr-4 mt-1">
                                            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                                                <span className="text-white text-sm font-bold">{index + 1}</span>
                                            </div>
                                        </div>
                                        <span className="text-gray-700 leading-relaxed flex-1 pt-1">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                                <FaCode className="text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-800">
                                Technologies Used
                            </h4>
                        </div>
                        <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-emerald-500 text-white text-sm font-medium rounded-full"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-2 bg-emerald-500 rounded-b-lg"></div>
            </ModalBody>
        </FlowbiteModal>
    );
};

export default ProjectModal;
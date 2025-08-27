import { Modal as FlowbiteModal, ModalBody, ModalHeader } from "flowbite-react";
import { ModalProps } from "../../types/modal";

const ProjectModal: React.FC<ModalProps> = ({ size = "md", title = "", description = "", skills = [], detailedFeatures = [], openModal, setOpenModal }) => {
    return (
        <FlowbiteModal className="backdrop-blur-sm" show={openModal} size={size} onClose={() => setOpenModal(false)}>
            <ModalHeader className="modal-header py-3 px-4 bg-white border-b border-gray-200 rounded-t-md">
                <h3 className="text-xl font-semibold text-green-800">{title}</h3>
            </ModalHeader>
            <ModalBody className="bg-white rounded-b-md p-4">
                <div className="space-y-6">
                    <div>
                        <h4 className="text-lg font-semibold text-green-900 mb-3">About This Project</h4>
                        <p className="text-base leading-relaxed text-gray-700">
                            {description}
                        </p>
                    </div>
                    {detailedFeatures && detailedFeatures.length > 0 && (
                        <div>
                            <h4 className="text-lg font-semibold text-green-900 mb-3">Key Features</h4>
                            <ul className="space-y-2">
                                {detailedFeatures.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-800 text-sm font-medium rounded-full mr-3 mt-0.5 flex-shrink-0">
                                            {index + 1}
                                        </span>
                                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div>
                        <h4 className="text-lg font-semibold text-green-900 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full border border-green-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </ModalBody>
        </FlowbiteModal>
    );
};

export default ProjectModal;
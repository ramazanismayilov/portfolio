import React from 'react';
import { IoClose, IoInformationCircleOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { ModalProps } from '../../types/modal';

const ProjectModal: React.FC<ModalProps> = ({
    size = "md",
    title = "",
    description = "",
    skills = [],
    detailedFeatures = [],
    openModal,
    setOpenModal
}) => {
    if (!openModal) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
                <div className="flex items-center justify-between p-5 border-b border-gray-200 bg-gray-50">
                    <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                    <button
                        onClick={() => setOpenModal(false)}
                        className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                    >
                        <IoClose className="w-6 h-6 text-gray-500" />
                    </button>
                </div>
                <div className="p-5 overflow-y-auto max-h-[70vh] space-y-6">
                    <div>
                        <div className="flex items-center mb-3">
                            <IoInformationCircleOutline className="w-5 h-5 text-gray-600 mr-2" />
                            <h3 className="text-lg font-medium text-gray-900">About This Project</h3>
                        </div>
                        <div className="pl-7">
                            <p className="text-gray-700 leading-relaxed">{description}</p>
                        </div>
                    </div>
                    {detailedFeatures && detailedFeatures.length > 0 && (
                        <div>
                            <div className="flex items-center mb-3">
                                <IoMdCheckmarkCircleOutline className="w-5 h-5 text-green-600 mr-2" />
                                <h3 className="text-lg font-medium text-gray-900">Key Features</h3>
                            </div>
                            <div className="pl-7">
                                <ul className="space-y-2">
                                    {detailedFeatures.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                    <div>
                        <div className="flex items-center mb-3">
                            <FaCode className="w-5 h-5 text-blue-600 mr-2" />
                            <h3 className="text-lg font-medium text-gray-900">Technologies Used</h3>
                        </div>
                        <div className="pl-7">
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
import React, { useState } from "react";
import Modal from "./Modal"; // Adjust the path based on your file structure

const ProsecutionAccusedDetails = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className="rounded-lg shadow-md">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-46 rounded-2xl flex flex-col">
          <h2 className="text-xl uppercase font-semibold font-pops text-white bg-[#3C5DD5] text-center p-2 rounded-t-2xl">
            Accused
          </h2>
          <div className="p-4 flex-1">
            <button className="border-black bg-white rounded-md py-1 px-3 my-2 mx-auto block">
              Bail Application Link
            </button>
            <div className="grid grid-cols-2 gap-3 my-5">
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Witnesses
                </h3>
                <div className="space-y-2 bg-[#D9D9D9] rounded-md">
                  <div
                    className="p-2 rounded-md cursor-pointer"
                    onClick={() =>
                      openModal(
                        "Witness 1 Details",
                        `
                        <img src="/person.png" alt="Witness 1" class="w-24 h-24 mb-2 absolute right-[35%]"/>
                        <p>Name: Raj Kadam<br />Age: 45<br />Occupation: Businessman<br />Address: 123, ABC Street, Pune
                      `
                      )
                    }
                  >
                    Witness 1
                  </div>
                  <div
                    className="p-2 rounded-md cursor-pointer"
                    onClick={() =>
                      openModal(
                        "Witness 2 Details",
                        `
                        <img src="/person.png" alt="Witness 1" class="w-24 h-24 mb-2 absolute right-[35%]"/>
                        <p>Name: Priya Sharma<br />Age: 30<br />Occupation: Teacher<br />Address: 456, DEF Street, Pune
                      `
                      )
                    }
                  >
                    Witness 2
                  </div>
                  <div
                    className="p-2 rounded-md cursor-pointer"
                    onClick={() =>
                      openModal(
                        "Witness 3 Details",
                        `
                        <img src="/person.png" alt="Witness 1" class="w-24 h-24 mb-2 absolute right-[35%]"/>
                        <p>Name: Sameer Khan<br />Age: 35<br />Occupation: Engineer<br />Address: 789, GHI Street, Pune
                      `
                      )
                    }
                  >
                    Witness 3
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Evidence
                </h3>
                <div className="space-y-1.5">
                  <img
                    src="/gun.png"
                    alt="Evidence"
                    className="h-16 w-16 p-1 bg-white rounded-full mx-auto cursor-pointer"
                    onClick={() =>
                      openModal(
                        "Evidence Details",
                        `
                        <img src="/gun.png" alt="Gun Evidence" class="w-24 h-24 mb-2"/>
                        <p>A bullet from the crime scene matched unique markings from the suspect’s gun.</p>
                      `
                      )
                    }
                  />
                  <img
                    src="/finger.png"
                    alt="Evidence"
                    className="h-16 w-16 p-1 bg-white rounded-full mx-auto cursor-pointer"
                    onClick={() =>
                      openModal(
                        "Evidence Details",
                        `
                        <img src="/finger.png" alt="Fingerprint Evidence" class="w-24 h-24 mb-2"/>
                        <p>A fingerprint lifted from a window was identified as belonging to the accused.</p>
                      `
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-xl font-pops text-white bg-[#0077B6] text-center px-2 py-3 rounded-b-2xl">
            <span className="bg-white px-3 py-1 rounded-md text-black tracking-wider">
              Accused History
            </span>
          </h2>
        </div>
        <div className="bg-blue-46 rounded-2xl flex flex-col">
          <h2 className="text-xl uppercase font-semibold font-pops text-white bg-[#3C5DD5] text-center p-2 rounded-t-2xl">
            Prosecution
          </h2>
          <div className="p-4 flex-1">
            <button className="border-black bg-white rounded-md py-1 px-3 my-2 mx-auto block">
              Police Reports
            </button>
            <div className="grid grid-cols-2 gap-3 my-5">
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Witnesses
                </h3>
                <div className="space-y-2 bg-[#D9D9D9] rounded-md">
                  <div
                    className="p-2 rounded-md cursor-pointer"
                    onClick={() =>
                      openModal(
                        "Witness 1 Details",
                        `
                        <img src="/person.png" alt="Witness 1" class="w-24 h-24 mb-2 absolute right-[35%]"/>
                        <p>Name: Raj Kadam<br />Age: 45<br />Occupation: Businessman<br />Address: 123, ABC Street, Pune
                      `
                      )
                    }
                  >
                    Witness 1
                  </div>
                  <div
                    className="p-2 rounded-md cursor-pointer"
                    onClick={() =>
                      openModal(
                        "Witness 2 Details",
                        `
                        <img src="/person.png" alt="Witness 1" class="w-24 h-24 mb-2 absolute right-[35%]"/>
                        <p>Name: Priya Sharma<br />Age: 30<br />Occupation: Teacher<br />Address: 456, DEF Street, Pune
                      `
                      )
                    }
                  >
                    Witness 2
                  </div>
                  <div
                    className="p-2 rounded-md cursor-pointer"
                    onClick={() =>
                      openModal(
                        "Witness 3 Details",
                        `
                        <img src="/person.png" alt="Witness 1" class="w-24 h-24 mb-2 absolute right-[35%]"/>
                        <p>Name: Sameer Khan<br />Age: 35<br />Occupation: Engineer<br />Address: 789, GHI Street, Pune
                      `
                      )
                    }
                  >
                    Witness 3
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Evidence
                </h3>
                <div className="space-y-1.5">
                  <img
                    src="/gun.png"
                    alt="Evidence"
                    className="h-16 w-16 p-1 bg-white rounded-full mx-auto cursor-pointer"
                    onClick={() =>
                      openModal(
                        "Evidence Details",
                        `
                        <img src="/gun.png" alt="Gun Evidence" class="w-24 h-24 mb-2"/>
                        <p>A bullet from the crime scene matched unique markings from the suspect’s gun.</p>
                      `
                      )
                    }
                  />
                  <img
                    src="/finger.png"
                    alt="Evidence"
                    className="h-16 w-16 p-1 bg-white rounded-full mx-auto cursor-pointer"
                    onClick={() =>
                      openModal(
                        "Evidence Details",
                        `
                        <img src="/finger.png" alt="Fingerprint Evidence" class="w-24 h-24 mb-2"/>
                        <p>A fingerprint lifted from a window was identified as belonging to the accused.</p>
                      `
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-xl font-pops text-white bg-[#0077B6] text-center px-2 py-3 rounded-b-2xl">
            <span className="bg-white px-3 py-1 rounded-md text-black tracking-wider">
              Victim History
            </span>
          </h2>
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        title={modalContent.title}
        content={modalContent.content}
      />
    </div>
  );
};

export default ProsecutionAccusedDetails;

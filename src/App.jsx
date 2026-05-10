import { useState } from "react";
import Modal from "./Modal/Modal";
import Accordion from "./Accordion/Accordion";
import Tabs from "./Tabs/Tabs";

function App() {
  const [showModal, setShowModal] = useState(false);
  const myTabs = [
    { label: "Profile" },
    { label: "Settings" },
    { label: "Security" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-10 font-sans">
      <h1 className="text-3xl font-bold mb-8 text-neutral-100">
        My Component Library
      </h1>

        <h2 className="text-2xl font-bold mb-6">Account Management</h2>

        <Tabs tabs={myTabs}>
          <div>
            <h3 className="text-xl">User Profile</h3>
            <p className="text-neutral-400 mt-2">
              Manage your public information here.
            </p>
          </div>

          <div>
            <h3 className="text-xl">App Settings</h3>
            <p className="text-neutral-400 mt-2">
              Toggle dark mode and notifications.
            </p>
          </div>

          <div>
            <h3 className="text-xl">Security Check</h3>
            <p className="text-neutral-400 mt-2">
              Change your password and 2FA.
            </p>
          </div>
        </Tabs>

        <div className="max-w-xl mt-6">
          <Accordion title="What is this project?">
            <p>This is my sixth project focusing on Props and Children!</p>
          </Accordion>

          <Accordion title="Can I put a button in here?">
            <button
              onClick={() => setShowModal(true)}
              className="bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-lg text-sm font-bold"
            >
              Yes! Click to open Modal
            </button>
          </Accordion>
        </div>

        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <h2 className="text-xl font-bold mb-2">Hello World!</h2>
          <p>This modal can hold text, images, or even other components.</p>
        </Modal>
    </div>
  );
}

export default App;

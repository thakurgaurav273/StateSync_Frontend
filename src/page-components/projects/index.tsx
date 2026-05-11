"use client";
import { Button } from "@/components/ui";
import Modal from "@/components/ui/Modal";
import { useState } from "react";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <h1>Projects</h1>
      <p>List of projects will go here.</p>
      <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        // trigger={<Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>}
      >
        <h2>Modal Title</h2>
        <p>Modal content goes here.</p>
      </Modal>
    </div>
  );
};

export default Projects;

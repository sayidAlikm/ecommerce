"use client";

import { Modal } from "@/components/ui/modal";
import React from "react";

const SetupPage = () => {
  return (
    <div className="p-4">
      <Modal title="TITLE" description="DESCRIPTION" isOpen onClose={() => {}}>
        children
      </Modal>
    </div>
  );
};

export default SetupPage;

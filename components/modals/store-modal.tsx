"use client";

import { useStorModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";

export const StoreModal = () => {
  const storeModal = useStorModal();
  return (
    <Modal
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
      title="Create Store"
      description="Add a new Store to manage products"
    >
      Create Future Form
    </Modal>
  );
};

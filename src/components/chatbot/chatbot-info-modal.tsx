"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ChatbotInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
}

export default function ChatbotInfoModal({
  isOpen,
  onClose,
  content,
}: ChatbotInfoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>About this Chatbot</DialogTitle>
          <DialogDescription className="text-left whitespace-pre-line pt-2">
            {content}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

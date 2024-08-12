import React, { useRef, useState } from "react";
import { Box, Button, Input, Text, Icon } from "@chakra-ui/react";
import { FiUploadCloud } from "react-icons/fi";

interface FilePickerProps {
  onFileSelect: (file: File) => void;
}

const FilePicker: React.FC<FilePickerProps> = ({ onFileSelect }) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type === "application/pdf") {
        setFile(selectedFile);
        setError(null);
        onFileSelect(selectedFile);
      } else {
        setError("Please select a PDF file.");
        setFile(null);
      }
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const selectedFile = event.dataTransfer.files?.[0];
    if (selectedFile) {
      if (selectedFile.type === "application/pdf") {
        setFile(selectedFile);
        setError(null);
        onFileSelect(selectedFile);
      } else {
        setError("Please select a PDF file.");
        setFile(null);
      }
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <Box
      border="2px dashed #CBD5E0"
      p={6}
      borderRadius="md"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      textAlign="center"
      cursor="pointer"
      _hover={{ borderColor: "teal.500" }}
      onClick={handleClick}
    >
      {!file ? (
        <>
          <Icon as={FiUploadCloud} boxSize={12} color="teal.500" mb={2} />
          <Text fontSize="lg" color="gray.500">
            Drag & drop a PDF here, or click to select a PDF
          </Text>
          {error && (
            <Text fontSize="sm" color="red.500" mt={2}>
              {error}
            </Text>
          )}
        </>
      ) : (
        <Box>
          <Text fontSize="lg" color="gray.500" mb={4}>
            {file.name}
          </Text>
          <Button colorScheme="teal" onClick={handleClick}>
            Change File
          </Button>
        </Box>
      )}
      <Input
        type="file"
        accept="application/pdf"
        ref={inputRef}
        onChange={handleFileSelect}
        display="none"
      />
    </Box>
  );
};

export default FilePicker;

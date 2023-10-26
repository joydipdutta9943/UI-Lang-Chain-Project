import { Flex, Stack, Text, useToast } from '@chakra-ui/react';
import React from 'react';
import { useDropzone } from 'react-dropzone';

const Uploader: React.FC<{}> = () => {
    const toast = useToast();
    const { getInputProps, getRootProps } = useDropzone({
        onDropAccepted(files) {
            const data = new FormData();
            data.append("file", files[0])

            fetch("http://localhost:3000/upload", {
                method: 'POST',
                body: data,
            })
                .then((res) => {
                    toast({
                        title: 'Document Uploaded Successfully',
                        description: 'You can ask questions now!',
                        status: 'success',
                        duration: 3000
                    })
                })
        },
    });

    return (
        <Flex
            width="700px"
            height="200px"
            border="2px dashed"
            borderColor="#cdcdcd"
            borderRadius="10px"
            justifyContent="center"
            align="center"
            {...getRootProps()}
        >
            <input hidden={true} {...getInputProps()} />
            <Stack spacing="4px" align="center">
                <Text color="#0E0E0E" fontSize="14px">
                    Drop your files here
                </Text>
                <Text color="#cdcdcd" fontSize="12px">
                    Accepted: PDF, DOCX, CSV
                </Text>
            </Stack>
        </Flex>
    )
};

export default Uploader;
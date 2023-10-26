import { Box, Flex, Input, Spinner, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

const ChatBox: React.FC<{}> = () => {
  const [query, setQuery] = useState('');
  const [chats, setChats] = useState<{
    question: string;
    answer: string;
  }[]>([])
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box w='700px' height="600px" pos='relative' p="20px" bgColor='#F5F5F5' borderRadius="10px" mt="20px">
      <Stack height="500px" overflowY="auto"
        __css={{
          '&::-webkit-scrollbar': {
            width: '3px',
            borderRadius: '3px',
            backgroundColor: '#F5F5F5',
          },

          '&::-webkit-scrollbar-track': {
            width: '5px',
            borderRadius: '3px',
            backgroundColor: '#F5F5F5',
          },

          '&::-webkit-scrollbar-thumb': {
            width: '5px',
            borderRadius: '3px',
            backgroundColor: '#cdcdcd',
          },
        }}
      >
        {
          chats?.length > 0 ? (
            chats?.map((query, index) => (
              <Stack key={index}>
                <Box key={index} bgColor='white' fontWeight="bold" borderRadius="5px" p="20px">
                  Q. {query.question}
                </Box>
                <Box key={index} bgColor='white' borderRadius="5px" p="20px">
                  {query.answer}
                </Box>
              </Stack>
            ))
          ) : (
            <Flex justifyContent="center" align="center" h='100%'>
              {
                isLoading ? (
                  <Spinner size='md' />
                ) : <Text>No chats yet.</Text>
              }
            </Flex>
          )
        }
      </Stack>

      <Input
        name="query"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onKeyPress={async (e) => {
          setIsLoading(true);
          const data = {
            query: query,
          };

          if (e.key === "Enter") {
            const res = await fetch("http://localhost:3000/query_embedding", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data),
            })

            const response = await res.json()
            setChats((prev) => [...prev, response])

            setQuery('');

            setIsLoading(false)
          }
        }}
        bgColor='white'
        placeholder="Enter your query here..."
        fontSize="14px"
        py="15px"
        minH="fit-content"
        h="fit-content"
        pos='absolute'
        width="94%"
        bottom="20px"
        _focus={{
          outline: "none",
          border: "1px solid #000",
          boxShadow: "none"
        }}
      />
    </Box>
  )
};

export default ChatBox;
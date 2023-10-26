import http from "../http/axios";

export const upload = async ({ file }: { file: File }) => {
  return await http.post("/upload", {
    file,
  });
};

export const getEmbedding = async ({ query }: { query: string }) => {
  return await http.post("/query_embedding", {
    query,
  });
};

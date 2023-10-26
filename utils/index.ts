
export const getURL = (file: File) => {
    const fd = new FileReader();
    const blob = new Blob([file], { type: file?.type });
  
    return URL.createObjectURL(blob);
  };
// Fungsi untuk menghitung ukuran file dari base64 dalam byte
export const calculateBase64Size = (base64: string): number => {
  let base64String = base64?.split(",")[1];
  let padding = (base64String?.match(/=/g) || [])?.length;
  return (base64String?.length * 3) / 4 - padding;
};

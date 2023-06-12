import axios from "axios";

export const DONASI = "Donasi";

const getFormatedDate = () => {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const today = new Date();
  const day = today.getDate();
  const monthIndex = today.getMonth();
  const year = today.getFullYear();

  const formattedDate = `${day} ${months[monthIndex]} ${year}`;
  return formattedDate;
};

export const dataDonasi = (donationAmount, dataForm) => {
  const data = {
    createdAt: getFormatedDate(),
    Nama: dataForm.Nama,
    Email: dataForm.Email,
    Nomor_Rekening: dataForm.Nomor_Rekening,
    Nomor_Telepon: dataForm.Nomor_Telepon,
    formattedValue: donationAmount.formattedValue,
    originalValue: donationAmount.originalValue,
  };

  axios.post(import.meta.env.VITE_API_DONASI, data);

  return {
    type: DONASI,
    data: {
      donationAmount,
      dataForm,
      createdAt: getFormatedDate(),
    },
  };
};

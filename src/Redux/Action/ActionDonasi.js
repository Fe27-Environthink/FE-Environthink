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

export const dataDonasi = (DetailDonation, dataForm) => {
  //   console.log(getFormatedDate());
  //   console.log(DetailDonation);
  //   console.log(dataForm);
  return {
    type: DONASI,
    data: {
      DetailDonation,
      dataForm,
      createdAt: getFormatedDate(),
    },
  };
};

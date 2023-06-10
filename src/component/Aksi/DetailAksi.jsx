import { useParams } from "react-router-dom";
import "./Aksi.css";
function DetailAksi() {
const {key}=useParams();
  return (
    <>
      <div className="container pt-5 detail-aksi">
        <div className="row">
          <div className="col-md-8">
            <div id="aksi">
              <p className="hashTag  m-0 p-0">
                <span id="cathegory" >Petisi</span> <span id="dot" > </span>
                <span id="hashTag" >#Nelayan #Perbudakan</span>
              </p>

              <h3 id="title" >Hentikan Perbudakan Modern di Laut!{key}</h3>
              <img
                className="img-fluid pt-3"
                width="100%"
                src="https://i.ibb.co/hVRwTrJ/perbudakan-modern-di-laut-terus-berlanjut-polri-gagal-lindungi-abk-ikan-indonesia.jpg"
                alt="image content"
                id="image"
              />
              <div className="paragraf pt-4">
                <p className="mb-4 paragraf">
                  Para Anak Buah Kapal (ABK) Indonesia yang bekerja di kapal
                  ikan asing mengalami perlakuan yang sangat buruk meskipun
                  diimingi upah yang tinggi. Mereka mendapat upah yang ditahan,
                  jam kerja yang tidak manusiawi, tidak diberi makan dan minum
                  yang layak, dan bahkan jatuh sakit dan meninggal lalu jasadnya
                  dilarung ke laut tanpa sepengetahuan keluarga. Perlakuan
                  menyedihkan ini bukanlah hal yang baru, ABK Indonesia sering
                  kali menjadi korban kerja paksa dan perbudakan modern di kapal
                  perikanan asing jarak jauh. Kapal perikanan ilegal semakin
                  membuat kondisi stok ikan dan ekosistem laut terancam, bahkan
                  mencederai kemanusiaan.
                </p>
                <p className="mb-4 paragraf">
                  Saatnya kita mengakhiri perbudakan modern di laut dan memenuhi
                  hak-hak ABK dan keluarganya. Mari bersama-sama bersikap tegas
                  pada seluruh negara bendera kapal ikan yang mempekerjakan ABK
                  Indonesia, melakukan inspeksi kapal perikanan jarak jauh
                  secara global, dan menuntaskan benang kusut tata kelola
                  Pelindungan ABK dengan ratifikasi Konvensi ILO 188 tentang
                  Pekerjaan dalam Penangkapan Ikan. Kita harus menghentikan
                  tindakan yang merugikan ABK dan memastikan bahwa mereka
                  mendapatkan perlindungan yang layak.
                </p>
                <p id="paragraf-konklusi" className="fw-bold paragraf">
                  Mari kita bersama-sama mendorong Pemerintah Indonesia untuk
                  mengambil tindakan yang lebih kuat dalam melindungi para Anak
                  Buah Kapal (ABK) Indonesia dan keluarga mereka.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 pt-5">
            <div id="aksi">
              <h5 className="fw-bold" id="heading-form">
                belum ada dukungan
              </h5>
              <div
                className="progress"
                id="bar"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow={10}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-success"
                  id="bar-petisi"
                  style={{ width: "1%" }}
                />
              </div>
              <figcaption className="figure-caption text-end" id="figcaption">
                <span id="caption-bar" />
                0/
                <span id="target" /> dukungan
              </figcaption>
              <p className="fw-semibold paragraf" id="paragarfPetisi">
                Ayo bergabunglah dengan kami dan menunjukkan dukunganmu terhadap
                lautan dengan menandatangani petisi dan mendaftarkan namamu
                sebagai pembela laut.
              </p>
              <form className="form-group" id="form-petisi">
                <div className="mb-3">
                  <label htmlFor="namaLengkap" className="form-label">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="namaLengkap"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="nomorTelepone" className="form-label">
                    Nomor Telepon
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nomorTelepone"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="kota" className="form-label">
                    Kota
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="kota"
                    required
                  />
                </div>
                <div className="form-check text-secondary">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckDefault"
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Saya setuju untuk membagikan nama dan alamat email untuk
                    menerima pemberitahuan pembaruan tentang kampanye ini dan
                    kampanye lainnya.
                  </label>
                </div>
                <button
                  className="btn btn-petisi btn-danger w-100 m-2"
                  data-bs-toggle="modal1"
                  data-bs-target="#staticBackdrop1"
                >
                  <i className="fa fa-pen-nib me-2"> </i> Tanda Tangani Petisi
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailAksi;

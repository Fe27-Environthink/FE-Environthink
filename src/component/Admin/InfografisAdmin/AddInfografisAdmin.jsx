import { useState } from "react";
import { useDispatch } from "react-redux";
import { addInfografisAdmin } from "../../../Redux/Action/infografisAction";

const AddInfografisAdmin = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState({
    judul: "",
    gambar: null,
  });

  const handleTitle = (e) => {
    setValue({
      ...value,
      judul: e.target.value,
    });
  };
  const handleImages = (e) => {
    setValue({
      ...value,
      gambar: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataAddInfografis = {
      judul: value.judul,
      gambar: value.gambar,
    };

    dispatch(addInfografisAdmin(dataAddInfografis));
  };

  return (
    <div className="container pt-4">
      <div className="addArtikel">
        <h3>Add infografis</h3>
        <div className="card mt-3 mb-5">
          <div className="card-header text-center  h4">ADD INFOGRAFIS</div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group row pt-3">
                <label htmlFor="author" className="col-sm-2 col-form-label">
                  Title Infografis
                </label>
                <div className="col-md-5">
                  <input
                    name="judul"
                    type="text"
                    className="form-control"
                    id="author"
                    value={value.judul}
                    onChange={handleTitle}
                  />
                </div>
              </div>
              <div className="form-group row pt-3">
                <label htmlFor="images" className="col-sm-2 col-form-label">
                  Images
                </label>
                <div className="col-md-5">
                  <input
                    name="gambar"
                    type="file"
                    className="form-control-file"
                    id="images"
                    accept="image/*"
                    onChange={handleImages}
                  />
                </div>
              </div>

              <div className="card-footer text-body-secondary text-center">
                <button
                  type="submit"
                  className="btn btn-success text-white me-3"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInfografisAdmin;

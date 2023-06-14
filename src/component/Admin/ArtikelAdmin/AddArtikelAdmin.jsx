import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addArticle } from "../../../Redux/Action/articleAction";

function AddArtikelAdmin() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    titleArticle: "",
    descArticle: "",
    category: "",
    hashtag: [],
    author: "",
    date: "",
    images: "",
    desc1: "",
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    desc7: "",
    desc8: "",
    desc9: "",
    desc10: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleHashtagChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      hashtag: value.split(",").map((hashtag) => hashtag.trim()),
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      images: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addArticle(formData));
    // Reset the form data
    setFormData({
      titleArticle: "",
      descArticle: "",
      category: "",
      hashtag: [],
      author: "",
      date: "",
      images: "",
      desc1: "",
      desc2: "",
      desc3: "",
      desc4: "",
      desc5: "",
      desc6: "",
      desc7: "",
      desc8: "",
      desc9: "",
      desc10: "",
    });
  };

  return (
    <>
      <div className="container pt-4">
        <div className="addArtikel">
          <h3>Add Article</h3>
          <div className="card mt-3 mb-5">
            <div className="card-header text-center  h4">FORM DATA ARTICLE</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group row pt-3">
                  <label
                    htmlFor="titleArticle"
                    className="col-sm-2 col-form-label"
                  >
                    Title Article
                  </label>
                  <div className="col-md-5">
                    <input
                      name="titleArticle"
                      type="text"
                      className="form-control"
                      id="titleArticle"
                      value={formData.titleArticle}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label
                    htmlFor="descArticle"
                    className="col-sm-2 col-form-label"
                  >
                    Desc Article
                  </label>
                  <div className="col-md-5">
                    <input
                      name="descArticle"
                      type="text"
                      className="form-control"
                      id="descArticle"
                      value={formData.descArticle}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label htmlFor="category" className="col-sm-2 col-form-label">
                    Category
                  </label>
                  <div className="col-md-5">
                    <input
                      name="category"
                      type="text"
                      className="form-control"
                      id="category"
                      value={formData.category}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label htmlFor="hashtag" className="col-sm-2 col-form-label">
                    Hashtag
                  </label>
                  <div className="col-md-5">
                    <input
                      name="hashtag"
                      type="text"
                      className="form-control"
                      id="hashtag"
                      value={formData.hashtag.join(", ")}
                      onChange={handleHashtagChange}
                    />
                    <small className="form-text text-muted">
                      Separate hashtag with commas (e.g. #tag1, #tag2)
                    </small>
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label htmlFor="author" className="col-sm-2 col-form-label">
                    Author
                  </label>
                  <div className="col-md-5">
                    <input
                      name="author"
                      type="text"
                      className="form-control"
                      id="author"
                      value={formData.author}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label htmlFor="date" className="col-sm-2 col-form-label">
                    Date
                  </label>
                  <div className="col-md-5">
                    <input
                      name="date"
                      type="date"
                      className="form-control"
                      id="date"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label htmlFor="images" className="col-sm-2 col-form-label">
                    Images
                  </label>
                  <div className="col-md-5">
                    <input
                      type="file"
                      className="form-control-file"
                      id="images"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label for="desc1" className="col-sm-2 col-form-label">
                    Desc 1
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      name="desc1"
                      id="desc1"
                      rows="3"
                      value={formData.desc1}
                      onChange={handleChange}
                      type="text"
                    ></textarea>
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label for="desc2" className="col-sm-2 col-form-label">
                    Desc 2
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      name="desc2"
                      id="desc2"
                      rows="3"
                      value={formData.desc2}
                      onChange={handleChange}
                      type="text"
                    ></textarea>
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label for="desc3" className="col-sm-2 col-form-label">
                    Desc 3
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      name="desc3"
                      id="desc3"
                      rows="3"
                      value={formData.desc3}
                      onChange={handleChange}
                      type="text"
                    ></textarea>
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label for="desc4" className="col-sm-2 col-form-label">
                    Desc 4
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      name="desc4"
                      id="desc4"
                      rows="3"
                      value={formData.desc4}
                      onChange={handleChange}
                      type="text"
                    ></textarea>
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label for="desc5" className="col-sm-2 col-form-label">
                    Desc 5
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      name="desc5"
                      id="desc5"
                      rows="3"
                      value={formData.desc5}
                      onChange={handleChange}
                      type="text"
                    ></textarea>
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label for="desc6" className="col-sm-2 col-form-label">
                    Desc 6
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      name="desc6"
                      id="desc6"
                      rows="3"
                      value={formData.desc6}
                      onChange={handleChange}
                      type="text"
                    ></textarea>
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label for="desc7" className="col-sm-2 col-form-label">
                    Desc 7
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      name="desc7"
                      id="desc7"
                      rows="3"
                      value={formData.desc7}
                      onChange={handleChange}
                      type="text"
                    ></textarea>
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label for="desc8" className="col-sm-2 col-form-label">
                    Desc 8
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      name="desc8"
                      id="desc8"
                      rows="3"
                      value={formData.desc8}
                      onChange={handleChange}
                      type="text"
                    ></textarea>
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label for="desc9" className="col-sm-2 col-form-label">
                    Desc 9
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      name="desc9"
                      id="desc9"
                      rows="3"
                      value={formData.desc9}
                      onChange={handleChange}
                      type="text"
                    ></textarea>
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label for="desc10" className="col-sm-2 col-form-label">
                    Desc 10
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      name="desc10"
                      id="desc10"
                      rows="3"
                      value={formData.desc10}
                      onChange={handleChange}
                      type="text"
                    ></textarea>
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
    </>
  );
}

export default AddArtikelAdmin;

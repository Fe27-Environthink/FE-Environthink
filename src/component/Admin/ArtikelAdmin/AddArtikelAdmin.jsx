import React from 'react'
import { Link } from 'react-router-dom'

function AddArtikelAdmin() {
  return (
    <>
        <div className="container pt-4">
            <div className="addArtikel">
                <h3>Add Article</h3>
                <div className="card mt-3 mb-5">
                    <div className="card-header text-center  h4">
                        FORM DATA ARTICLE
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group row pt-3">
                                <label for="titleArticle" className="col-sm-2 col-form-label">Title Article</label>
                                <div className="col-md-5">
                                    <input name='titleArticle' type="text" className="form-control" id="titleArticle"/>
                                </div>
                            </div>

                            <div className="form-group row pt-3">
                                <label for="descArticel" className="col-sm-2 col-form-label">Desc Article</label>
                                <div className="col-md-5">
                                    <input name='descArticel' type="text" className="form-control" id="descArticel"/>
                                </div>
                            </div>

                            <div className="form-group row pt-3">
                                <label for="category" className="col-sm-2 col-form-label">Cathegory</label>
                                <div className="col-md-5">
                                    <input name='category' type="text" className="form-control" id="category"/>
                                </div>
                            </div>

                            <div className="form-group row pt-3">
                                <label for="hashtag" className="col-sm-2 col-form-label">HashTag</label>
                                <div className="col-md-5">
                                    <input name='hashtag' type="text" className="form-control" id="hashtag"/>
                                </div>
                            </div>

                            <div className="form-group row pt-3">
                                <label for="author" className="col-sm-2 col-form-label">Author</label>
                                <div className="col-md-5">
                                    <input name='author' type="text" className="form-control" id="author"/>
                                </div>
                            </div>

                            <div className="form-group row pt-3">
                                <label for="date" className="col-sm-2 col-form-label">Date</label>
                                <div className="col-md-5">
                                    <input name='date' type="text" className="form-control" id="date"/>
                                </div>
                            </div>
                            
                            {/* <div className="form-group row pt-3">
                                <label for="date" className="col-sm-2 col-form-label">Date</label>
                                <div className="col-md-5">
                                    <div className="col-auto">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text pt-2 pb-3"><BsCalendar/></div>
                                            </div>
                                            <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username"/>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            <div className="form-group row pt-3">
                                <label for="images" className="col-sm-2 col-form-label">Images</label>
                                <div className="col-md-5">
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="customFile"/>
                                        <label className="custom-file-label" for="customFile">Choose file</label>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group row pt-3">
                                <label for="desc1" className="col-sm-2 col-form-label">Desc 1</label>
                                <div className="col-md-5">
                                    <textarea
                                        className="form-control"
                                        name='desc1'
                                        id="desc1"
                                        rows="3"
                                        value=""
                                        onChange=""
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <div className="form-group row pt-3">
                                <label for="desc2" className="col-sm-2 col-form-label">Desc 2</label>
                                <div className="col-md-5">
                                    <textarea
                                        className="form-control"
                                        name='desc2'
                                        id="desc2"
                                        rows="3"
                                        value=""
                                        onChange=""
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <div className="form-group row pt-3">
                                <label for="desc3" className="col-sm-2 col-form-label">Desc 3</label>
                                <div className="col-md-5">
                                    <textarea
                                        className="form-control"
                                        name='desc3'
                                        id="desc3"
                                        rows="3"
                                        value=""
                                        onChange=""
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <div className="form-group row pt-3">
                                <label for="desc4" className="col-sm-2 col-form-label">Desc 4</label>
                                <div className="col-md-5">
                                    <textarea
                                        className="form-control"
                                        name='desc4'
                                        id="desc4"
                                        rows="3"
                                        value=""
                                        onChange=""
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <div className="form-group row pt-3">
                                <label for="desc5" className="col-sm-2 col-form-label">Desc 5</label>
                                <div className="col-md-5">
                                    <textarea
                                        className="form-control"
                                        name='desc5'
                                        id="desc5"
                                        rows="3"
                                        value=""
                                        onChange=""
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <div className="form-group row pt-3">
                                <label for="desc6" className="col-sm-2 col-form-label">Desc 6</label>
                                <div className="col-md-5">
                                    <textarea
                                        className="form-control"
                                        name='desc6'
                                        id="desc6"
                                        rows="3"
                                        value=""
                                        onChange=""
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <div className="form-group row pt-3">
                                <label for="desc7" className="col-sm-2 col-form-label">Desc 7</label>
                                <div className="col-md-5">
                                    <textarea
                                        className="form-control"
                                        name='desc7'
                                        id="desc7"
                                        rows="3"
                                        value=""
                                        onChange=""
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <div className="form-group row pt-3">
                                <label for="desc8" className="col-sm-2 col-form-label">Desc 8</label>
                                <div className="col-md-5">
                                    <textarea
                                        className="form-control"
                                        name='desc8'
                                        id="desc8"
                                        rows="3"
                                        value=""
                                        onChange=""
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <div className="form-group row pt-3">
                                <label for="desc9" className="col-sm-2 col-form-label">Desc 9</label>
                                <div className="col-md-5">
                                    <textarea
                                        className="form-control"
                                        name='desc9'
                                        id="desc9"
                                        rows="3"
                                        value=""
                                        onChange=""
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <div className="form-group row pt-3">
                                <label for="desc10" className="col-sm-2 col-form-label">Desc 10</label>
                                <div className="col-md-5">
                                    <textarea
                                        className="form-control"
                                        name='desc10'
                                        id="desc10"
                                        rows="3"
                                        value=""
                                        onChange=""
                                        required
                                    ></textarea>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className="card-footer text-body-secondary text-center">
                        <button type="submit" className="btn btn-success text-white me-3">Cancel</button>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddArtikelAdmin
import React from 'react'

const DetailArticle = () => {
  return (
    <>
        <div className="container p-5">
            <div className="komentar" id="komentar">
                <h3 className="text-start mb-3">Komentar</h3>
                <div style={{border: "0.5px solid #bfbfbf"}}></div>
                <form className="add-post-form">
                <div className="row pt-5">
                    <div className="col-lg-8 col-md-8 col-sm-12 field">
                    <div className="input-group mb-3">
                        <input
                        type="email"
                        id="email-value"
                        className="form-control form-control-md me-2"
                        placeholder="Masukkan Alamat Email"
                        required
                        />
                        <input
                        type="text"
                        id="name-value"
                        className="form-control form-control-md"
                        placeholder="Masukkan Nama"
                        required
                        />
                    </div>
                    <div className="input-group mb-3">
                        <textarea
                        id="komentar-value"
                        className="form-control form-control-md"
                        placeholder="Tulis Komentar"
                        style={{height: "150px; resize: none"}}
                        required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Comment</button>
                    </div>
                </div>
                </form>
            </div>

            <div className="row pt-4">
                <div className="posts-list" id="posts-list"></div>
            </div>
        </div>
    </>
  )
}

export default DetailArticle
import React from 'react'

function AddArtikelAdmin() {
  return (
    <>
        <div className="container">
            <div className="addArtikel">
                <h3>Add Article</h3>
                <form>
                    <div className="row mb-4">
                        <label className="col-3" htmlFor="nameArticle">
                        Photo Profile <span className="text-error">*</span>
                        </label>
                        <div className="col-9">
                        <div className="d-flex justify-content-center">
                            <div className="img-wrap">
                                <img
                                src=""
                                alt="images-preview"
                                className="img-preview"
                                />
                                <div
                                className="delete-img"
                                
                                >
                                
                                </div>
                            </div>
                            
                            
                            <label
                                htmlFor="image"
                                className="img-upload d-flex flex-column align-items-center text-gray-dark text-sm"
                            >
                               
                                <span>Photo Profile</span>
                                <input
                                type="file"
                                id="image"
                                accept="image/*"
                                />
                            </label>
                            
                        </div>
                        
                        </div>
                    </div>
                    {/* Title Article */}
                    <div className="row mb-4">
                        <label className="col-3" htmlFor="title">
                        Title Article <span className="text-error">*</span>
                        </label>
                        <div className="col-9">
                        <input
                            name="text"
                            type="text"
                            className="input-field"
                            id="text-title"
                            placeholder="title"
                        />
                        
                        </div>
                    </div>

                    {/* Button */}
                    <div className="row justify-content-end">
                        <button
                        type="button"
                        className="col-3 button button-outline me-4"
                        
                        >
                        Cancel
                        </button>
                        <button
                        type="submit"
                        className="col-3 button text-white me-3 bg-primary"
                        >
                       
                           Save
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </>
  )
}

export default AddArtikelAdmin
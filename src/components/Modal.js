import React, { useState } from "react";

const Modal = () => {
    const [name, setName] = useState('')
    const [email, setEmial] = useState('')
    const [orderNote, setOrderNote] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setName('')
        setEmial('')
        setOrderNote('')
        
    }
    return (
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Fill the following details:</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    {/* <form onSubmit={handleSubmit} action="https://forms.maakeetoo.com/formapi/231" method="POST"> */}
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div class="modal-body">

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ex: Ahamad" required />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email </label>
                                <input value={email} onChange={(e) => setEmial(e.target.value)} type="email" class="form-control" id="exampleFormControlInput1" placeholder="ahamad@example.com" required />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Order Comments</label>
                                <textarea value={orderNote} onChange={(e) => setOrderNote(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button-close" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-outline-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal
import React from "react";

const Card = ({ header, Price, Users, Storage, support, button, Highlighted }) => {
    return (
        <div className="col card-sec">
            <div className={Highlighted === 'true' ? (`card cardHighlighte_0_10`) : ("card")}>
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">
                        {header}
                    </h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                        ${Price}
                        <small className="text-muted">/mo </small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>{Users} users included</li>
                        <li>{Storage} GB of storage</li>
                        <li>{support}</li>
                        <li>Help center access</li>

                    </ul>
                    {
              
                        button === "Sign up for free" ? (
                            <button type="button" className="btn btn-lg btn-block btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> {button}</button>

                        ) : (
                            <button type="button" className="btn btn-lg btn-block btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> {button}</button>

                        )
                    }

                </div>

            </div>
        </div>
    )
}

export default Card
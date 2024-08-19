import React from "react";

function Pricing (){
    return(
    <div>
        <div className="my-5 mx-20 border bg-blue-100 rounded-3xl">
            <h1 className="text-4xl font-bold text-center">PRICING</h1>
            <div className="my-2 w-full flex space-x-4 px-4">
            <div className="border bg-white rounded-3xl w-1/3">
            <div className="border bg-blue-600 rounded-2xl w-5/5 h-1/3 m-5">
            <h1 className="m-4 text-xl font-bold text-white">FREE</h1>
            <h1 className="m-4 text-xl font-bold text-white">Free /forever</h1>
            </div>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Pricing;
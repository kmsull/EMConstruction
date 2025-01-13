import React from "react";

const Portfolio = () => {
    return (
        <div className="m-[5%] flex flex-col space-y-[5%]">
            <div className="exampleBorder flex flex-row space-x-[5%]">
                <div className="w-[50%] flex flex-row">
                    <div className="w-[50%] exampleBorder">
                        <p className="text-4xl text-center p-[15%]">Image here</p>
                    </div>
                    <div className="w-[50%] exampleBorder">
                        <p className="text-4xl text-center p-[15%]">Description of image</p>
                    </div>    
                </div>
                <div className=" w-[50%] flex flex-row" >
                    <div className="w-[50%] exampleBorder">
                        <p className="text-4xl text-center p-[15%]">Description of image</p>
                    </div>
                    <div className="w-[50%] exampleBorder">
                        <p className="text-4xl text-center p-[15%]">Image here</p>
                    </div>    
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
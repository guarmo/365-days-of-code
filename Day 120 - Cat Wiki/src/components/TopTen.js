import React from "react";
import img1 from "../assets/image 1.png";

const TopTen = () => {
  return (
    <div className="mt-4">
      <h1 className="text-4xl my-4">Top 10 most searched breeds</h1>
      <div className="flex my-8">
        <img style={{ width: "170px", height: "170px" }} src={img1} alt="" />
        <div className="ml-8">
          <h1 className="text-4xl">1. Bengal</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet a
            veritatis distinctio maxime aut, quam aspernatur fugiat fugit ut
            nihil itaque quidem similique qui iste. Sed assumenda cum
            accusantium nisi.
          </p>
        </div>
      </div>
      <div className="flex my-8">
        <img style={{ width: "170px", height: "170px" }} src={img1} alt="" />
        <div className="ml-8">
          <h1 className="text-4xl">2. Charteux</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet a
            veritatis distinctio maxime aut, quam aspernatur fugiat fugit ut
            nihil itaque quidem similique qui iste. Sed assumenda cum
            accusantium nisi.
          </p>
        </div>
      </div>
      <div className="flex my-8">
        <img style={{ width: "170px", height: "170px" }} src={img1} alt="" />
        <div className="ml-8">
          <h1 className="text-4xl">3. Khao Manee</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet a
            veritatis distinctio maxime aut, quam aspernatur fugiat fugit ut
            nihil itaque quidem similique qui iste. Sed assumenda cum
            accusantium nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopTen;

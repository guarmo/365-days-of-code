import React from "react";
import HeroImagelg from "../assets/HeroImagelg.png";
import img1 from "../assets/image 1.png";

const Details = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col items-center md:items-start mt-4">
        <div className="relative w-1/4">
          <div className="absolute"></div>
          <img style={{ width: "370px", height: "370px" }} src={img1} alt="" />
        </div>
        <div className="md:px-20 w-3/4">
          <h1 className="text-4xl">Bengal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia atque
            autem quisquam nisi tenetur. Quidem odio sit nesciunt iusto
            deleniti?
          </p>
          <p className="my-4">
            <span className="font-bold">Temperament:</span> Alert, Agile,
            Energetic, Demanding
          </p>
          <p className="my-4">
            <span className="font-bold">Origin:</span> United States
          </p>
          <p className="my-4">
            <span className="font-bold">Life Span:</span> 12 - 15 years
          </p>
          <div className="flex items-center my-4">
            <span className="font-bold w-1/4">Adaptability:</span>
            <div className="flex ml-6 w-3/4">
              <div className="w-12 h-3 bg-black rounded-lg"></div>
              <div className="w-12 h-3 bg-black rounded-lg ml-1"></div>
              <div className="w-12 h-3 bg-black rounded-lg ml-1"></div>
              <div className="w-12 h-3 bg-black rounded-lg ml-1"></div>
              <div className="w-12 h-3 bg-black rounded-lg ml-1"></div>
            </div>
          </div>
          <div className="flex items-center my-4">
            <span className="font-bold w-1/4">Affection level:</span>
            <div className="flex ml-6 w-3/4">
              <div className="w-12 h-3 bg-black rounded-lg"></div>
              <div className="w-12 h-3 bg-black rounded-lg ml-1"></div>
              <div className="w-12 h-3 bg-black rounded-lg ml-1"></div>
              <div className="w-12 h-3 bg-black rounded-lg ml-1"></div>
              <div className="w-12 h-3 bg-gray-400 rounded-lg ml-1"></div>
            </div>
          </div>
          <div className="flex items-center my-4">
            <span className="font-bold w-1/4">Child friendly:</span>
            <div className="flex ml-6 w-3/4">
              <div className="w-12 h-3 bg-black rounded-lg"></div>
              <div className="w-12 h-3 bg-black rounded-lg ml-1"></div>
              <div className="w-12 h-3 bg-black rounded-lg ml-1"></div>
              <div className="w-12 h-3 bg-black rounded-lg ml-1"></div>
              <div className="w-12 h-3 bg-gray-400 rounded-lg ml-1"></div>
            </div>
          </div>
          <div className="flex items-center my-4">
            <span className="font-bold w-1/4">Grooming:</span>
            <div className="flex ml-6 w-3/4">
              <div className="w-12 h-3 bg-black rounded-lg"></div>
              <div className="w-12 h-3 bg-black rounded-lg ml-1"></div>
              <div className="w-12 h-3 bg-black rounded-lg ml-1"></div>
              <div className="w-12 h-3 bg-black rounded-lg ml-1"></div>
              <div className="w-12 h-3 bg-gray-400 rounded-lg ml-1"></div>
            </div>
          </div>
          <div className="flex items-center my-4">
            <span className="font-bold w-1/4">Intelligence:</span>
            <div className="flex ml-6 w-3/4">
              <div className="w-12 h-3 bg-black rounded-lg"></div>
              <div className="w-12 h-3 bg-black rounded-lg ml-1"></div>
              <div className="w-12 h-3 bg-black rounded-lg ml-1"></div>
              <div className="w-12 h-3 bg-black rounded-lg ml-1"></div>
              <div className="w-12 h-3 bg-gray-400 rounded-lg ml-1"></div>
            </div>
          </div>
          <div className="flex items-center my-4">
            <span className="font-bold w-1/4">Health issues:</span>
            <div className="flex ml-6 w-3/4">
              <div className="w-12 h-3 bg-black rounded-lg"></div>
              <div className="w-12 h-3 bg-black rounded-lg ml-1"></div>
              <div className="w-12 h-3 bg-black rounded-lg ml-1"></div>
              <div className="w-12 h-3 bg-black rounded-lg ml-1"></div>
              <div className="w-12 h-3 bg-gray-400 rounded-lg ml-1"></div>
            </div>
          </div>
          <div className="flex items-center my-4">
            <span className="font-bold w-1/4">Social needs:</span>
            <div className="flex ml-6 w-3/4">
              <div className="w-12 h-3 bg-black rounded-lg"></div>
              <div className="w-12 h-3 bg-black rounded-lg ml-1"></div>
              <div className="w-12 h-3 bg-black rounded-lg ml-1"></div>
              <div className="w-12 h-3 bg-black rounded-lg ml-1"></div>
              <div className="w-12 h-3 bg-gray-400 rounded-lg ml-1"></div>
            </div>
          </div>
          <div className="flex items-center my-4">
            <span className="font-bold w-1/4">Stranger friendly:</span>
            <div className="flex ml-6 w-3/4">
              <div className="w-12 h-3 bg-black rounded-lg"></div>
              <div className="w-12 h-3 bg-black rounded-lg ml-1"></div>
              <div className="w-12 h-3 bg-black rounded-lg ml-1"></div>
              <div className="w-12 h-3 bg-black rounded-lg ml-1"></div>
              <div className="w-12 h-3 bg-gray-400 rounded-lg ml-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl">Other photos</h1>
        <div
          style={{ gridTemplateRows: "1fr min-content" }}
          className="grid gap-4 sm:grid-cols-4 grid-cols-2 sm:my-8 my-4"
        >
          <img
            style={{ minHeight: "278px" }}
            className="rounded-2xl mb-2"
            src={HeroImagelg}
            alt=""
          />
          <img
            style={{ minHeight: "278px" }}
            className="rounded-2xl mb-2"
            src={HeroImagelg}
            alt=""
          />
          <img
            style={{ minHeight: "278px" }}
            className="rounded-2xl mb-2"
            src={HeroImagelg}
            alt=""
          />
          <img
            style={{ minHeight: "278px" }}
            className="rounded-2xl mb-2"
            src={HeroImagelg}
            alt=""
          />
          <img
            style={{ minHeight: "278px" }}
            className="rounded-2xl mb-2"
            src={HeroImagelg}
            alt=""
          />
          <img
            style={{ minHeight: "278px" }}
            className="rounded-2xl mb-2"
            src={HeroImagelg}
            alt=""
          />
          <img
            style={{ minHeight: "278px" }}
            className="rounded-2xl mb-2"
            src={HeroImagelg}
            alt=""
          />
          <img
            style={{ minHeight: "278px" }}
            className="rounded-2xl mb-2"
            src={HeroImagelg}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Details;

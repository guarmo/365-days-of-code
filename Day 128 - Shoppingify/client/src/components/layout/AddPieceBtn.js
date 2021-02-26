import React, { useState } from "react";
import { connect } from "react-redux";
import {
  removeItemFromShoppingList,
  addPiece,
  subtractPiece,
} from "../../actions/shoppingList";

const AddPieceBtn = ({
  pieces,
  item,
  removeItemFromShoppingList,
  addPiece,
  subtractPiece,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex items-center hover:bg-white pr-1 rounded-lg">
      <div className="bg-cYellow-main mr-2 p-1 rounded-lg">
        <button
          onClick={() => removeItemFromShoppingList(item)}
          className="material-icons text-sm text-white outline-none"
        >
          delete_outline
        </button>
      </div>
      <button
        onClick={() => subtractPiece(item)}
        className="text-cYellow-main outline-none"
      >
        -
      </button>
      <div className="border-2 mx-2 border-cYellow-main text-cYellow-main rounded-lg text-xs px-2">
        {pieces}
      </div>
      <button
        onClick={() => addPiece(item)}
        className="text-cYellow-main outline-none"
      >
        +
      </button>
    </div>
  );
};

{
  /* Plain single element */
}
{
  /* <div className="flex justify-between items-center my-4">
                <h1>Salmon 1kg</h1>
                {!hovered ? (
                  <h1>Eleement</h1>
                  <div
                    onMouseEnter={() => setHovered(true)}
                    className="border-2 mx-2 border-cYellow-main text-cYellow-main rounded-lg text-xs px-2"
                  >
                    3 pcs
                  </div>
                ) : (
                  <h1>Element</h1>
                  <div
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className="flex items-center bg-white pr-1 rounded-lg"
                  >
                    <div className="bg-cYellow-main mr-2 p-1 rounded-lg">
                      <button className="material-icons text-sm text-white">
                        delete_outline
                      </button>
                    </div>
                    <button className="text-cYellow-main">-</button>
                    <div className="border-2 mx-2 border-cYellow-main text-cYellow-main rounded-lg text-xs px-2">
                      3 pcs
                    </div>
                    <button className="text-cYellow-main">+</button>
                  </div>
                )}
              </div> */
}

export default connect(null, {
  removeItemFromShoppingList,
  addPiece,
  subtractPiece,
})(AddPieceBtn);

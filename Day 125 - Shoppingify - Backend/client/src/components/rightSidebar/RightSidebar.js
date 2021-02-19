import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Default from "./Default";
import Desc from "./Desc";
import Form from "./Form";
import {
  setDefaultMode,
  setAddItemMode,
  setDescMode,
} from "../../actions/modes";

const RightSidebar = ({
  setDefaultMode,
  setAddItemMode,
  setDescMode,
  modes: { defaultMode, addItemMode, descMode, editMode },
}) => {
  return (
    <div
      style={{ width: "30%" }}
      className="flex flex-col justify-between relative"
    >
      {defaultMode && (
        <Default
          setAddItemMode={setAddItemMode}
          setDefaultMode={setDefaultMode}
          editMode={editMode}
        />
      )}
      {addItemMode && (
        <Form
          setDescMode={setDescMode}
          setDefaultMode={setDefaultMode}
          setAddItemMode={setAddItemMode}
        />
      )}
      {descMode && (
        <Desc setDescMode={setDescMode} setDefaultMode={setDefaultMode} />
      )}
    </div>
  );
};

RightSidebar.propTypes = {
  setDefaultMode: PropTypes.func.isRequired,
  setDescMode: PropTypes.func.isRequired,
  setAddItemMode: PropTypes.func.isRequired,
  modes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  modes: state.modes,
});

export default connect(mapStateToProps, {
  setDefaultMode,
  setDescMode,
  setAddItemMode,
})(RightSidebar);

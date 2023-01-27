//@ts-nocheck
import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

import { withStyles, makeStyles } from "@material-ui/core/styles";

import html2canvas from "html2canvas";

export default class VendorAdvanceContractAdd extends Component {
  constructor(props) {
    super();
    this.state = {
      pointsData: [
        {
          teamName: "",
          kills: "",
          placePoints: "",
          total: ""
        }
      ],
      teamName: "",
      kills: "",
      placePoints: "",
      total: "",
      dataAdd: false
    };
  }
  textHandler = (e, indx) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  addRowHandler = (e, indx) => {
    let data = {
      teamName: this.state.teamName,
      kills: this.state.kills,
      placePoints: this.state.placePoints,
      total: this.state.total
    };
    this.setState({
      pointsData: [data, ...this.state.pointsData]
    });
    this.setState({
      dataAdd: true,
      teamName: "",
      kills: "",
      placePoints: "",
      total: ""
    });
  };

  handleDownloadImage = async () => {
    const element = document.getElementById("print"),
      canvas = await html2canvas(element),
      data = canvas.toDataURL("image/jpg"),
      link = document.createElement("a");

    link.href = data;
    link.download = "downloaded-image.jpg";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  render() {
    return (
      <div>
        <div style={{ color: "black" }}>
          <div
            style={{
              margin: 10,
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
            className="col-lg-6 pr-0"
          >
            <div style={{ padding: 5 }}>Team Name :</div>
            <div style={{ color: "#fff" }}>
              <TextField
                name="teamName"
                margin="dense"
                variant="outlined"
                placeholder="Team Name"
                value={this.state.teamName}
                error={this.state.teamNameError}
                onChange={this.textHandler}
                inputProps={{
                  style: { textTransform: "uppercase" }
                }}
              />
            </div>
          </div>
          <div
            style={{
              margin: 10,
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
            className="col-lg-6 pr-0"
          >
            <div style={{ padding: 5 }}>kills :</div>
            <div>
              <TextField
                name="kills"
                margin="dense"
                variant="outlined"
                placeholder="kills"
                type="number"
                value={this.state.kills}
                error={this.state.killError}
                onChange={this.textHandler}
                inputProps={{ style: { textTransform: "uppercase" } }}
              />
            </div>
          </div>
          <div
            style={{
              margin: 10,
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
            className="col-lg-6 pr-0"
          >
            <div style={{ padding: 5 }}>Place Points :</div>
            <div>
              <TextField
                name="placePoints"
                margin="dense"
                variant="outlined"
                placeholder="Place Points"
                type="number"
                value={this.state.placePoints}
                error={this.state.placePointError}
                onChange={this.textHandler}
                //
                inputProps={{ style: { textTransform: "uppercase" } }}
              />
            </div>
          </div>
          <div
            style={{
              margin: 10,
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
            className="col-lg-6 pr-0"
          >
            <div style={{ padding: 5 }}>Total :</div>

            <div>
              {" "}
              <TextField
                name="total"
                margin="dense"
                variant="outlined"
                placeholder="total"
                type="number"
                value={
                  parseInt(this.state.placePoints) + parseInt(this.state.kills)
                }
                error={this.state.totalError}
                onChange={this.textHandler}
                inputProps={{ style: { textTransform: "uppercase" } }}
              />
            </div>
          </div>
        </div>

        {this.state.teamName !== "" &&
          this.state.kills !== "" &&
          this.state.placePoints !== "" && (
            <button
              style={{ margin: 10 }}
              type="button"
              className="drawer_text drawer_btn_success"
              name="Back"
              onClick={(indx) => this.addRowHandler(indx)}
            >
              Add
            </button>
          )}
        <div style={{ margin: 10 }}>
          <div id="print">
            <div style={{ display: "flex", flexDirection: "row", margin: 5 }}>
              <div style={{ margin: 10 }}>teamName</div>
              <div style={{ margin: 10 }}>kills</div>
              <div style={{ margin: 10 }}>placePoints</div>
              <div style={{ margin: 10 }}>total</div>
              <div style={{ margin: 10 }}>action</div>
            </div>
            <div>
              {this.state.pointsData.length > 1 &&
                this.state.pointsData.map((e, ind) => (
                  <div key={ind}>
                    <div>{e.teamName && <p>{e.teamName}</p>}</div>
                    <div> {e.kills && <p>{e.kills}</p>}</div>
                    <div>{e.placePoints && <p>{e.placePoints}</p>}</div>
                    <div>
                      {e.kills && (
                        <p>{parseInt(e.kills) + parseInt(e.placePoints)}</p>
                      )}
                    </div>
                    {this.state.pointsData?.length > 1 && (
                      <div>
                        <button
                          onClick={() => {
                            const rows = this.state.pointsData;
                            rows.splice(ind, 1);
                            this.setState({
                              pointsData: rows
                            });
                          }}
                        >
                          <img
                            style={{ height: 10, width: 10, color: "red" }}
                            src="https://spng.subpng.com/20180402/hwq/kisspng-computer-icons-multiplication-sign-symbol-clip-art-cancel-button-5ac2405c510158.6253216215226799003318.jpg"
                          />
                        </button>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
          <button onClick={this.handleDownloadImage}>download</button>
        </div>
      </div>
    );
  }
}

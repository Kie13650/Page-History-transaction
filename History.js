import React, { useState } from "react";
import "./index.css";
import UserScreen from "./UserScreen";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import swal from "sweetalert";
import TextField from "@material-ui/core/TextField";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      maxLength={10}
      style={{ width: "100%" }}
      allowNegative={false}
      {...other}
    />
  );
}

// const handleChange = (event) => {
//     setValues({
//       ...values,
//       [event.target.name]: event.target.value,
//     });
//   };

// const [values, setValues] = React.useState({
//     textmask: "(1  )    -    ",
// });

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function History(props) {
  const [state, setstate] = useState(true);
  const [val, setval] = useState("");
  const [sum, setsum] = useState(0);

  const handleChange = (e) => {
    setval(e.target.value);
    if (e.target.value.length !== 0) {
      setstate(false);
    } else {
      setstate(true);
    }
  };

  const handleCloseS = () => {
    setstate(true);

    swal({
      title: "บันทึกข้อมูลเสร็จสิ้น",
      text: " ",
      text: " ",
      className: "font",
      icon: "success",
      timer: 2200,
      buttons: false,
    });

    setval("");
  };



  const handleCloseY = () => {


    swal({
      title: "คุณแน่ใจหรือไม่?",
      text: "คุณต้องการลบข้อมูลหรือไม่",
      className: "font",
      icon: "warning",
      buttons: {
        cancel: "ยกเลิก",
        confirm: {
          text: "ตกลง",
        },
      },
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal({
          title: "ลบข้อมูลเสร็จสิ้น",
          text: " ",
          text: " ",
          className: "font",
          icon: "success",
          timer: 2200,
          buttons: false,
        });
      }
    });
  };

  // const SumNo = () =>{
  //   setsum+1;
  // }

  const Sum = () => {
    setsum(sum + 1);
  };

  function SwitchCase(props) {
    switch (props.value) {
      case "01":
        return "ม.ค.";
      case "02":
        return "ก.พ.";
      case "03":
        return "มี.ค.";
      case "04":
        return "เม.ย.";
      case "05":
        return "พ.ค.";
      case "06":
        return "มิ.ย.";
      case "07":
        return "ก.ค.";
      case "08":
        return "ส.ค.";
      case "09":
        return "ก.ย.";
      case "10":
        return "ต.ค.";
      case "11":
        return "พ.ย.";

      default:
        return "ธ.ค";
    }
  }

  const His = [
    {
      id: "A3",
      inputID: "1",
      keyID: "1",
      value: "1",
      jodDate: "2020-01-7",
      updatDate: "2020-01-25",
      updatBy: "1",
    },
    {
      id: "A4",
      inputID: "2",
      keyID: "1",
      value:
        "ผลการประเมินความผลการประเมินความผลการประเมินความผลการประเมินความผลการประเมินความ",
      jodDate: "2020-03-24",
      updatDate: "2020-03-25",
      updatBy: "2",
    },
    {
      id: "A4",
      inputID: "3",
      keyID: "2",
      value: "ผลการประเมินความ",
      jodDate: "2020-04-21",
      updatDate: "2020-04-25",
      updatBy: "3",
    },
    {
      id: "A5",
      inputID: "4",
      keyID: "1",
      value: "1",
      jodDate: "2020-05-10",
      updatDate: "2020-05-25",
      updatBy: "4",
    },
    {
      id: "A6",
      inputID: "5",
      keyID: "1",
      value: "5",
      jodDate: "2020-06-2",
      updatDate: "2020-06-25",
      updatBy: "5",
    },
    {
      id: "A4",
      inputID: "2",
      keyID: "1",
      value: "2",
      jodDate: "2020-03-24",
      updatDate: "2020-03-25",
      updatBy: "2",
    },
    {
      id: "A4",
      inputID: "3",
      keyID: "2",
      value: "ผลการประเมินความ",
      jodDate: "2020-04-21",
      updatDate: "2020-04-25",
      updatBy: "3",
    },
    {
      id: "A5",
      inputID: "4",
      keyID: "1",
      value: "1",
      jodDate: "2020-05-10",
      updatDate: "2020-05-25",
      updatBy: "4",
    },
    {
      id: "A6",
      inputID: "5",
      keyID: "1",
      value: "5",
      jodDate: "2020-06-2",
      updatDate: "2020-06-25",
      updatBy: "5",
    },
  ];

  // const splitDate = (date) => {
  //   // setJob(date.split("-")[0]);
  //   // console.log(date.split("-")[0]);
  // };

  return (
    <div className="background">
      <UserScreen />

      <div class="container-fluid">
        <div class="row my-row">
          <div class="col-md-2  my-col2-2">
            <div className="B-back">
              <div className="iconBack">
                <ion-icon
                  style={{ width: 20, height: 20 }}
                  name="arrow-back-circle-outline"
                ></ion-icon>
              </div>
              <div className="back">ย้อนกลับ</div>
            </div>
          </div>

          <div class="col-md-8  col-md-8   my-col3 ">
            <div className="head-barH2">

              <div className="B-back2">
                <div className="iconBack">
                  <ion-icon
                    style={{ width: 20, height: 20 }}
                    name="arrow-back-circle-outline"
                  ></ion-icon>
                </div>
                <div className="back">ย้อนกลับ</div>
              </div>

              <div className="B-back-H">
                <div className="iconBack">
                  <ion-icon
                    style={{ width: 40, height: 40 }}
                    name="arrow-back-circle-outline"
                  ></ion-icon>
                </div>
                <div className="back">ย้อนกลับ</div>
              </div>

              <div className="head-barH0">
                <div className="head-barH">
                  <div className="barH"> </div>
                  <div className="fontH1">ประวัติการกรอกข้อมูลของคุณ</div>
                </div>
                <div className="head-barH1">
                  <div className="Eyear">ปีการศึกษา</div>
                  <div className="year">2555</div>
                </div>
              </div>

              <div className="B-back-H3">
                <div className="iconBack">
                  <ion-icon
                    style={{ width: 0, height: 0 }}
                    name="arrow-back-circle-outline"
                  ></ion-icon>
                </div>
              </div>

            </div>
          </div>

          <div class="col-2  my-col2-1"></div>
        </div>

        <div class="row my-row ">
          <div class="col-2  my-col2-1"></div>

          <div class="col-md-8   my-col2">
            <label className="HP-name">ชื่อกระบวนการ</label>
            <div className="P-name">
              การให้บริการไฟฟ้าการให้บริการไฟฟ้าการให้บริการไฟฟ้าการให้บริการไฟฟ้า
            </div>
          </div>

          <div class="col-2  my-col2-1"></div>
        </div>

        <div class="row my-row ">
          <div class="col-2  my-col2-1"></div>
          <div class="col-md-8 my-col2">
            <label className="HP-nameP">ชื่อตัวชี้วัด</label>
            <div className="P-name">
              จำนวนครั้งที่ไฟฟ้าขัดข้อง / ดับทั้งวิทยาเขต รวมทั้งปี (ครั้ง)
            </div>
          </div>

          <div class="col-2  my-col2-1"></div>
        </div>

        <div class="row my-row ">
          <div class="col-2  my-col2-1"></div>
          <div class="col-md-8  my-col2">
            <div className="Line"> </div>
          </div>
          <div class="col-2  my-col2-1"></div>
        </div>

        <div class="row  my-row ">
          <div class="col-2  my-col2-T"></div>
          <div className="col-md-8  my-col  col-Table">
            <div></div>
            <Table className="table table-hover">
              <Thead>
                <Tr>
                  <Th className="No">No</Th>
                  <Th className="Data">ข้อมูลที่กรอก</Th>
                  <Th className="AddData">วันที่กรอก</Th>
                  <Th className="EditData">วันที่แก้ไข</Th>
                  <Th className="Edit">
                    <div className="M-icon">
                      <div className="iconBack">
                        <ion-icon
                          style={{ width: 20, height: 20 }}
                          name="create-outline"
                        ></ion-icon>
                      </div>
                      <div className="T-Edit">แก้ไข</div>
                    </div>
                  </Th>
                  <Th className="Delete">
                    <div className="M-icon">
                      <div className="iconBack">
                        <ion-icon
                          style={{ width: 20, height: 20 }}
                          name="trash-outline"
                        ></ion-icon>
                      </div>
                      <div className="T-Edit" >ลบ</div>
                    </div>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {His &&
                  His.map((His, index) => (
                    <Tr>
                      <Th>{index + 1}</Th>
                      {/* <Td className="No">{His.inputID}</Td> */}
                      <Td className="DataV">{His.value}</Td>
                      <Td className="AddData">
                        {`${His.jodDate.split("-")[2]}`}-
                        <SwitchCase value={His.jodDate.split("-")[1]} />-
                        {`${His.jodDate.split("-")[0] * 1 + 543}`}
                      </Td>

                      <Td className="EditData">
                        {`${His.updatDate.split("-")[2]}`}-
                        <SwitchCase value={His.updatDate.split("-")[1]} />-
                        {`${His.updatDate.split("-")[0] * 1 + 543}`}
                      </Td>
                      <Td className="Edit">
                        {His.keyID == 1 && (
                          <div
                            type="button"
                            className=" button button1 "
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                          >
                            แก้ไข
                          </div>
                        )}
                        {His.keyID == 2 && (
                          <div
                            type="button"
                            className=" button button1 "
                            data-toggle="modal"
                            data-target="#exampleModalCenterS"
                          >
                            แก้ไข
                          </div>
                        )}
                      </Td>
                      <Td className="Delete">
                        <div className="button cancle" onClick={handleCloseY}>
                          ลบ
                        </div>
                      </Td>
                    </Tr>
                    // setsum({sum+1});
                  ))}
              </Tbody>
            </Table>
            <p className="Sum">ทั้งหมด {His.length} คำตอบ</p>
          </div>
          <div class="col-2  my-col2-T"></div>
        </div>

        <form>
          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-h">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    กรุณากรอกข้อมูลที่ต้องการแก้ไข
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <label className="font">
                    1) จำนวนครั้งที่ไฟฟ้าขัดข้องดับทั้งวิทยาเขต รวมทั้งปี
                    (ครั้ง)
                  </label>

                  <div className="newAnswer">
                    <TextField
                      max="5"
                      // value={values.numberformat}
                      style={({ width: "10px" }, { border: "none" })}
                      onChange={handleChange}
                      id="formatted-numberformat-input"
                      InputProps={{
                        inputComponent: NumberFormatCustom,
                      }}
                    />
                  </div>

                  {/* <input
                    type="text"
                    className="form-control form-control-md"
                    onChange={handleChange}
                    value={val}
                  /> */}
                  <label className="font-T">
                    * หมายเหตุ : กรุณาตรวจสอบข้อมูลก่อนบันทึก
                  </label>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    className="buttonCancle font"
                    data-dismiss="modal"
                  >
                    ยกเลิก
                  </button>
                  <button
                    disabled={state}
                    type="button"
                    className="buttonSave font "
                    onClick={handleCloseS}
                    data-dismiss="modal"
                  >
                    บันทึก
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

        <form>
          <div
            class="modal fade"
            id="exampleModalCenterS"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-h">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    กรุณากรอกข้อมูลที่ต้องการแก้ไข String
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <label className="font">
                    1) จำนวนครั้งที่ไฟฟ้าขัดข้องดับทั้งวิทยาเขต รวมทั้งปี
                    (ครั้ง)
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-md"
                    onChange={handleChange}
                    value={val}
                  />
                  <label className="font-T">
                    * หมายเหตุ : กรุณาตรวจสอบข้อมูลก่อนบันทึก
                  </label>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    className="buttonCancle font"
                    data-dismiss="modal"
                  >
                    ยกเลิก
                  </button>
                  <button
                    disabled={state}
                    type="button"
                    className="buttonSave font "
                    onClick={handleCloseS}
                    data-dismiss="modal"
                  >
                    บันทึก
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

      <div class="row my-rowEnd">
        <div class="col-2  my-col2"></div>

        <div class="col-8  my-col2">
          
        </div>
        <div class="col-2  my-col2"></div>
      </div>
    </div>

      </div>


  );
}

export default History;

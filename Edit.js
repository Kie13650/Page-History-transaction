import React,{useState} from 'react'
import {Button,Modal,} from 'react-bootstrap'
//  import {Label} from 'react-bootstrap'
import './index.css'


function Edit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 return (
    <div className="Modal">
      
      <div className="">
        <div className="fontH">
          <h4 >กรุณากรอกข้อมูลที่ต้องการแก้ไข</h4>
        </div>
        
          <p className="font">1) จำนวนครั้งที่ไฟฟ้าขัดข้องดับทั้งวิทยาเขต รวมทั้งปี (ครั้ง) </p>  
          <input  type="text" class="iinput" id="usr" ></input>
          <p className="font">* หมายเหตุ : กรุณาตรวจสอบข้อมูลก่อนบันทึก</p> 
          <div className="buttonS">
            
          <Button className=" btn btn-secondary btn-md "  >Cancel</Button>
          
          <Button className="btn btn-primary btn-md button1 " href='javascript:if(confirm("really?"))self.close( )'>Save</Button>


          <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} 
      // size="lg"
      // aria-labelledby="contained-modal-title-vcenter"
      centered >
        <Modal.Header closeButton>
          <Modal.Title>
            <h4 className="font">กรุณากรอกข้อมูลที่ต้องการแก้ไข</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="modal-Body">
        <h>1) จำนวนครั้งที่ไฟฟ้าขัดข้องดับทั้งวิทยาเขต รวมทั้งปี (ครั้ง) </h>
        <h><input  type="text" className="iinput" id="usr" ></input></h>
        <h className="">* หมายเหตุ : กรุณาตรวจสอบข้อมูลก่อนบันทึก</h>     
        </div>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


          </div>
      </div>

     </div>
    
  );
 
}

export default Edit;
// export default AddData;
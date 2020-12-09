import React from "react";
import Face1 from "../assets/icons/face1.svg";
import Face2 from "../assets/icons/face2.svg";
import Face3 from "../assets/icons/face3.svg";
import Face4 from "../assets/icons/face4.svg";
import Face5 from "../assets/icons/face5.svg";
import Face6 from "../assets/icons/face6.svg";
import Face7 from "../assets/icons/face7.svg";
import Face8 from "../assets/icons/face8.svg";
import Face9 from "../assets/icons/face9.svg";
import Face10 from "../assets/icons/face10.svg";
import Edit from "../assets/icons/edit.svg";
import Delete from "../assets/icons/delete.svg";

const appointmentTable = (props) => {
  return (
    <table>
      <thead>
        <tr className="table_heading">
          <th>Name</th>
          <th>Email</th>
          <th>Date</th>
          <th>Visit Time</th>
          <th>Doctors</th>
          <th>Conditions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            <div className="named_column">
              {" "}
              <img src={Face3} className="face_icon1" alt="Icon" />{" "}
              <h5>Leslie Alexander</h5>
            </div>
          </th>
          <td>leslie.alexander@example.com</td>
          <td>10/10/2020</td>
          <td>09:25-09:45am</td>
          <td>Dr. Jacob Jones</td>
          <td>Mumps Stage II</td>
          <img src={Edit} className="edit_icon" alt="Icon"/>
          <img src={Delete} className="delete_icon" alt="icon"/>
        </tr>
        <tr>
          <th scope="row">
            <div className="named_column">
              {" "}
              <img src={Face1} className="face_icon1" alt="Icon" />
              <h5>Ronald Richards</h5>
            </div>
          </th>
          <td>ronald.richards@example.com</td>
          <td>10/12/2020</td>
          <td>12:00-12:45pm</td>
          <td>Dr. Theresa Webb</td>
          <td>Depression</td>
          <img src={Edit} className="edit_icon" alt="Icon"/>
          <img src={Delete} className="delete_icon" alt="icon"/>
        </tr>
        <tr>
          <th scope="row">
            <div className="named_column">
              {" "}
              <img src={Face2} className="face_icon1" alt="Icon" />
              <h5>Jane Cooper</h5>
            </div>
          </th>
          <td>jane.cooper@example.com</td>
          <td>10/13/2020</td>
          <td>01:15-01:45pm</td>
          <td>Dr. Jacob Jones</td>
          <td>Athritis</td>
          <img src={Edit} className="edit_icon" alt="Icon"/>
          <img src={Delete} className="delete_icon" alt="icon"/>
        </tr>
        <tr>
          <th scope="row">
            <div className="named_column">
              {" "}
              <img src={Face4} className="face_icon1" alt="Icon" />
              <h5>Robert Fox</h5>
            </div>
          </th>
          <td>robert.fox@example.com</td>
          <td>10/14/2020</td>
          <td>02:00-02:45pm</td>
          <td>Dr. Arlene McCoy</td>
          <td>Fracture</td>
          <img src={Edit} className="edit_icon" alt="Icon"/>
          <img src={Delete} className="delete_icon" alt="icon"/>
        </tr>
        <tr>
          <th scope="row">
            <div className="named_column">
              {" "}
              <img src={Face5} className="face_icon1" alt="Icon" />
              <h5>Jenny Wilson</h5>
            </div>
          </th>
          <td>jenny.wilson@example.com</td>
          <td>10/15/2020</td>
          <td>12:00-12:45pm</td>
          <td>Dr. Esther Howard</td>
          <td>Depression</td>
          <img src={Edit} className="edit_icon" alt="Icon"/>
          <img src={Delete} className="delete_icon" alt="icon"/>
        </tr>
        <tr>
          <th scope="row">
            <div className="named_column">
              {" "}
              <img src={Face6} className="face_icon1" alt="Icon" />
              <h5>Marshall Cook</h5>
            </div>
          </th>
          <td>marshall.cook@example.com</td>
          <td>10/17/2020</td>
          <td>01:15-01:45pm</td>
          <td>Dr. Jacob Jones</td>
          <td>Dyslexia</td>
          <img src={Edit} className="edit_icon" alt="Icon"/>
          <img src={Delete} className="delete_icon" alt="icon"/>
        </tr>
        <tr>
          <th scope="row">
            <div className="named_column">
              {" "}
              <img src={Face7} className="face_icon1" alt="Icon" />
              <h5>Stephanie Cook</h5>
            </div>
          </th>
          <td>stephanie.cook@example.com</td>
          <td>10/17/2020</td>
          <td>02:00-02:45pm</td>
          <td>Dr. Theresa Webb</td>
          <td>Hypothermia</td>
          <img src={Edit} className="edit_icon" alt="Icon"/>
          <img src={Delete} className="delete_icon" alt="icon"/>
        </tr>
        <tr>
          <th scope="row">
            <div className="named_column">
              {" "}
              <img src={Face8} className="face_icon1" alt="Icon" />
              <h5>Marion James</h5>
            </div>
          </th>
          <td>marion.james@example.com</td>
          <td>10/18/2020</td>
          <td>09:15-09:45am</td>
          <td>Dr. Esther Howard</td>
          <td>Sunburn</td>
          <img src={Edit} className="edit_icon" alt="Icon"/>
          <img src={Delete} className="delete_icon" alt="icon"/>
        </tr>
        <tr>
          <th scope="row">
            <div className="named_column">
              {" "}
              <img src={Face9} className="face_icon1" alt="Icon" />
              <h5>Teresa Holland</h5>
            </div>
          </th>
          <td>teresa.holland@example.com</td>
          <td>10/19/2020</td>
          <td>12:00-12:45pm</td>
          <td>Dr. Arlene McCoy</td>
          <td>Diarrhoea</td>
          <img src={Edit} className="edit_icon" alt="Icon"/>
          <img src={Delete} className="delete_icon" alt="icon"/>
        </tr>
        <tr>
          <th scope="row">
            <div className="named_column">
              {" "}
              <img src={Face10} className="face_icon1" alt="Icon" />
              <h5>Zachary Marshall</h5>
            </div>
          </th>
          <td>zachary.marshall@example.com</td>
          <td>10/20/2020</td>
          <td>09:15-09:45am</td>
          <td>Dr. Arlene McCoy</td>
          <td>Arthritis</td>
          <img src={Edit} className="edit_icon" alt="Icon"/>
          <img src={Delete} className="delete_icon" alt="icon"/>
        </tr>
      </tbody>
    </table>
  );
};

export default appointmentTable;

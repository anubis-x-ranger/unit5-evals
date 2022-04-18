import {useState, useEffect} from 'react';
import axios from 'axios';
import './addStudent.css'
export const AddStudent = () => {
  const [formData,setFormData]=useState({
    first_name:"",
    last_name:"",
    email:"",
    gender:"",
    age:"",
    tenth_score:"",
    twelth_score:"",
    preferred_branch:"",
    });  

    const handleChange=(e)=>{
      let {className,value}=e.target;

      setFormData({...formData,[className]:value});

    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      axios.post(`http://localhost:8080/addstudent`,formData)
      .then((res)=>{
          setFormData({
            first_name:"",
            last_name:"",
            email:"",
            gender:"",
            age:"",
            tenth_score:"",
            twelth_score:"",
            preferred_branch:"",
          });
      });
    }
  return (
    <form className="addstudent" onSubmit={(e)=>handleSubmit(e)}>
      <div>
        Firstname:{" "}
        <input
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
          onChange={(e)=>handleChange(e)}
          value={formData.first_name}
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
          onChange={(e)=>handleChange(e)}
          value={formData.last_name}
        />
      </div>
      <div>
        {" "}
        Email:
        <input
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
          onChange={(e)=>handleChange(e)}
          value={formData.email}
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            name="gender"
            className="male"
            type="radio"
            value={"male"}
            onChange={(e)=>handleChange(e)}
          />{" "}
          Female{" "}
          <input
            name="gender"
            className="female"
            type="radio"
            value={"female"}
            onChange={(e)=>handleChange(e)}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
          onChange={(e)=>handleChange(e)}
          value={formData.age}
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
          onChange={(e)=>handleChange(e)}
          value={formData.tenth_score}
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
          onChange={(e)=>handleChange(e)}
          value={formData.twelth_score}
        />{" "}
      </div>
      <div>
        <select
          value={formData.preferred_branch} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
          onChange={(e)=>handleChange(e)}
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" />
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};

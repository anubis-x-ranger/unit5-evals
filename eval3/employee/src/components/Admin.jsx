import styled from "styled-components";

export const Admin = () => {
  return (
    <Wrapper>
    <form className="createEmployee">
    <InputWrapper>
      <input type="text" placeholder="Employee Name" name="employee_name" />
      <input type="text" placeholder="Employee id" name="employee_id" />
      <select name="title">
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input type="number" placeholder="Salary" name="salary" />
      <input type="text" placeholder="Image" name="image" />
      <input type="text" placeholder="User Name" name="username" />
      <input type="password" placeholder="Password" name="password" />
      <input
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
      />
      <select name="status" id="status">
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select name="team" id="team">
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input className="createUser" type="submit" value={"submit"} />
      </InputWrapper>
    </form>
    </Wrapper>
  );
};

const Wrapper=styled.div`
  display: flex;
  flex-direction: column;
  width:1000px;
  height:600px;
  justify-content:center ;
  align-items: center;
`

const InputWrapper=styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
`
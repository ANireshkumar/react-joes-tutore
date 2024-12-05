import PropType from "prop-types";

export const Student = (props) => {
  return (
    <div className="Student">
      <h3>Propes and default propes</h3>
    <table>
      <tbody>
      <tr>
        <th>Name</th>
        <td>{props.name}</td></tr>
        <tr>
        <th>Age</th>
        <td>{props.age}</td></tr>
        <tr>
        <th>ismarried</th>
        <td>{props.isMarried ? "Yes" : "No!!"}</td></tr>
        </tbody></table></div>
  );
};


Student.propType={
  name:PropType.string,
  age:PropType.number,
  isMarried:PropType.bool,
};

Student.defaultProps={
  name:"Default name",
  age:0,
  isMarried:false,
}
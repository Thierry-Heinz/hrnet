import { useContext } from "react";
import { EmployeeContext, NavContext } from "../utils/context";

const EmployeeListPage = () => {
  const { isActive, toggle } = useContext(NavContext);
  const { employees } = useContext(EmployeeContext);
  return (
    <div>
      <h1>EmployeeListPage</h1>
      <button onClick={() => toggle(!isActive)}>Home</button>
      <table>
        <tbody>
          {employees.map((employee, i) => (
            <tr key={`${employee}-${i}`}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default EmployeeListPage;

import { useContext, useRef } from "react";
import { EmployeeContext } from "../../utils/context";
import { departments } from "./departments";
import { states } from "./states";

const Forms = () => {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const birthDateRef = useRef();
  const startDateRef = useRef();

  const streetRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const zipCodeRef = useRef();

  const departmentRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmployees([
      ...employees,
      {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        birthDate: birthDateRef.current.value,
        startDate: startDateRef.current.value,
        street: streetRef.current.value,
        city: cityRef.current.value,
        state: stateRef.current.value,
        zipCode: zipCodeRef.current.value,
        department: departmentRef.current.value,
      },
    ]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">
        First Name
        <input ref={firstNameRef} type="text" id="firstName" />
      </label>
      <label htmlFor="lastName">
        Last Name
        <input ref={lastNameRef} type="text" id="lastName" />
      </label>
      <label htmlFor="birthDate">
        Birth Date
        <input ref={birthDateRef} type="date" id="birthDate" />
      </label>
      <label htmlFor="startDate">
        Start Date
        <input ref={startDateRef} type="date" id="startDate" />
      </label>

      <fieldset>
        <legend>Address</legend>
        <label htmlFor="street">
          <input ref={streetRef} type="text" id="street" />
        </label>
        <label htmlFor="city">
          <input ref={cityRef} type="text" id="city" />
        </label>
        <label htmlFor="state">
          <select ref={stateRef} id="state" name="state">
            {states.map((state, i) => (
              <option key={`${state}-${i}`} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="zipCode">
          <input ref={zipCodeRef} type="number" id="zipCode" />
        </label>
      </fieldset>
      <label htmlFor="state">
        Departement
        <select ref={departmentRef} id="departement" name="departement">
          {departments.map((department, i) => (
            <option key={`${department}-${i}`} value={department.value}>
              {department.name}
            </option>
          ))}
        </select>
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
};
export default Forms;

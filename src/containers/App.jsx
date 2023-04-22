
import CreateEmployeePage from "./CreateEmployeePage"
import EmployeeListPage from "./EmployeeListPage"
import { NavContext } from "../utils/context"
import { useContext } from "react"

const App = () => {
	const {isActive} = useContext(NavContext)

  return (
	<>
	
	{isActive ? <CreateEmployeePage /> : <EmployeeListPage />}
	</>

  )
}
export default App
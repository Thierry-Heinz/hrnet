import { useContext } from "react"
import { NavContext } from "../utils/context"
import Forms from "../components/Forms/Forms"

const CreateEmployeePage = () => {
	const {isActive, toggle} = useContext(NavContext)
  return (
	<div>
		<h1>
			HRNet
			</h1>
			
		<button onClick={()=>toggle(!isActive)}>View Current Employees</button>
		<h2>Create Employee</h2>

		<Forms />

	</div>
  )
}
export default CreateEmployeePage
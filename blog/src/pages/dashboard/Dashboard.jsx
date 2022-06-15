import Navbar from "../../components/navbar/Navbar"
import SidebarDash from "../../components/dashSidebar/SidebarDash"
import "./dashboard.scss"

const Dashboard = () => {
	return (
		<div className='dashboardHome'>
			<SidebarDash />
			<div className="homeContainer">
				<div className="centerItems">
				</div>
			</div>
		</div>
	)
}

export default Dashboard

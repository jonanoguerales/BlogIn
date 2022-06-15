import { Link } from "react-router-dom";
import "./recomendations.css";


const Recomendations = ({ posts }) => {
	const postsArray = posts.map((post) => post);
	const post = postsArray[Math.floor(Math.random() * postsArray.length)];
	const PF = "http://localhost:7000/images/";

	// Shuffle array
	const elements = postsArray.sort(() => 0.5 - Math.random());
	// Get sub-array of first n elements after shuffled
	let postElement = elements.slice(0, 3);
	
	return (
		<div className="recomendations">
			<div className="recomsidebarItem">
				<span className="recomsidebarTitle">Recomendaciones</span>
				<ul className="recomsidebarList">
					{postElement.map((item) => (
						<li className="recomsidebarListItem">
							<div className="imgRecom">
								<img src={PF + item.photo} alt="" />
							</div>
							<div className="recominfo">
								<h2 className="recomTittle">
									<Link to={`/post/${item._id}`} className="link">
										{item.title}
									</Link>
								</h2>
								<div className="recomdesc">{item.desc}</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Recomendations;

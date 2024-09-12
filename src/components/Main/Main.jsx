/** @format */
import { assets } from "../../assets/assets";
import "./Main.css";

const Main = () => {
	return (
		<div className="main">
			<div className="nav">
				<p>Gemini</p>
				<img src={assets.user_icon} alt="user Image" />
			</div>
			<div className="main-container">
				<div className="greet">
					<p>
						<span>Hello, Dev</span>
					</p>
					<p>How can I help you today?</p>
				</div>
				<div className="cards">
					<div className="card">
						<p>Primero laksndknas lad la dasd </p>
						<img src={assets.compass_icon} alt="Compass icon" />
					</div>
					<div className="card">
						<p>Segundo laksndknas lad la dasd </p>
						<img src={assets.bulb_icon} alt="Compass icon" />
					</div>
					<div className="card">
						<p>Tercer laksndknas lad la dasd </p>
						<img src={assets.message_icon} alt="Compass icon" />
					</div>
					<div className="card">
						<p>Cuarto laksndknas lad la dasd </p>
						<img src={assets.code_icon} alt="Compass icon" />
					</div>
				</div>
				<div className="main-bottom">
					<div className="search-box">
						<input type="text" placeholder="Enter a prompt here" />
						<div>
							<img src={assets.gallery_icon} alt="Gallery icon" />
							<img src={assets.mic_icon} alt="Gallery icon" />
							<img src={assets.send_icon} alt="Gallery icon" />
						</div>
					</div>
					<p className="bottom-info">
						Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and
						Gemini Apps.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Main;

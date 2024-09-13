/** @format */
import { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
	const { onSent, input, setInput, showResult, recentPrompt, resultData, loading } = useContext(Context);

	return (
		<div className="main">
			<div className="nav">
				<p>Gemini</p>
				<img src={assets.user_icon} alt="user Image" />
			</div>
			<div className="main-container">
				{!showResult ? (
					<>
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
					</>
				) : (
					<div className="result">
						<div className="result-title">
							<img src={assets.user_icon} alt="User's icon" />
							<p>
								Recent Prompt: <b> {recentPrompt}</b>
							</p>
						</div>
						<div className="result-data">
							<img src={assets.gemini_icon} alt="Gemini icon" />
							{loading ? (
								<div className="loader">
									<hr />
									<hr />
									<hr />
								</div>
							) : (
								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
						</div>
					</div>
				)}

				<div className="main-bottom">
					<div className="search-box">
						<input
							type="text"
							placeholder="Your prompt..."
							onChange={(event) => setInput(event.target.value)}
							value={input}
						/>
						<div>
							<img src={assets.gallery_icon} alt="Gallery icon" />
							<img src={assets.mic_icon} alt="Mic icon" />
							{input ? <img src={assets.send_icon} alt="Send icon" onClick={() => onSent()} /> : null}
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

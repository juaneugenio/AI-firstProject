/** @format */

import { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets.js";

const Sidebar = () => {
	const [extended, setExtended] = useState(false);
	return (
		<div className="sidebar">
			<div className="top">
				<img className="menu" src={assets.menu_icon} alt="Menu icon" onClick={() => setExtended((prev) => !prev)} />
				<div className="new-chat">
					<img src={assets.plus_icon} alt="Add icon" />
					{extended ? <p>New chat</p> : null}
				</div>
				{extended ? (
					<div className="recent">
						<p className="recent-title">Recent</p>
						<div className="recent-entry">
							<img src={assets.message_icon} alt="Message icon" />
							<p>What is react...</p>
						</div>
					</div>
				) : null}
			</div>
			<div className="bottom">
				<div className="bottom-item recent-entry">
					<img src={assets.question_icon} alt="Question icon" />
					{extended ? <p>Help</p> : null}
				</div>
				<div className="bottom-item recent-entry">
					<img src={assets.history_icon} alt="Activity icon" />

					{extended ? <p>Activity</p> : null}
				</div>
				<div className="bottom-item recent-entry">
					<img src={assets.setting_icon} alt="Sttings icon" />
					{extended ? <p>Settings</p> : null}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

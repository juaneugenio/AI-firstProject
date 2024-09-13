/** @format */

import { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets.js";
import { Context } from "../../context/Context";

const Sidebar = () => {
	const [extended, setExtended] = useState(true);
	const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

	const loadPrompt = async (prompt) => {
		setRecentPrompt(prompt);
		await onSent(prompt);
	};

	return (
		<div className="sidebar">
			<div className="top">
				<img className="menu" src={assets.menu_icon} alt="Menu icon" onClick={() => setExtended((prev) => !prev)} />
				<div className="new-chat" onClick={() => newChat()}>
					<img src={assets.plus_icon} alt="Add icon" />
					{extended ? <p>New chat</p> : null}
				</div>
				{extended ? (
					<div className="recent">
						<p className="recent-title">
							<b>Recent queries:</b>
						</p>
						{prevPrompts.map((item, index) => {
							return (
								<div className="recent-entry" key={index} onClick={() => loadPrompt(item)}>
									<img src={assets.message_icon} alt="Message icon" />
									<p>{item.slice(0, 18)}...</p>
								</div>
							);
						})}
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

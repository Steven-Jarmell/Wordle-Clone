import { useEffect, useState } from "react";
import Switch from "react-switch";

type Props = {
	showSettings: boolean;
	setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
	handleDarkMode: (isDark: boolean) => void;
	handleHighContrastMode: (isHighContrastMode: boolean) => void;
};

const Settings = ({ showSettings, setShowSettings, handleDarkMode, handleHighContrastMode }: Props) => {
	let [hardState, setHardState] = useState<boolean>(false);
	let [darkState, setDarkState] = useState<boolean>(false);
	let [highContrastState, setHighContrastState] = useState<boolean>(false);

	useEffect(() => {
		handleDarkMode(darkState);
		handleHighContrastMode(highContrastState);
	}, [darkState, setDarkState, highContrastState, setHighContrastState, handleDarkMode, handleHighContrastMode]);

	return (
		<div className={`settings-modal-container show-settings-${showSettings}`}>
			<div className="settings-modal">
				<div className="settings-header">
					<p className="settings-header-title">
						<b>SETTINGS</b>
					</p>
					<button
						onClick={() => setShowSettings(false)}
						className="settings-header-btn"
					>
						x
					</button>
				</div>
				<div className="main-settings-content">
					<div className="setting">
						<div className="hard-mode">
							<p className="setting-title">
								Hard Mode {"("}Not Implemented{")"}
							</p>
							<p className="setting-description">
								Any revealed hints must be used in subsequent guesses
							</p>
						</div>
						<div className="switch">
							<Switch
								checked={hardState}
								onChange={() => setHardState(!hardState)}
								height={22}
								width={48}
								uncheckedIcon={false}
								checkedIcon={false}
								handleDiameter={18}
								disabled={true}
							/>
						</div>
					</div>
					<div className="setting">
						<div className="dark-theme">
							<p className="setting-title">Dark Theme</p>
						</div>
						<div className="switch">
							<Switch
								checked={darkState}
								onChange={() => setDarkState(!darkState)}
								height={22}
								width={48}
								uncheckedIcon={false}
								checkedIcon={false}
								handleDiameter={18}
							/>
						</div>
					</div>
					<div className="setting">
						<div className="high-contrast=mode">
							<p className="setting-title">High Contrast Mode</p>
							<p className="setting-description">For improved color vision</p>
						</div>
						<div className="switch">
							<Switch
								checked={highContrastState}
								onChange={() => setHighContrastState(!highContrastState)}
								height={22}
								width={48}
								uncheckedIcon={false}
								checkedIcon={false}
								handleDiameter={18}
							/>
						</div>
					</div>
					<div className="setting">
						<div className="feedback">
							<p className="setting-title">Feedback</p>
						</div>
						<a
							href="mailto: jarmellsteve@yahoo.com"
							target="_blank"
							rel="noreferrer"
							className="email-link"
						>
							Email
						</a>
					</div>
					<div className="shameless-plug">Steven Jarmell 2022</div>
				</div>
			</div>
		</div>
	);
};

export default Settings;

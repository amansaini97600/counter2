import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function SoundSetting() {
    const [showSettings, setShowSettings] = useState(false);
    const [soundOn, setSoundOn] = useState(true);

    const toggleSettings = () => {
        setShowSettings(prev => !prev);
    };

    return (
        <div style={{ position: "relative" }}>
            <button className="setting-btn" onClick={toggleSettings}>
                <FontAwesomeIcon icon={faGear} size="lg" />
            </button>

            {showSettings && (
                <div className="settings-panel">
                    <h4>Settings</h4>
                    <label className="sound-toggle">
                        <input
                            type="checkbox"
                            checked={soundOn}
                            onChange={(e) => setSoundOn(e.target.checked)}
                        />
                        Sound {soundOn ? "On 🔊" : "Off 🔇"}
                    </label>
                </div>
            )}
        </div>
    );

}

export default SoundSetting;
import PropTypes from 'prop-types';

export default function IconSwitch({icon, onSwitch}) {
    return (
        <div className='iconSwitch'>
            <button class='iconSwitch-btn' onClick={onSwitch}>
                <span className="material-icons">{icon}</span>
            </button>
        </div>
    )
}

IconSwitch.propTypes = {
    icon: PropTypes.string.isRequired,
    onSwitch: PropTypes.func.isRequired,
}
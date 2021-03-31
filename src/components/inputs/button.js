import cn from 'classnames';

const iconPaths = {
    'button-field': require('../../media/Icons/Main-Icons/Button Field.svg'),
    'checkbox': require('../../media/Icons/Main-Icons/Checkbox.svg'),
    'close-button': require('../../media/Icons/Main-Icons/Close Button.svg'),
    'compliance': require('../../media/Icons/Main-Icons/Compliance.svg'),
    'name-field': require('../../media/Icons/Main-Icons/Component 74 – 713.svg'),
    'email-field': require('../../media/Icons/Main-Icons/Email Field.svg'),
    'form': require('../../media/Icons/Main-Icons/Form.svg'),
    'phone-field': require('../../media/Icons/Main-Icons/Phone Field.svg'),
    'text': require('../../media/Icons/Main-Icons/Text new.svg'),
    'theme': require('../../media/Icons/Main-Icons/Theme.svg'),
    'exit': require('../../media/Icons/Top-Menu-Icons/Exit-icon.svg'),
    'pen': require('../../media/Icons/Top-Menu-Icons/Pen-icon.svg'),
    'redo': require('../../media/Icons/Top-Menu-Icons/Redo-icon.svg'),
    'trash': require('../../media/Icons/Top-Menu-Icons/trash-Icon.svg'),
    'undo': require('../../media/Icons/Top-Menu-Icons/Undo-icon.svg'),
    'desktop': require('../../media/Icons/Preview-Form-icons/Desktop.svg'),
    'tablet': require('../../media/Icons/Preview-Form-icons/Pad.svg'),
    'mobile': require('../../media/Icons/Preview-Form-icons/Phone.svg'),
}

const button = ({ icon, useMask, text, onClick, active, className }) => {
    let iconEl;
    if (icon) {
        if (useMask) {
            const url = encodeURIComponent(iconPaths[icon]?.default);
            iconEl = (
                <div
                    className="mask-icon"
                    style={{
                        WebkitMaskImage: `url(${url})`,
                    }}
                >
                    <img
                        style={{
                            visibility: 'hidden',
                        }}
                        src={encodeURIComponent(iconPaths[icon]?.default)}
                        alt="icon"
                    />
                </div>
            )
        } else {
            iconEl = <img src={iconPaths[icon]?.default} alt={icon} />
        }
    }

    return (
        <div
            className={cn(
                'button', {
                'with-icon': icon,
                active,
                className,
            }
            )}
            role="button"
            onClick={onClick}
        >
            {iconEl}
            <span className="button-text">{text}</span>
        </div>
    )
}

export default button;
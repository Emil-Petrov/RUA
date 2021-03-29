import cn from 'classnames';

const button = ({ icon, text, onClick }) => {
    return (
        <div
            className={cn('button', {
                [`icon-${icon}`]: icon,
            })}
            role="button"
            onClick={onClick}
        >
            {text}
        </div>
    )
}

export default button;
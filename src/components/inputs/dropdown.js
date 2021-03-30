// import cn from 'classnames';

const dropdown = ({ options, value, onChange }) => (
    <select className="dropdown" selected={value} onChange={onChange}>
        {options.map(opt => (
            <option value={opt.value}>
                {opt.text}
            </option>
        ))}
    </select>
)

export default dropdown;
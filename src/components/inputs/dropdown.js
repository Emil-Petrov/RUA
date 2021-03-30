// import cn from 'classnames';

const dropdown = ({ options, value, onChange }) => (
    <select className="dropdown" selected={value} onChange={onChange}>
        {options.map(({ text, value }) => (<option key={value} value={value}>{text}</option>))}
    </select>
)

export default dropdown;
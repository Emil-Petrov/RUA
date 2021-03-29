import cn from 'classnames';

const text = ({ value, onChange, className, ...rest }) => (
    <input type="text" value={value} onChange={onChange} className={cn('text-input', className)} {...rest} />
)

export default text;
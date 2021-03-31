import { useContext } from 'react';
import cn from 'classnames';
import previews from './previews';

import { FormContext } from '../../context';

import './styles.scss';

// HD Indexes
// 0 2 3 4 6 8 9 

// Preview image indexes
// 8 3 10 7 6 12 9 4

const ThemeSelector = () => {
    const {
        state: { theme },
        actions: { selectTheme }
    } = useContext(FormContext);

    const handleThemeSelect = (theme) => () => {
        selectTheme(theme)
    }

    return (
        <div className="theme-picker">
            {previews.map((item, id) => {
                const { steps, preview } = item;

                // Hey you! Who is reading this. 
                // I know indexes are bad but this is currently a static list and I'm going to assume the indexes are ids!

                return (
                    <div
                        key={id}
                        className={cn('theme-thumb', { selected: theme === item })}
                        onClick={handleThemeSelect(item)}
                    >
                        <img src={preview} alt="theme-preview" />
                        <div className="form-step-count">
                            This form has <span className="counter">{steps} steps</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ThemeSelector;
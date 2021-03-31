import cn from 'classnames';
import ThemeSelector from '../themeSelector';
import './styles.scss';

const formBuilder = ({ theme, activeMenu, size }) => (
    <div className="builder-wrapper">
        <div className={cn("form-preview flex middle center", size)}>
            {activeMenu === 'theme' && <ThemeSelector />}
            {theme && <img src={theme.preview} alt="Theme Preview" />}
        </div>
    </div>
)
export default formBuilder;
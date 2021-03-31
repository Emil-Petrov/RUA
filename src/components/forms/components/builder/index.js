import ThemeSelector from '../themeSelector';
import './styles.scss';

const formBuilder = ({ theme }) => (
    <div className="builder-content form-preview flex middle center">
        <ThemeSelector />
        <img src={theme.preview} />
    </div>
)
export default formBuilder;
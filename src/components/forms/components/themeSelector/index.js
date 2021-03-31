import formPreview1 from '../../../../media/Forms-Previews/3ead4b932b47c63ed49588b37587bd9a.svg';
import formPreview2 from '../../../../media/Forms-Previews/49a406b43f070ca5ce59d6d235a8bf9e.svg';
import formPreview3 from '../../../../media/Forms-Previews/73b5ca8ae9e82f9b21ea1de07ccea6c9.svg';
import formPreview4 from '../../../../media/Forms-Previews/68762bb7a84db417b7163333a8f22688.svg';
import formPreview5 from '../../../../media/Forms-Previews/a706bc0e24b207bcc3295e098a576e23.svg';
import formPreview6 from '../../../../media/Forms-Previews/af4ee26b3bac515475498a1c32b88d79.svg';
import formPreview7 from '../../../../media/Forms-Previews/asset-1.svg';
import formPreview8 from '../../../../media/Forms-Previews/Component 80 – 188.svg';
import formPreview9 from '../../../../media/Forms-Previews/d-1.svg';
import formPreview10 from '../../../../media/Forms-Previews/d51faa0d0f6bd23926eb1e83efcdbe57.svg';
import formPreview11 from '../../../../media/Forms-Previews/ed-1.svg';
import formPreview12 from '../../../../media/Forms-Previews/ed31f2d04f2b2a0bac5116b0a87dea2a.svg';

import './styles.scss';

const themes = [{
    steps: 2,
    preview: formPreview1,
}, {
    steps: 2,
    preview: formPreview2,
}, {
    steps: 2,
    preview: formPreview3,
}, {
    steps: 2,
    preview: formPreview4,
}, {
    steps: 2,
    preview: formPreview5,
}, {
    steps: 2,
    preview: formPreview6,
}, {
    steps: 2,
    preview: formPreview7,
}, {
    steps: 2,
    preview: formPreview8,
}, {
    steps: 2,
    preview: formPreview9,
}, {
    steps: 2,
    preview: formPreview10,
}, {
    steps: 2,
    preview: formPreview11,
}, {
    steps: 2,
    preview: formPreview12,
}];

// HD Indexes
// 0 2 3 4 6 8 9 

// Preview image indexes
// 8 3 10 7 6 12 9 4

const themeSelector = ({ selectTheme }) => {
    return (
        <div className="theme-picker">
            {themes.map(({ steps, preview }) => (
                <div className="theme-thumb" onClick={selectTheme}>
                    <img src={preview} />
                    <div className="form-step-count">
                        This form has <span className="counter">{steps} steps</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default themeSelector;
import { Button } from '../../inputs';

const sideNav = () => {

    return (
        <div className="side-nav flex column left">
            <div className="layout-list">
                
            </div>
            <div className="design-list flex wrap left">
                <Button text="Theme" />
                <Button text="Form" />
                <Button text="Text" />
                <Button text="Phone Field" />
                <Button text="Email Field" />
                <Button text="Name Field" />
                <Button text="Button Field" />
                <Button text="Checkbox" />
                <Button text="Close Button" />
                <Button text="Compliance" />
                <Button text="Next Form 1/4" />
            </div>
        </div>
    )
}

export default sideNav;
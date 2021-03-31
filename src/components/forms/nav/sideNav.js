import { Button } from '../../inputs';

const sideNav = () => {

    return (
        <div className="side-nav flex column left">
            <div className="layout-list">
                <Button useMask icon="desktop" />
                <Button useMask icon="tablet" />
                <Button useMask icon="mobile" />
            </div>
            <div className="design-list flex wrap left">
                <Button icon="theme" text="Theme" />
                <Button icon="form" text="Form" />
                <Button icon="text" text="Text" />
                <Button icon="phone-field" text="Phone Field" />
                <Button icon="email-field" text="Email Field" />
                <Button icon="name-field" text="Name Field" />
                <Button icon="button-field" text="Button Field" />
                <Button icon="checkbox" text="Checkbox" />
                <Button icon="close-button" text="Close Button" />
                <Button icon="compliance" text="Compliance" />
                <Button text="Next Form 1/4" />
            </div>
        </div>
    )
}

export default sideNav;
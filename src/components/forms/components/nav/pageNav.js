import { Dropdown, Button } from '../../../inputs';

import logo from '../../../../media/SMSBump-Logo.svg'
import pen from '../../../../media/Icons/Top-Menu-Icons/Pen-icon.svg'

const pageNav = () => (
    <div className="page-nav flex space-between">
        <div className="logo"><img src={logo} alt="Logo" /></div>
        <div className="flex center-control window space-between">
            <div className="flex title">
                <img src={pen} alt="pen icon" />
                Form 1
            </div>
            <Dropdown options={[{
                value: 'd',
                text: 'Draft',
            }]} />
        </div>
        <div className="logout center flex middle">
            <Button icon="exit" text="Exit" />
        </div>
    </div>
)

export default pageNav;
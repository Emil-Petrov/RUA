import logo from '../../../media/SMSBump-Logo.svg'

import Dropdown from '../../inputs/dropdown';

import pen from '../../../media/Icons/Top-Menu-Icons/Pen-icon.svg'
import exit from '../../../media/Icons/Top-Menu-Icons/Exit-icon.svg'

const pageNav = () => {

    return (
        <div className="page-nav flex space-between">
            <div className="logo"><img src={logo} alt="Logo" /></div>
            <div className="flex center-control window space-between">
                <div className="flex title">
                    <img src={pen} />
                    Form 1
                </div>
                <Dropdown options={[{
                    value: 'd',
                    text: 'Draft',
                }]} />
            </div>
            <div className="logout center flex middle">
                <img src={exit} />
                <div className="button">Exit</div>
            </div>
        </div>
    )
}

export default pageNav;
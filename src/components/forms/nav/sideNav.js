import { Button } from '../../inputs';

const sideNav = ({ activeItems, triggerMenu, changeSize }) => {
    const getIconFromName = name => {
        return name.toLowerCase().split(' ').join('-');
    }
    console.log(activeItems)
    const menuItems = [
        'Theme',
        'Form',
        'Text',
        'Phone Field',
        'Email Field',
        'Name Field',
        'Button Field',
        'Checkbox',
        'Close Button',
        'Compliance',
    ].map(name => {
        const action = getIconFromName(name);
        return <Button
            onClick={() => triggerMenu(action)}
            key={name}
            active={activeItems.menu === action}
            text={name}
            icon={action}
            useMask
        />
    })

    const sizeItems = [
        'Desktop',
        'Tablet',
        'Mobile',
    ].map(name => {
        const action = getIconFromName(name);
        return <Button 
            key={name} 
            active={activeItems.size === action} 
            icon={action} 
            useMask 
            onClick={() => changeSize(action)}
        />
    })

    return (
        <div className="side-nav flex column left">
            <div className="layout-list">
                {sizeItems}
            </div>
            <div className="design-list flex column">
                {menuItems}
                <Button active text="Next Form 1/4" />
            </div>
        </div>
    )
}

export default sideNav;
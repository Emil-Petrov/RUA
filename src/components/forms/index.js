import { FormNav, PageNav, SideNav } from './components/nav';
import Builder from './components/builder';

import FormContextProvider, { FormContext } from './context';

import './styles.scss';
import { useContext } from 'react';

const Wrapper = () => {
    const { 
        state: { 
            theme,
            ...activeItems
        }, 
        actions: {
            changeSize,
            triggerMenu,
        }
    } = useContext(FormContext);

    return (
        <div className="form-builder">
            <PageNav />
            <FormNav />
            <div className="body flex">
                <SideNav activeItems={activeItems} changeSize={changeSize} triggerMenu={triggerMenu} />
                <Builder theme={theme} />
            </div>
        </div>
    )
}

const withContext = () => (<FormContextProvider>{<Wrapper />}</FormContextProvider>)

export default withContext;
import { FormNav, PageNav, SideNav } from './components/nav';
import Builder from './components/builder';

import FormContextProvider, { FormContext } from './context';

import './styles.scss';
import { useContext } from 'react';

const Wrapper = () => {
    const { 
        state, 
        actions: {
            changeSize,
            triggerMenu,
        }
    } = useContext(FormContext);
    console.log(state);
    return (
        <div className="form-builder">
            <PageNav />
            <FormNav />
            <div className="body flex">
                <SideNav activeItems={state} changeSize={changeSize} triggerMenu={triggerMenu} />
                <Builder />
            </div>
        </div>
    )
}

const withContext = () => (<FormContextProvider>{<Wrapper />}</FormContextProvider>)

export default withContext;
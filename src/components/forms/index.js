import { FormNav, PageNav, SideNav } from './nav';
import Builder from './builder';

import './styles.scss';

const wrapper = () => {


    return (
        <div className="form-builder">
            <PageNav />
            <FormNav />
            <div className="body flex">
                <SideNav />
                <Builder />
            </div>
        </div>
    )
}


export default wrapper;
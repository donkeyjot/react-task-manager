import {Link} from "react-router-dom";
import {FunctionComponent} from "react";

interface Props {

}

export const Navigation: FunctionComponent<Props> = (props) => {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className="container-fluid">
                    <Link to={'/'} className='navbar-brand'>Tasks Manager</Link>
                    <div className='navbar-collapse collapse '>
                        <li className='nav-item'>
                            <Link to={"/tasks"}>
                                Tasks
                            </Link>
                        </li>
                        {/*<li className='nav-item'>*/}
                        {/*    <Link to={"/todo"}>*/}
                        {/*        To do*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        {/*<li className='nav-item'>*/}
                        {/*    <Link to={"/finished"}>*/}
                        {/*        Done*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        <li className='nav-item'>
                            <Link to={"/tasks/add"}>
                                Add task
                            </Link>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    );
}

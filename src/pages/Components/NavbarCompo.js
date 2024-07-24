import {Link} from 'react-router-dom';
export default function NavbarCompo(props){
    // NavbarItems=[{link:'',label:''}]
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <button className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainNav"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"></button>
            <div className="collapse navbar-collapse" id="mainNav">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    {props.NavbarItems.map((navItem,navIdx)=>{
                        return(         
                            <li className="nav-item" key={navIdx}>
                                <Link className="nav-link" to={navItem.link}>{navItem.label}</Link>
                                {/* <a className="nav-link active" href="#">Home</a> */}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
        
    )
}
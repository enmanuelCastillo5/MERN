import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Icon } from 'react-materialize';

const Navigation = () => {
    return(
        <Navbar
            className=' light-blue accent-4'
            alignLinks="right"
            brand={<Link className="brand-logo" to="/">NotesApp</Link>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
            >
               <Link to='/'>Notes</Link>
               <Link to='/create'>create Note</Link>
               <Link to='/user'>Create User</Link>

            </Navbar>
    )
}

export default Navigation;
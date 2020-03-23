import React , { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from 'react-router-dom'
import {Navbar , Nav} from 'react-bootstrap'    

function header() {
    return ReactDOM.createPortal (
        <Fragment>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="py-0">
                <Navbar.Brand>
                    <NavLink to="/" className="navbar-brand mb-0">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" width="40" height="40" alt=""/>
                    <span className="mr-3 text-white" style={{fontWeight : 600 , letterSpacing : '-1.6px' }}>ری اکت ساز</span>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="justify-content-center align-items-center mr-4">
                    <NavLink className="nav-link" to="/add">اضافه کردن اعضاء</NavLink>
                    <NavLink className="nav-link" to="/posts">دیدن پست ها</NavLink> 
                    <NavLink className="nav-link" to="/test">دیدن کامپوننت ها</NavLink> 
                    <NavLink className="nav-link" to="/sendPost">اضافه کردن پست</NavLink> 
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment> ,
        document.getElementById('header')
    )
}

export default header

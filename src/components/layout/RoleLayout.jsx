import React, { Fragment } from "react";
import "./RoleLayout.css"
import { Outlet, useParams } from "react-router-dom";
import ManageNavbar from "../navbar/ManageNavBar";
import SideNav from "../sidenav/SideNav";
import SearchBar from "../search/SearchBar";

const RoleLayout = () => {

    const { action } = useParams();

    if (action === 'view' || action === 'edit' || action === "view-voucher" || action === "view-product"
        || action === "view-voucher" || action === "edit-product") {
        return (
            <Fragment>
                <ManageNavbar className="layout-manage-navbar" />
                <SideNav />
                <div id="content-role-page">
                    <div className="content-role-page-search">
                        <SearchBar />
                    </div>
                    <div className="content-outlet-role-page">
                        <Outlet />
                    </div>
                </div>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <ManageNavbar className="layout-manage-navbar" />
                <SideNav />
                <div id="content-role-page">
                    <div className="content-outlet-role-page">
                        <Outlet />
                    </div>
                </div>
            </Fragment>
        )
    }


}

export default RoleLayout;
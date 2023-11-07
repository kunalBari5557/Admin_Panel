import React from 'react'
import { NavLink, useLocation} from 'react-router-dom'


const Admin_Sidebar = () => {
    const {pathname} = useLocation();
    const admin_url = ['/admin/product','/admin/product/store','/admin/product/edit','/admin/product/show']
    const Admin_Skill = ['/admin/skill','/admin/skill/store','/admin/skill/show','/admin/skill/edit']
    const Admin_Document_Type = ['/admin/document-type','/admin/document-type/store','/admin/document-type/show','/admin/document-type/edit']
    const Admin_Compact_Lincence = ['/admin/compact-licence','/admin/compact-licence/store','/admin/compact-licence/edit','/admin/compact-licence/show']
    const Admin_Quick_Lincence = ['/admin/quick-lincense','/admin/quick-lincense/store','/admin/quick-lincense/edit','/admin/quick-lincense/show']
    const Speciality = ['/admin/speciality','/admin/speciality/store','/admin/speciality/edit','/admin/speciality/show']
    const Lower_Aquity = ['/admin/lower-aquity','/admin/lower-aquity/store','/admin/lower-aquity/edit','/admin/lower-aquity/show']
    const Employement_Type = ['/admin/employement-type','/admin/employement-type/store','/admin/employement-type/edit','/admin/employement-type/show']
    const Shift = ['/admin/shift','/admin/shift/store','/admin/shift/edit','/admin/shift/show']
    const Time_Of_Day = ['/admin/time-of-day','/admin/time-of-day/store','/admin/time-of-day/edit','/admin/time-of-day/show']
    const Contract_Length = ['/admin/contract-length','/admin/contract-length/store','/admin/contract-length/edit','/admin/contract-length/show']
    const Profession = ['/admin/profession','/admin/profession/store','/admin/profession/edit','/admin/profession/show']
    const Work_History_Type = ['/admin/work-history-type','/admin/work-history-type/store','/admin/work-history-type/edit','/admin/work-history-type/show']
    const Charting_Syestem = ['/admin/charting-system','/admin/charting-system/store','/admin/charting-system/edit','/admin/charting-system/show']
    const Certificate = ['/admin/certificate','/admin/certificate/store','/admin/certificate/edit','/admin/certificate/show']
    const Primary_Emp_Type = ['/admin/primary-employement-type','/admin/primary-employement-type/store','/admin/primary-employement-type/edit','/admin/primary-employement-type/show']
    const SubProfession = ['/admin/subprofession','/admin/subprofession/store','/admin/subprofession/edit','/admin/subprofession/show']
    const Onboarding = ['/admin/onboarding','/admin/onboarding/store','/admin/onboarding/edit','/admin/onboarding/show']
    const Job = ['/admin/job','/admin/job/show']


    const Master = ['/admin/skill','/admin/compact-licence','/admin/quick-lincense','/admin/speciality','/admin/lower-aquity','/admin/employement-type','/admin/shift','/admin/time-of-day','/admin/contract-length','/admin/profession','/admin/work-history-type','/admin/certificate','/admin/primary-employement-type','/admin/subprofession','/admin/charting-system','/admin/skill/store'
    ,'/admin/skill/show','/admin/skill/edit',,'/admin/compact-licence/store','/admin/compact-licence/edit','/admin/compact-licence/show','/admin/quick-lincense/store','/admin/quick-lincense/edit','/admin/quick-lincense/show'
    ,'/admin/speciality/store','/admin/speciality/edit','/admin/speciality/show','/admin/lower-aquity/store','/admin/lower-aquity/edit','/admin/lower-aquity/show','/admin/lower-aquity/store','/admin/lower-aquity/edit','/admin/lower-aquity/show'
    ,'/admin/employement-type/store','/admin/employement-type/edit','/admin/employement-type/show','/admin/shift/store','/admin/shift/edit','/admin/shift/show'
    ,'/admin/time-of-day/store','/admin/time-of-day/edit','/admin/time-of-day/show','/admin/contract-length/store','/admin/contract-length/edit','/admin/contract-length/show'
    ,'/admin/profession/store','/admin/profession/edit','/admin/profession/show','/admin/work-history-type/store','/admin/work-history-type/edit','/admin/work-history-type/show'
    ,'/admin/charting-system/store','/admin/charting-system/edit','/admin/charting-system/show','/admin/certificate/store','/admin/certificate/edit','/admin/certificate/show'
    ,'/admin/primary-employement-type/store','/admin/primary-employement-type/edit','/admin/primary-employement-type/show','/admin/subprofession/store','/admin/subprofession/edit','/admin/subprofession/show']

    const Report = ['/admin/job-seen','/admin/mostly-seen','/admin/applied-candidate','/admin/ipbased-location','/admin/mostly-seen/show']
    const MostlySeen = ['/admin/mostly-seen','/admin/mostly-seen/show']

    const LogoutAdmin=()=>{

        localStorage.removeItem('Token');
        // toast.success('Logout Successfully!')
        window.location.replace("/");

    }
    
    return (
        <>
              <div className="sidebar-wrapper sidebar-theme">
            <nav id="sidebar">
                <div className="shadow-bottom"></div>
                <div className="d-flex justify-content-end">
                    <a href="/#" className="sidebarCollapse mr-2 d-sm-none" data-placement="bottom">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </a>
                </div>

                <ul className="list-unstyled menu-categories" id="accordionExample">
                    <li className="menu">
                        <NavLink to="/admin/dashboard" data-active={pathname==="/admin/dashboard"?"true":"false"} aria-expanded={pathname==="/admin/dashboard"?"true":"false"} className="dropdown-toggle">
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                <span>Dashboard</span>
                            </div>
                        </NavLink>
                    </li> 
                     <li className="menu">
                        <NavLink to="/admin/product" data-active={admin_url.includes(pathname)?"true":"false"} aria-expanded={admin_url.includes(pathname)?"true":"false"} className="dropdown-toggle">
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                <span>Product List</span>
                            </div>
                        </NavLink>
                    </li>

                    <li className="menu">
                        <NavLink to="/admin/users"  data-active={pathname==="/admin/users"?"true":"false"} aria-expanded={pathname==="/admin/users"?"true":"false"} className="dropdown-toggle">
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                <span>Users Management</span>
                            </div>
                        </NavLink>
                    </li>

                    <li className="menu">
                        <NavLink to="/admin/demo"  data-active={pathname==="/admin/demo"?"true":"false"} aria-expanded={pathname==="/admin/demo"?"true":"false"} className="dropdown-toggle">
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                <span>Demo Management</span>
                            </div>
                        </NavLink>
                    </li>
                    
                    {/* <li className="menu">
                        <a href="#datatables" data-toggle="collapse" aria-expanded={Master.includes(pathname)?"true":"false"} className={Master.includes(pathname)?"dropdown-toggle collapsed bg-white":"dropdown-toggle"}>

                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin='round' className="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                                <span>Master</span>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </div>
                        </a>
                        <ul className={Master.includes(pathname)?"collapse submenu list-unstyled show":"collapse submenu list-unstyled"} id="datatables" data-parent="#accordionExample">
                            <li>
                                <NavLink to="/admin/skill" data-active={Admin_Skill.includes(pathname)?"true":"false"} aria-expanded={Admin_Skill.includes(pathname)?"true":"false"} className="dropdown-toggle">
                                    <span>Skill</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/compact-licence"data-active={Admin_Compact_Lincence.includes(pathname)?"true":"false"} aria-expanded={Admin_Compact_Lincence.includes(pathname)?"true":"false"} className="dropdown-toggle">
                                    <span>Compact Licence</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/quick-lincense" data-active={Admin_Quick_Lincence.includes(pathname)?"true":"false"} aria-expanded={Admin_Quick_Lincence.includes(pathname)?"true":"false"} className="dropdown-toggle">
                                    <span>Quick Licence</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/admin/speciality" data-active={Speciality.includes(pathname)?"true":"false"} aria-expanded={Speciality.includes(pathname)?"true":"false"} className="dropdown-toggle">
                                    <span>Speciality</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/lower-aquity" data-active={Lower_Aquity.includes(pathname)?"true":"false"} aria-expanded={Lower_Aquity.includes(pathname)?"true":"false"} className="dropdown-toggle">
                                    <span>Lower Aquity</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/employement-type" data-active={Employement_Type.includes(pathname)?"true":"false"} aria-expanded={Employement_Type.includes(pathname)?"true":"false"} className="dropdown-toggle">
                                    <span>Employement Type</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/shift" data-active={Shift.includes(pathname)?"true":"false"} aria-expanded={Shift.includes(pathname)?"true":"false"} className="dropdown-toggle">
                                    <span>Shift</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/admin/time-of-day" data-active={Time_Of_Day.includes(pathname)?"true":"false"} aria-expanded={Time_Of_Day.includes(pathname)?"true":"false"} className="dropdown-toggle">
                                    <span>Time Of Day</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/admin/contract-length" data-active={Contract_Length.includes(pathname)?"true":"false"} aria-expanded={Contract_Length.includes(pathname)?"true":"false"} className="dropdown-toggle">
                                    <span>Contract Length</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/profession" data-active={Profession.includes(pathname)?"true":"false"} aria-expanded={Profession.includes(pathname)?"true":"false"} className="dropdown-toggle">
                                    <span>Profession</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/work-history-type" data-active={Work_History_Type.includes(pathname)?"true":"false"} aria-expanded={Work_History_Type.includes(pathname)?"true":"false"} className="dropdown-toggle">
                                    <span>Work History Type</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/charting-system" data-active={Charting_Syestem.includes(pathname)?"true":"false"} aria-expanded={Charting_Syestem.includes(pathname)?"true":"false"} className="dropdown-toggle">
                                    <span>Charting System</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/admin/certificate" data-active={Certificate.includes(pathname)?"true":"false"} aria-expanded={Certificate.includes(pathname)?"true":"false"} className="dropdown-toggle">
                                    <span>Certificate</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/admin/primary-employement-type" data-active={Primary_Emp_Type.includes(pathname)?"true":"false"} aria-expanded={Primary_Emp_Type.includes(pathname)?"true":"false"} className="dropdown-toggle">
                                    <span>Primary Employement Type </span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/admin/subprofession" data-active={SubProfession.includes(pathname)?"true":"false"} aria-expanded={SubProfession.includes(pathname)?"true":"false"} className="dropdown-toggle">
                                    <span>Subprofession</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/admin/document-type" data-active={Admin_Document_Type.includes(pathname)?"true":"false"} aria-expanded={Admin_Document_Type.includes(pathname)?"true":"false"} className="dropdown-toggle">
                                    <span>Document Type</span>
                                </NavLink>
                            </li>

                        </ul>
                    </li> */}
                    
                    <li className="menu">
                        <div className="dropdown-toggle" onClick={()=>LogoutAdmin()}>
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                <span>Logout</span>
                            </div>
                        </div>
                    </li> 
                </ul>
            </nav>
        </div>
        </>
    )

}

export default Admin_Sidebar
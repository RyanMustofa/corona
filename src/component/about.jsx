import React from "react";
import './about.css';

const About = () => {
    return (
        <div>
            <div class="container">
                <div class="row profile">
                    <div class="col-md-3">
                        <div class="profile-sidebar">
                            <div class="profile-userpic mx-auto text-center">
                                <img
                                    src="https://gravatar.com/avatar/31b64e4876d603ce78e04102c67d6144?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png"
                                    class="img-responsive"
                                    alt=""
                                />
                            </div>
                            <div class="profile-usertitle">
                                <div class="profile-usertitle-name">
                                    Ryan Mustofa
                                </div>
                                <div class="profile-usertitle-job">
                                    Developer
                                </div>
                            </div>
                            <div class="profile-usermenu">
                                <ul class="nav">
                                    <li class="active">
                                        <a href="#">
                                            <i class="glyphicon glyphicon-home"></i>
                                            Overview{" "}
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="portlet light bordered">
                                <div class="row list-separated profile-stat">
                                </div>
                                <div>
                                    <h4 class="profile-desc-title">
                                        About Ryan Mustofa
                                    </h4>
                                    <div class="margin-top-20 profile-desc-link">
                                        <a href="https://portofolio-ryan-mustofa.netlify.app/">
                                            portofolio
                                        </a>
                                    </div>
                                    <div class="margin-top-20 profile-desc-link">
                                        <a>
                                            rm281003@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

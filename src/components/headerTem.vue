<template>
    <div class="header">
        <div class="header-content">
            <img class="logo-img" src="" alt="">
        </div>
        <div id="slogan">欢迎使用空间智能管理系统</div>
        <ul class="user">
            <li><a href="javascript:void(0)" class="logout"></a></li>
            <li>
                <a href="javascript:void(0)" class="user-center"></a>
                <ul class="user-center-list">
                    <li><a href="personalCenter.html">个人资料</a></li>
                    <li><a href="myApproved.html">我的审批</a></li>
                </ul>
            </li>
            <li><a href="messageCenter.html" class="notice"></a><span class='red-cyc'></span></li>
        </ul>
    </div>
</template>
<style>
    .header{
        position: fixed;
        background-color: #fff;
        height: 54px;
        line-height: 54px;
        width: 100%;
        box-shadow: 0px 3px 9.8px 0.2px rgba(112, 124, 135, 0.2);
        z-index: 100;
    }
</style>
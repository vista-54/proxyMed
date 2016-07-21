/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var main = angular
    .module('main', ['ui.router', 'ngMaterial', 'ngAnimate', 'ngStorage', 'ngCordova', 'ngMdIcons'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');
        $stateProvider
            // .state("home", {
            //     url: "/home",
            //     templateUrl: "home/home.html",
            //     controller: "homeCtrl"
            // })
            .state("login", {
                url: "/login",
                templateUrl: "js/mainModule/login/login.html",
                controller: "loginCtrl"
            })
            .state("hospital", {
                url: "/hospital",
                templateUrl: "js/mainModule/hospital/hospital.html",
                controller: "hospitalCtrl"
            })
            .state("schedule", {
                url: "/schedule",
                templateUrl: "js/mainModule/schedule/schedule.html",
                controller: "scheduleCtrl"
            })
            .state("procedure", {
                url: "/procedure",
                templateUrl: "js/mainModule/procedure/procedure.html",
                controller: "procedureCtrl"
            })
            .state("userProfile", {
                url: "/userProfile",
                templateUrl: "js/mainModule/userProfile/userProfile.html",
                controller: "userProfileCtrl"
            })
            .state("maininfo", {
                url: "/maininfo",
                templateUrl: "js/mainModule/mainInfo/mainInfo.html",
                controller: "mainInfoCtrl"
            })
            .state("favorite", {
                url: "/favorite",
                templateUrl: "js/mainModule/favorite/favorite.html",
                controller: "favoriteCtrl"
            })
            .state("part", {
                url: "/:part_id",
                templateUrl: "js/mainModule/partView/partView.html",
                controller: "partViewCtrl"
            })
            .state("queue", {
                url: "/:doctor_id/:shifts_id",
                templateUrl: "js/mainModule/queue/queue.html",
                controller: "queueCtrl"
            })



            .state("ambulator", {
                url: "/ambulator",
                templateUrl: "user/ambulator.html",
                controller: "userCtrl"
            })
            




            .state("registration", {
                url: "/registration",
                templateUrl: "user/registration.html",
                controller: "userCtrl"
            })

    });

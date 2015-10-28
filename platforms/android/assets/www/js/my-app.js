// Initialize your app
var myApp = new Framework7({
    modalTitle: 'Singapore Airlines',
    // Enable Material theme
    material: true,
});

// Export selectors engine
var $$ = Dom7;

// Add views
var leftView = myApp.addView('.view-left', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: false
});
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: false
});

myApp.onPageInit('index', function (page) {
    $$('.dismiss-prompt').on('click', function () {
        myApp.showIndicator();
        setTimeout(function () {
            myApp.hideIndicator();
        }, 1500);
    });
});

// Dummy Content
var songs = ['Yellow Submarine', 'Don\'t Stop Me Now', 'Billie Jean', 'Californication'];
var authors = ['Beatles', 'Queen', 'Michael Jackson', 'Red Hot Chili Peppers'];
 
// Pull to refresh content
var ptrContent = $$('.pull-to-refresh-content');
 
// Add 'refresh' listener on it
ptrContent.on('refresh', function (e) {
    // Emulate 2s loading
    setTimeout(function () {
        var itemHTML = '<div class="list-block cards-list col-50 tablet-33"> <ul> <li class="card swipeout"> <div class="swipeout-content"> <div class="card-header">2015 F1 Pen Set</div><div class="card-content"> <div class="card-content-inner"> <img src="img/krisair/f1collectibles/pen.jpg" style="width: 100%"/> few seconds ago </div></div><div class="card-footer"><div>Seat 25A</div><div class="color-green">Paid</div></div></div><div class="swipeout-actions-right"> <a href="#" class="bg-indigo swipeout-delete">Fulfilled</a> </div><div class="swipeout-actions-left"> <a href="#" class="bg-orange swipeout-delete">Cancel</a> </div></li></ul> </div><div class="list-block cards-list col-50 tablet-33"> <ul> <li class="card swipeout"> <div class="swipeout-content"> <div class="card-header">2015 F1 Racing Car Earpiece</div><div class="card-content"> <div class="card-content-inner"> <img src="img/krisair/f1collectibles/earpiece.jpg" style="width: 100%"/> few seconds ago </div></div><div class="card-footer"><div>Seat 25A</div><div class="color-green">Paid</div></div></div><div class="swipeout-actions-right"> <a href="#" class="bg-indigo swipeout-delete">Fulfilled</a> </div><div class="swipeout-actions-left"> <a href="#" class="bg-orange swipeout-delete">Cancel</a> </div></li></ul> </div>'
        // Prepend new list element
        ptrContent.find('span').append(itemHTML);
        // When loading done, we need to reset it
        myApp.pullToRefreshDone();
    }, 2000);
});


var jqueryReady = $.Deferred();
var cordovaReady = $.Deferred();
$(function () {
    jqueryReady.resolve();
});
document.addEventListener("deviceready", function () {
    cordovaReady.resolve();
}, false);

$.when(jqueryReady, cordovaReady).done(function () {
   
}).error(function () {
    alert("Error setting up");
});

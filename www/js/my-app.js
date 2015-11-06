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
    $$('.update-status').on('click', function () {
        myApp.showIndicator();
        setTimeout(function () {
            myApp.hideIndicator();
        }, 2500);
    });
    $$('.dismiss-prompt').on('click', function () {
        myApp.showIndicator();
        setTimeout(function () {
            myApp.hideIndicator();
        }, 1500);
    });
});
//update qty
myApp.onPageInit('krisair-category-listing', function (page) {
    var qty1 = myApp.formGetData("qty1");
    var stockAlert1 = myApp.formGetData("stockAlert1");
    if (!qty1) {
        qty1 = 5;
    } else {
        $$(page.container).find('div[id="qty1"]').text(qty1);
    }
    if (!stockAlert1) {
        stockAlert1 = 0;
    } else if (qty1 <= stockAlert1) {
        $('#qty1').css("color", "red");
    } else {
        $('#qty1').css("color", "#757575");
    }
    $$('.decrease-qty1').on('click', function () {
        qty1 = $$(page.container).find('div[id="qty1"]').text();
        $$(page.container).find('div[id="qty1"]').text(parseInt(qty1) - 1);
        qty1 = $$(page.container).find('div[id="qty1"]').text();
        myApp.formStoreData('qty1', qty1);

        if (qty1 <= stockAlert1) {
            $('#qty1').css("color", "red");
        } else {
            $('#qty1').css("color", "#757575");
        }
    });
    $$('.increase-qty1').on('click', function () {
        qty1 = $$(page.container).find('div[id="qty1"]').text();
        $$(page.container).find('div[id="qty1"]').text(parseInt(qty1) + 1);
        qty1 = $$(page.container).find('div[id="qty1"]').text();
        myApp.formStoreData('qty1', qty1);

        if (qty1 <= stockAlert1) {
            $('#qty1').css("color", "red");
        } else {
            $('#qty1').css("color", "#757575");
        }
    });
    $$('.update-qty1').on('click', function () {
        myApp.prompt("Update new quantity", function (value) {
            $$(page.container).find('div[id="qty1"]').text(value);
            myApp.formStoreData('qty1', value);
        });
        if (qty1 <= stockAlert1) {
            $('#qty1').css("color", "red");
        } else {
            $('#qty1').css("color", "#757575");
        }
    });
    $$('.stock-alert1').on('click', function () {
        myApp.prompt("Set stock alert level", function (value) {
            myApp.formStoreData('stockAlert1', value);
            stockAlert1 = value;

            if (qty1 <= stockAlert1) {
                $('#qty1').css("color", "red");
            } else {
                $('#qty1').css("color", "#757575");
            }
        });

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
        var itemHTML = '<div class="list-block cards-list col-50 tablet-33"> <ul> <li class="card swipeout"> <div class="swipeout-content"> <div class="card-header">2015 F1 Pen Set</div><div class="card-content"> <div class="card-content-inner"> <img src="img/krisair/f1collectibles/pen.jpg" style="width: 100%"/> few seconds ago </div></div><div class="card-footer"><div>Seat 25A</div><div class="color-orange">$20 Unpaid</div></div></div><div class="swipeout-actions-right"> <a href="#" class="bg-indigo swipeout-delete">Fulfilled</a> </div><div class="swipeout-actions-left"> <a href="#" class="bg-orange swipeout-delete">Cancel</a> </div></li></ul> </div><div class="list-block cards-list col-50 tablet-33"> <ul> <li class="card swipeout"> <div class="swipeout-content"> <div class="card-header">2015 F1 Racing Car Earpiece</div><div class="card-content"> <div class="card-content-inner"> <img src="img/krisair/f1collectibles/earpiece.jpg" style="width: 100%"/> few seconds ago </div></div><div class="card-footer"><div>Seat 25A</div><div class="color-orange">$32 Unpaid</div</div></div><div class="swipeout-actions-right"> <a href="#" class="bg-indigo swipeout-delete">Fulfilled</a> </div><div class="swipeout-actions-left"> <a href="#" class="bg-orange swipeout-delete">Cancel</a> </div></li></ul> </div>'
        // Prepend new list element
        ptrContent.find('span').append(itemHTML);
        // When loading done, we need to reset it
        myApp.pullToRefreshDone();
    }, 2000);
});

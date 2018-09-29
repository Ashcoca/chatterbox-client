// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.

// Put your parse application keys here!

//Added keys and campus

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('X-Parse-Application-Id', 'APPID');
  jqXHR.setRequestHeader('X-Parse-REST-API-Key', 'APIKEY');
});

// Put your campus prefix here
window.CAMPUS = 'hrsf';

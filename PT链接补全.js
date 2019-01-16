// ==UserScript==
// @name         PT站链接补全
// @namespace    https://queb.fun/
// @version      1.1.1
// @description  仅适用于NexusPHP站点
// @author       Iranninn
// @match        *://u2.dmhy.org/*
// @match        *://ourbits.club/*
// @match        *://hdhome.org/*
// @match        *://pt.upxin.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //Data Map
    var passkey = new Map([
    	['u2.dmhy.org','&passkey='],
    	['ourbits.club','&passkey='],
    	['hdhome.org','&passkey='],
    	['pt.upxin.net','&passkey=']
    	]);
    //Extra code
    var patch = new Map([
    	['u2.dmhy.org',state => {
    		if(state == 'torrents'){
    			Torrent(pskey);
    		}
    		if(state == 'details'){
    			Torrent(pskey);
    			Detail(pskey);
    		}
    	}]
    	]);
    //Main Logic
    var host = location.hostname;
    var path = location.pathname;
    var pskey = passkey.get(host);
    var ex = patch.has(host);

    console.log('PT站链接补全 Start!');
    
    if(path === '/torrents.php') {
        if(ex){
        	console.log('检测到EX模块！');
        	var work = patch.get(host);
        	work('torrents');
        }
        else{
        	Torrent(pskey);
        }
    }

    if(path === '/details.php') {
        if(ex){
        	console.log('检测到EX模块!');
        	var work = patch.get(host);
        	work('details');
        }
        else{
        	Detail(pskey);
        }
    }

    //FxS
    function Torrent (key) {
    	console.log('Torrent load!');
        var element = document.querySelectorAll("img.download");
            for (var i = element.length - 1; i >= 0; i--) {
                var out = element[i].parentNode;
                out.href += key;
            }
        }

    function Detail (key) {
    	console.log('Detail load!');
        var element = document.querySelectorAll("img.dt_download");
        var out = element[0].parentNode;
        out.href += key;
        }
})();
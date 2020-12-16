if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/aloys-tab/aloys-tab?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/lv-select/lv-select?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/dn-icon/dn-icon?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/booklist/booklist?hash=08d157451d9ff2fdfa7b25d18ca0ba0fc81b851b');
require('../../components/booklist/booklistworman?hash=08d157451d9ff2fdfa7b25d18ca0ba0fc81b851b');
require('../../components/uni-icons/uni-icons?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-goods-nav/uni-goods-nav?hash=993ca45dec9dcdb8f19451ba17e5ec831eb613a0');
require('../../pages/index/index?hash=7738100271070ccabdc8526346897d0e7fff4cce');
require('../../pages/my/my?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/bookshelf/bookshelf?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/Ranking/Ranking?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/tobiao/tobiao?hash=80baad2d1506fca6a3ff19834b694ab4ed605c2a');
require('../../pages/classification/classification?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/bookdetail/bookdetail?hash=8c7968579d7f50189894b3fba0a3154721386d41');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}
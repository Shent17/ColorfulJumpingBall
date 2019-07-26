cc.Class({

    extends: cc.Component,

    properties: {

        currentScoreNode: {
            default: null,
            type: cc.Node,
        },

      

    },

    onLoad () {

        var gameResult = this.node.getComponent('gameResult');
        this.currentScoreNode.getComponent(cc.Label).string = gameResult.getLastScore();

        

    },

    start () {

    },

    update (dt) {

    },

    playAgain () {

        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            wx.getOpenDataContext().postMessage({ type: 'close' });
        }

        cc.director.loadScene('Game');

    },

});

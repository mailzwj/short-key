KISSY.ready(function(S){
    var D = S.DOM, E = S.Event;
    S.config({
        packages:[{
            name: "overlay",
            path: "http://a.tbcdn.cn/s/kissy/1.2.0/"
        },
        {
            name: "uibase",
            path: "http://a.tbcdn.cn/s/kissy/1.2.0/"
        },
        {
            name: "component",
            path: "http://a.tbcdn.cn/s/kissy/1.2.0/"
        }]
    });
    S.use("node,overlay", function(S, Node, O) {
        var dialog = new O.Dialog({
            width: 400,
            headerContent: '快捷搜索',
            bodyContent: D.html("#J_Overlay"),
            mask: true,
            align: {
                points: ['cc', 'cc']
            },
            draggable: false,
            aria:true
        });
        D.remove("#J_Overlay");
        E.on(document, "keyup", function(e){
            if(e.shiftKey && e.keyCode == 191){
                dialog.show();
                S.one("#resetSearch").fire("click");
            }else if(e.keyCode === 27){
                dialog.hide();
            }
        });
    });
});
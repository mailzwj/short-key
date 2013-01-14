
/*
 * GET home page.
 */
exports.index = function(req, res){
  	res.render('index', {
  		title: '快速查看全球公用头像',
  		content: '按住键盘【“Shift” + “？”】键，弹出快速搜索浮层。按【“Esc”】键关闭浮层。'
  	});
};
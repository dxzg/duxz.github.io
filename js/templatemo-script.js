/* 
Google Maps
*/
var map = '';
var center;

function initialize() {
    var map = new BMap.Map(document.getElementById('map-canvas'));    // 创建Map实例
    var point = new BMap.Point(120.127669, 30.343328);
    map.centerAndZoom(point, 19);  // 初始化地图,设置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl());   //添加地图类型控件

    var marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker); 
    var opts = {anchor: BMAP_ANCHOR_BOTTOM_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}    
    map.addControl(new BMap.NavigationControl(opts));
}

function calculateCenter() {
  center = map.getCenter();
}


function loadBaiduMap(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://api.map.baidu.com/api?v=2.0&ak=C93b5178d7a8ebdb830b9b557abce78b&sensor=false&' + 'callback=initialize';
    document.body.appendChild(script);
    }

/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function(){
  /* FlexSlider */
  // $('.flexslider').flexslider({
  //     animation: "fade",
  //     directionNav: false
  // });

  // $(".rotate").textrotator();

  new WOW().init();

  loadBaiduMap();
});
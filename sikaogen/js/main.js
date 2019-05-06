$(function () {
   //底部tab切换
   $('.tab .weui-tabbar__item').click(function () {
       $(this).siblings().removeClass('active');
       $(this).addClass('active');
   });
   /*首页跳转*/
   $('.menu-list li').click(function () {
       window.location.href = 'courseList.html'
   });
   //首页搜索
    $('.search-wrap img').click(function () {
        window.location.href = 'searchList.html'
    });
   /*课程列表选择分类*/
    $('.courseList .top-nav ,.courseList .mid-nav').on('click','li',function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

});
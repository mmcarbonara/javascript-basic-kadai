$(window).on('load' , function(){
    console.log('laodイベントが発生しました');
  });
  $(function() {
  $(window).on('scroll', function() {
    console.log('scrollイベントが発生しました');
  });
});

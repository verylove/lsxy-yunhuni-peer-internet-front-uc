$('#application_create').bootstrapValidator({
    fields: {
        notEmpty: {
          selector: '.notEmpty',
          validators: {
            notEmpty: {
              message: '不能为空',
            }
          }
        },
        limit20: {
          selector: '.limit20',
          validators: {
            notEmpty: {
              message: '不能为空',
            },
            stringLength: {
              min: 0,
              max: 20,
              message: '20字符以内'
            }
          }
        },
        limit300: {
          selector: '.limit300',
          validators: {
            stringLength: {
              min: 0,
              max: 300,
              message: '300字符以内'
            }
          }
        },
        url:{
          validators:{
            notEmpty: {
              message: '不能为空',
            },
          }
        }
      },
})

$('#app-tag .app-tag').click(function(){
  var app = $(this).attr('data-app');
  $('#serviceType').val(app);
  $(this).addClass("active").siblings().removeClass("active");
  $('.app-tap-child').each(function(){
    if(app==$(this).attr('data-child'))
      $(this).fadeIn();
    else
      $(this).hide();
  });
});

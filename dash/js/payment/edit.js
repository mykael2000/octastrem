$('.automated-form').on('submit', (e)=>{

    e.preventDefault();

    let form = document.querySelector('.automated-form');

    let formData = new FormData(form);

    $.ajax({
          url : '/admin/payment-methods/automated/update', // route to your controller
          method : 'POST',
          processData : false,
          contentType : false,
          data : formData,
          beforeSend : () => {

            $('.submit').html('Saving...')

          },
          success : (response) => {

              $('.submit').html('Save method')

              handleError(response)

              if(response.success) {

                toastr.success('Successfully updated payment method!');

              }

          },
        error  : (error) => {
              // handle error on requests exceptions 
              console.log(error)
        }
    });

})


$('.bank-form').on('submit', (e)=>{

    e.preventDefault();

    let form = document.querySelector('.bank-form');

    let formData = new FormData(form);

    $.ajax({
          url : '/admin/payment-methods/bank/update', // route to your controller
          method : 'POST',
          processData : false,
          contentType : false,
          data : formData,
          beforeSend : () => {

            $('.submit').html('Saving...')

          },
          success : (response) => {

              $('.submit').html('Save method')

              handleError(response)

              if(response.success) {

                toastr.success('Successfully updated payment method!');

              }

          },
        error  : (error) => {
              // handle error on requests exceptions 
              console.log(error)
        }
    });

})


$('.manual-form').on('submit', (e)=>{

    e.preventDefault();

    let form = document.querySelector('.manual-form');

    let formData = new FormData(form);

    $.ajax({
          url : '/admin/payment-methods/manual/update', // route to your controller
          method : 'POST',
          processData : false,
          contentType : false,
          data : formData,
          beforeSend : () => {

            $('.submit').html('Saving...')

          },
          success : (response) => {

              $('.submit').html('Save method')

              handleError(response)

              if(response.success) {

                toastr.success('Successfully updated payment method!');

              }

          },
        error  : (error) => {
              // handle error on requests exceptions 
              console.log(error)
        }
    });

})
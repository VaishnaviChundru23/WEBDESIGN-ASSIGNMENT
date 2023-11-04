$(document).ready(function () {
    
    const performOperation = (op) => {
      const num1 = parseFloat($('#num1').val());
      const num2 = parseFloat($('#num2').val());


  
      if (!isNaN(num1) && !isNaN(num2)) {
        switch (op) {
          case 'add':
            return num1 + num2;
          case 'subtract':
            return num1 - num2;
          case 'multiply':
            return num1 * num2;
          case 'divide':
            if (num2 !== 0) {
              return num1 / num2;
            } else {
              return 'Division by zero';
            }
          default:
            return 'Invalid operation';
        }
      } else {
        return 'Invalid input';
      }
    };

    var name = sessionStorage.getItem("user_name");

    if (name) {
       
        $("#welcome-name").text(name);
    } else {
        
        $("#welcome-name").text("Guest");
    }
  
   
    $('#add').click(function () {
      const result = performOperation('add');
      $('#result-value').text(result);
    });
  
    $('#subtract').click(function () {
      const result = performOperation('subtract');
      $('#result-value').text(result);
    });
  
    $('#multiply').click(function () {
      const result = performOperation('multiply');
      $('#result-value').text(result);
    });
  
    $('#divide').click(function () {
      const result = performOperation('divide');
      $('#result-value').text(result);
    });
  
   
    $('.number-input').on('input', function () {
      const input = $(this).val();
      const errorMsgId = $(this).attr('id') + '-error';
  
      if (!input.match(/^[0-9]*$/) || input === '') {
        $(`#${errorMsgId}`).text('Invalid input').show();
      } else {
        $(`#${errorMsgId}`).text('').hide();
      }
    });

    $('#reset').click(function () {
        $('.number-input').val(''); 
        $('.error-msg').text('').hide(); 
        $('#result-value').text(''); 
      });

  });
  
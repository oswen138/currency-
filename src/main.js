import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencySearch from './currencySearch.js';


function currencyResult() {
  $('#currency-value').val("");
  $('#currency-type').val("");
  $('.showErrors').text("");
  $('.showResult').text("");
  $('.showNotify').text("");
}

$(document).ready(function() {
  $('#conversion').onclick(function() {
    let currencyValue = $('#currency-value').val();
    let currencyType = $('#currency-type').val();
    currencyResult();
    let promise = CurrencySearch.getCurrency(currencyValue);
    let promise = CurrencySearch.getCurrency(currencyType);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showResult').text(`Your currency converted is ${currencyType} is ${body.main.result}%`);
      $('.showNotify').text(`Your chosen currency to convert is not included. ${body.main.notify}`);
    }, function(error) {
      $('.showErrors').text(`Your request is facing an error: ${error}`);
    });
  });
});


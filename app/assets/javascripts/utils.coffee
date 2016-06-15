@amountFormat = (amount) ->
  '$' + Number(amount).toLocaleString()
  
@totalFormat = (total) ->
  '$' + Number(total).toLocaleString()
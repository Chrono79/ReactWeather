/*function getTempCallback (location, callback) {
  callback(undefined, 12);
  callback('City not found');
}

getTempCallback('Buenos Aires', function (err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});*/

function addPromise (a,b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') resolve(a+b);
    else reject("These aren't both numbers");
  });
}

addPromise("a", 4).then(function(sum) {
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
});

//http://api.openweathermap.org/data/2.5/weather?q=buenos%20aires&appid=3c0222856b3e86814b21df83f9e989be&units=metric

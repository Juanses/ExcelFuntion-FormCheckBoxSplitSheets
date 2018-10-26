function ColumnSplit(range,delimiter) {
  var delimiter = (delimiter == undefined)? "," : delimiter;
  var matrice = [];
  for (i = 0; i < range.length; i++) {
    var value = range[i][0];
    var splitmatrix = value.split(delimiter);
    for (element in splitmatrix){
      matrice.push(splitmatrix[element].trim());
    }
  }
  return matrice;
  
}
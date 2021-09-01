//Aquí contenemos toda la funcionalidad a obtener,procesar y manipular datos
//osea toda la logica
 export function order(ordenado,data) {
  function sortByName(a, b) {
    if(a.name < b.name){
      return -1;
    }

    if(a.name > b.name){
        return 1;
    }
  }   
  if (ordenado == "az") {
    return data.sort(sortByName); 
 }

 function sortName(b, a) {
  if(b.name > a.name){
    return -1;
  }

  if(b.name < a.name){
      return 1;
  }

  return 0
}   
if (ordenado == "za") {
  return data.sort(sortName); 
}
}

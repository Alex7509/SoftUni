function search() {

   let towns = Array.from(document.querySelectorAll('ul li'));
   let searchText = document.getElementById('searchText');
   let matches = 0;

   for (let town of towns) {

      if (town.textContent.includes(searchText.value)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      } else {
         town.style.fontWeight = '';
         town.style.textDecoration = '';
      }
   }

   document.getElementById('result').textContent = `${matches} matches found`;
}

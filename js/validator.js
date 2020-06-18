//walidacja
function sprawdzName() {
  var formularz_obj = document.getElementById("name");
  var t_name = formularz_obj.value;
  var blad = document.getElementById("name_blad");
  var blad_danych;

  if (t_name === "") {
    blad.innerHTML = "Podaj nazwę towaru";
    blad.classList.add("invalid-feedback");
    formularz_obj.classList.add("is-invalid");
    blad.classList.remove("valid-feedback");
    formularz_obj.classList.remove("is-valid");
    blad_danych = true;
  } else if (t_name.length > 10) {
    blad.innerHTML = "Zadługa nazwa (max 10 znakow)";
    blad.classList.add("invalid-feedback");
    formularz_obj.classList.add("is-invalid");
    blad.classList.remove("valid-feedback");
    formularz_obj.classList.remove("is-valid");
    blad_danych = true;
  } else if (t_name.match(/^[0-9]+$/)) {
    blad.innerHTML = "W nazwie nie mogą znajdować się cyfry.";
    blad.classList.add("invalid-feedback");
    formularz_obj.classList.add("is-invalid");
    blad.classList.remove("valid-feedback");
    formularz_obj.classList.remove("is-valid");
    blad_danych = true;
  } else {
    blad.classList.remove("invalid-feedback");
    formularz_obj.classList.remove("is-invalid");
    blad.classList.add("valid-feedback");
    formularz_obj.classList.add("is-valid");
    blad.innerHTML = "";
    blad_danych = false;
  }
  return blad_danych;
}
function sprawdzNumber() {
  var formularz_obj = document.getElementById("number");
  var t_number = formularz_obj.value;
  var blad = document.getElementById("number_blad");
  var blad_danych;

  if (t_number === "") {
    blad.innerHTML = "Podaj kod towaru";
    blad.classList.add("invalid-feedback");
    formularz_obj.classList.add("is-invalid");
    blad.classList.remove("valid-feedback");
    formularz_obj.classList.remove("is-valid");
    blad_danych = true;
  } else if (!t_number.match(/^[a-zA-Z0-9]{2}-[a-zA-Z0-9]{2}$/)) {
    blad.innerHTML = "Zły format kodu";
    blad.classList.add("invalid-feedback");
    formularz_obj.classList.add("is-invalid");
    blad.classList.remove("valid-feedback");
    formularz_obj.classList.remove("is-valid");
    blad_danych = true;
  } else {
    blad.classList.remove("invalid-feedback");
    formularz_obj.classList.remove("is-invalid");
    blad.classList.add("valid-feedback");
    formularz_obj.classList.add("is-valid");
    blad.innerHTML = "";
    blad_danych = false;
  }
  return blad_danych;
}
function sprawdzNetto() {
  var formularz_obj = document.getElementById("netto");
  var t_netto = formularz_obj.value;
  var blad = document.getElementById("netto_blad");
  var blad_danych;

  if (t_netto === "") {
    blad.innerHTML = "Podaj cenę towaru";
    blad.classList.add("invalid-feedback");
    formularz_obj.classList.add("is-invalid");
    blad.classList.remove("valid-feedback");
    formularz_obj.classList.remove("is-valid");
    blad_danych = true;
  } else if (!t_netto.match(/^[0-9]+(\.[0-9]{1,2})?$/)) {
    blad.innerHTML = "Źle wpisana kwota";
    blad.classList.add("invalid-feedback");
    formularz_obj.classList.add("is-invalid");
    blad.classList.remove("valid-feedback");
    formularz_obj.classList.remove("is-valid");
    blad_danych = true;
  } else if (t_netto.match(/^[0-9]+$/)) {
    formularz_obj.value = formularz_obj.value + ".00";
    blad.classList.remove("invalid-feedback");
    formularz_obj.classList.remove("is-invalid");
    blad.classList.add("valid-feedback");
    formularz_obj.classList.add("is-valid");
    blad.innerHTML = "";
    blad_danych = false;
  } else {
    blad.classList.remove("invalid-feedback");
    formularz_obj.classList.remove("is-invalid");
    blad.classList.add("valid-feedback");
    formularz_obj.classList.add("is-valid");
    blad.innerHTML = "";
    blad_danych = false;
  }
  return blad_danych;
}
function sprawdzVat() {
  var formularz_obj = document.getElementById("vat");
  var t_vat = formularz_obj.value;
  var blad = document.getElementById("vat_blad");
  var blad_danych;

  if (t_vat === "") {
    blad.innerHTML = "Podaj wartość vat";
    blad.classList.add("invalid-feedback");
    formularz_obj.classList.add("is-invalid");
    blad.classList.remove("valid-feedback");
    formularz_obj.classList.remove("is-valid");
    blad_danych = true;
  } else if (!t_vat.match(/^[0-9]+$/)) {
    blad.innerHTML = "Źle wpisana kwota";
    blad.classList.add("invalid-feedback");
    formularz_obj.classList.add("is-invalid");
    blad.classList.remove("valid-feedback");
    formularz_obj.classList.remove("is-valid");
    blad_danych = true;
  } else {
    blad.classList.remove("invalid-feedback");
    formularz_obj.classList.remove("is-invalid");
    blad.classList.add("valid-feedback");
    formularz_obj.classList.add("is-valid");
    blad.innerHTML = "";
    blad_danych = false;
  }
  return blad_danych;
}
function dodajBrutto() {
  var formularz_obj = document.getElementById("brutto");
  var t_brutto = formularz_obj.value;

  var formularz_obj2 = document.getElementById("netto");
  var t_netto = formularz_obj2.value;

  var formularz_obj3 = document.getElementById("vat");
  var t_vat = formularz_obj3.value;

  t_vat = t_vat * 0.01 + 1;
  t_brutto = t_netto * t_vat;

  //zaokraglanie do 2 miejsc
  var factor = Math.pow(10, 2);
  t_brutto = Math.round(t_brutto * factor) / factor;

  formularz_obj.value = t_brutto;
}
function sprawdzKategoria() {
  var formularz_obj = document.getElementById("kategoria");
  var t_kategoria = formularz_obj.value;
  var blad = document.getElementById("kategoria_blad");
  var blad_danych;

  if (t_kategoria === "Wybierz...") {
    blad.innerHTML = "Wybierz kategorie";
    blad.classList.add("invalid-feedback");
    formularz_obj.classList.add("is-invalid");
    blad.classList.remove("valid-feedback");
    formularz_obj.classList.remove("is-valid");
    blad_danych = true;
  } else {
    blad.classList.remove("invalid-feedback");
    formularz_obj.classList.remove("is-invalid");
    blad.classList.add("valid-feedback");
    formularz_obj.classList.add("is-valid");
    blad.innerHTML = "";
    blad_danych = false;
  }
  return blad_danych;
}
function sprawdzOpcje() {
  var formularz_obj = document.getElementsByName("opcja");
  var blad = document.getElementById("opcje_blad");
  var blad_danych;
  var licznik = 0;

  for (var i = 0; i < formularz_obj.length; i++) {
    formularz_obj[i].classList.remove("is-valid");
    formularz_obj[i].classList.remove("is-invalid");
    if (formularz_obj[i].checked) {
      licznik++;
    }
  }
  if (licznik < 2) {
    for (var i = 0; i < formularz_obj.length; i++) {
      if (formularz_obj[i].checked) {
        formularz_obj[i].classList.add("is-invalid");
      }
    }
    blad.innerHTML = "Zaznacz conajmniej 2 opcje";
    blad.classList.add("invalid-feedback");
    blad.classList.remove("valid-feedback");
    blad_danych = true;
  } else {
    for (var i = 0; i < formularz_obj.length; i++) {
      if (formularz_obj[i].checked) {
        formularz_obj[i].classList.add("is-valid");
      }
    }
    blad.classList.remove("invalid-feedback");
    blad.classList.add("valid-feedback");
    blad.innerHTML = "";
    blad_danych = false;
  }
  return blad_danych;
}
function sprawdzOcene() {
  var formularz_obj = document.getElementsByName("rate");
  var blad_danych = true;

  for (var i = 0; i < formularz_obj.length; i++) {
    formularz_obj[i].classList.remove("is-valid");
    if (formularz_obj[i].checked) {
      formularz_obj[i].classList.add("is-valid");
      blad_danych = false;
    }
  }
  return blad_danych;
}
function sprawdzImage() {
  var formularz_obj = document.getElementById("image");
  var t_img = formularz_obj.value;
  var blad = document.getElementById("image_blad");
  var blad_danych;

  if (t_img === "") {
    blad.innerHTML = "Wpisz ściężkę do pliku";
    blad.classList.add("invalid-feedback");
    formularz_obj.classList.add("is-invalid");
    blad.classList.remove("valid-feedback");
    formularz_obj.classList.remove("is-valid");
    blad_danych = true;
  } else {
    blad.classList.remove("invalid-feedback");
    formularz_obj.classList.remove("is-invalid");
    blad.classList.add("valid-feedback");
    formularz_obj.classList.add("is-valid");
    blad.innerHTML = "";
    blad_danych = false;
  }
  return blad_danych;
}
function sprawdzWszystko() {
  var name = sprawdzName();
  var number = sprawdzNumber();
  var netto = sprawdzNetto();
  var vat = sprawdzVat();
  var kategoria = sprawdzKategoria();
  var opcje = sprawdzOpcje();
  var ocena = sprawdzOcene();
  var image = sprawdzImage();
  //console.log("name: "+name+"\nnumber: "+number+"\nnetto: "+netto+"\nvat: "+vat+"\nkategoria: "+kategoria+"\nopcje: "+opcje+"\nocena: "+ocena+"\nimage: "+image)
  if (
    !(name || number || netto || vat || kategoria || opcje || ocena || image)
  ) {
    dodajProdukt();
  }
}
function sprawdzIloscSztuk() {
  var razem = 0;
  var tabSztuki = document.getElementsByName("iloscSztuk");
  var tabCeny = document.getElementsByClassName("cena");
  for (var i = 0; i < tabSztuki.length; i++) {
    //zaokraglanie sztuk do calosci
    tabSztuki[i].value = Math.round(tabSztuki[i].value);
    //pozbywanie sie ujemnych sztuk
    if (tabSztuki[i].value < 0) {
      tabSztuki[i].value = 0;
    }
    razem += tabCeny[i].innerHTML * tabSztuki[i].value;
  }
  //zaokraglanie sumy cen do 2 miejsc
  razem = Math.round((razem + Number.EPSILON) * 100) / 100;

  //dodawanie kosztow przesylki i wyswietlanie ceny
  if (document.getElementById("dostawa").options.selectedIndex == 0) {
    document.getElementById("razem").innerHTML = razem + 10 + " zł";
  } else if (document.getElementById("dostawa").options.selectedIndex == 1) {
    document.getElementById("razem").innerHTML = razem + 15 + " zł";
  } else {
    document.getElementById("razem").innerHTML = razem + 0 + " zł";
  }
}
//koniec walidacji **********************************************************************************

// inicjacja tabel
$("#myTable").tablesorter({ sortList: [[0, 0]] });
$("#tableKoszyk").tablesorter({ sortList: [[0, 0]] });

//zmienne globalne
var nazwaICena = [];

//funkcje obslugi tabeli i koszyka
function dodajProdukt() {
  var name = document.getElementById("name").value;
  var number = document.getElementById("number").value;
  var netto = document.getElementById("netto").value;
  var vat = document.getElementById("vat").value;
  var brutto = document.getElementById("brutto").value;
  var kategoria = document.getElementById("kategoria").value;
  var opcje = document.getElementsByName("opcja");
  var ocena = document.getElementsByName("rate");
  var image = document.getElementById("image").value;

  //sprawdzanie czy produkt o tej nazwie juz istnieje
  var istniejaceProdukty = document.getElementsByClassName("nameInTable");
  for (var i = 0; i < istniejaceProdukty.length; i++) {
    if (istniejaceProdukty[i].innerHTML == name) {
      alert("Taki produkt już istnieje!");
      return false;
    }
  }

  //sprawdzenie ktore opcje i ktora ocena zostala wybrana
  var wybraneOpcje = "";
  var wybranaOcena = "";
  for (var i = 0; i < opcje.length; i++) {
    if (opcje[i].checked) {
      wybraneOpcje += "Opcja " + (i + 1) + "<br/>";
    }
    if (ocena[i].checked) {
      wybranaOcena += i + 1 + "/5";
    }
  }

  //tworzenie wiersza tabeli
  var row =
    '<tr><td class="nameInTable">' +
    name +
    "</td><td>" +
    number +
    "</td><td>" +
    netto +
    "</td><td>" +
    vat +
    "</td><td>" +
    brutto +
    "</td><td>" +
    kategoria +
    "</td><td>" +
    wybraneOpcje +
    "</td><td>" +
    wybranaOcena +
    "</td> <td>" +
    '<img src="' +
    image +
    '" alt="zdjecie produktu" width="100" height="100"></img>' +
    '</td><td><button type="button" class="btn btn-danger" style="margin-bottom: 5px;" title="Usuń wiersz" onClick="usunProdukt()"><i class="icon-cancel"></i></button>' +
    " " +
    '<button type="button" class="btn btn-warning" style="margin-bottom: 5px;" title="Edytuj wiersz" onClick="edytujProdukt()"><i class="icon-pencil"></i></button>' +
    " " +
    '<button type="button" class="btn btn-success" style="margin-bottom: 5px;" title="Dodaj do koszyka" onClick="dodajDoKoszyka()"><i class="icon-basket"></i></button></td></tr>';
  ($row = $(row)), (resort = true);

  //dodawanie wiersza do tabeli
  $("#myTable")
    .find("tbody")
    .append($row)
    .trigger("addRow", [$row, resort])
    .trigger("update");
}
function usunProdukt() {
  $(document.activeElement).closest("tr").remove();
  $("#myTable").trigger("update");
}
function edytujProdukt() {
  //tworzenie tablicy z komorkami wiersza
  var thisRow = $(document.activeElement).closest("tr").find("td");

  document.getElementById("name").value = thisRow[0].innerHTML;
  document.getElementById("number").value = thisRow[1].innerHTML;
  document.getElementById("netto").value = thisRow[2].innerHTML;
  document.getElementById("vat").value = thisRow[3].innerHTML;
  document.getElementById("brutto").value = thisRow[4].innerHTML;
  document.getElementById("kategoria").value = thisRow[5].innerHTML;
  document.getElementById("image").value = $(thisRow[8])
    .find("img")
    .attr("src");

  //odznaczanie wszystkich opcji
  for (var i = 0; i < document.getElementsByName("opcja").length; i++) {
    document.getElementsByName("opcja")[i].checked = false;
  }
  //zaznaczanie odpowiednich opcji
  if (thisRow[6].innerHTML.indexOf("1") != -1)
    document.getElementsByName("opcja")[0].checked = true;
  if (thisRow[6].innerHTML.indexOf("2") != -1)
    document.getElementsByName("opcja")[1].checked = true;
  if (thisRow[6].innerHTML.indexOf("3") != -1)
    document.getElementsByName("opcja")[2].checked = true;
  if (thisRow[6].innerHTML.indexOf("4") != -1)
    document.getElementsByName("opcja")[3].checked = true;
  if (thisRow[6].innerHTML.indexOf("5") != -1)
    document.getElementsByName("opcja")[4].checked = true;
  //walidacja danych
  sprawdzOpcje();

  //zaznaczanie odpowiedniej oceny
  switch (thisRow[7].innerHTML) {
    case "1/5":
      document.getElementsByName("rate")[0].checked = true;
      break;
    case "2/5":
      document.getElementsByName("rate")[1].checked = true;
      break;
    case "3/5":
      document.getElementsByName("rate")[2].checked = true;
      break;
    case "4/5":
      document.getElementsByName("rate")[3].checked = true;
      break;
    case "5/5":
      document.getElementsByName("rate")[4].checked = true;
      break;
  }
  //walidacja danych
  sprawdzOcene();

  //zastapienie przycisku dodaj na edytuj
  document.getElementById("buttonAdd").style.visibility = "hidden";
  document.getElementById("buttonEdit").style.visibility = "visible";
}
function zapiszZmiany() {
  //zamiana przycisku edytuj na dodaj
  document.getElementById("buttonAdd").style.visibility = "visible";
  document.getElementById("buttonEdit").style.visibility = "hidden";

  //usuwanie poprzednich danych z tabeli
  var r = document.getElementById("myTable").rows;
  for (var i = 1; i < r.length; i++) {
    var c = r[i].cells;
    if (c[0].innerHTML === document.getElementById("name").value) {
      r[i].remove();
      break;
    }
  }
  $("#myTable").trigger("update");

  //walidacja danych i dodawanie zmienionego produktu
  sprawdzWszystko();
}
function dodajDoKoszyka() {
  //pobieranie danych o produkcie
  var komorka = $(document.activeElement).closest("tr").find("td");
  var produkt = [komorka[0].innerHTML, komorka[4].innerHTML];

  //sprawdzanie czy produkt jest juz w koszyku
  for (var i = 0; i < nazwaICena.length; i++) {
    if (produkt[0] === nazwaICena[i][0]) {
      alert("Ten produkt jest już w koszyku");
      return false;
    }
  }

  //wrzucanie nowego produktu do pamieci lokalnej
  nazwaICena.push(produkt);
  var zebraneDane = JSON.stringify(nazwaICena);
  localStorage.setItem("koszyk", zebraneDane);

  //pobieranie danych z pamieci lokalnej
  var koszykAktualny = localStorage.getItem("koszyk");
  var daneDoTabelki = JSON.parse(koszykAktualny);

  //tworzenie nowego wiersza w tabelce koszyka
  var row =
    "<tr><td>" +
    daneDoTabelki[daneDoTabelki.length - 1][0] +
    '</td><td class="cena">' +
    daneDoTabelki[daneDoTabelki.length - 1][1] +
    '</td><td><input name="iloscSztuk" type="number" onChange="sprawdzIloscSztuk()" value="1"></td></tr>';
  ($row = $(row)), (resort = true);

  //dodanie produktu do koszyka
  $("#tableKoszyk")
    .find("tbody")
    .append($row)
    .trigger("addRow", [$row, resort])
    .trigger("update");

  //walidacja ilosci sztuk i sumowanie ceny
  sprawdzIloscSztuk();

  //wyswietlenie koszyka
  $("#myModal").modal();
}
function kupProdukty() {
  //czyszczenie pamieci lokalnej
  localStorage.clear();

  //usuwanie wierszy z tabeli koszyka
  $("#tableKoszyk").find("tbody tr").remove();
  $("#tableKoszyk").trigger("update");

  //czyszczenie tabeli pomocniczej
  nazwaICena = [];

  document.getElementById("razem").innerHTML = 0 + " zł";
  alert("Zakup przebiegł pomyślnie!");
}
function funSortowanie() {
  var obj = document.getElementById("sortowanie");
  var sort = obj.value;
  var t = $("#myTable");

  switch (sort) {
    case "cena od najniższej":
      t.trigger("sorton", [[[2, 0]]]);
      break;
    case "cena od najwyższej":
      t.trigger("sorton", [[[2, 1]]]);
      break;
    case "ocena od najniższej":
      t.trigger("sorton", [[[7, 0]]]);
      break;
    case "ocena od najwyższej":
      t.trigger("sorton", [[[7, 1]]]);
      break;
    case "nazwa od A do Z":
      t.trigger("sorton", [[[0, 0]]]);
      break;
    case "nazwa od Z do A":
      t.trigger("sorton", [[[0, 1]]]);
      break;
  }
  zmienWidok();
  zmienWidok();
}
function wczytajDaneZPliku() {
  //pobieranie danych z pliku json
  fetch("./listaProduktow.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      //sprawdzanie czy produkty z pliku zostaly juz dodane
      var istniejaceProdukty = document.getElementsByClassName("nameInTable");
      for (var i = 0; i < istniejaceProdukty.length; i++) {
        if (istniejaceProdukty[i].innerHTML == data[0][0]) {
          alert("Te produkty już są w tabeli!");
          return false;
        }
      }

      //wrzucanie produktow do tabeli
      var name, number, netto, vat, brutto, kategoria, opcje, ocena, image, row;
      for (let i = 0; i < data.length; i++) {
        name = data[i][0];
        number = data[i][1];
        netto = data[i][2];
        vat = data[i][3];
        brutto = data[i][4];
        kategoria = data[i][5];
        opcje = data[i][6];
        ocena = data[i][7];
        image = data[i][8];
        if (image === undefined) image = `./img/product.png`;
        row =
          '<tr><td class="nameInTable">' +
          name +
          "</td><td>" +
          number +
          "</td><td>" +
          netto +
          "</td><td>" +
          vat +
          "</td><td>" +
          brutto +
          "</td><td>" +
          kategoria +
          "</td><td>" +
          opcje +
          "</td><td>" +
          ocena +
          "</td> <td>" +
          '<img src="' +
          image +
          '" alt="zdjecie produktu" width="150" height="150"></img>' +
          '</td><td><button type="button" class="btn btn-danger" style="margin-bottom: 5px;" title="Usuń wiersz" onClick="usunProdukt()"><i class="icon-cancel"></i></button>' +
          " " +
          '<button type="button" class="btn btn-warning" style="margin-bottom: 5px;" title="Edytuj wiersz" onClick="edytujProdukt()"><i class="icon-pencil"></i></button>' +
          " " +
          '<button type="button" class="btn btn-success" style="margin-bottom: 5px;" title="Dodaj do koszyka" onClick="dodajDoKoszyka()"><i class="icon-basket"></i></button></td></tr>';
        ($row = $(row)), (resort = true);

        //dodawanie wiersza do tabeli
        $("#myTable")
          .find("tbody")
          .append($row)
          .trigger("addRow", [$row, resort])
          .trigger("update");
      }
    });
}
function zmienWidok() {
  if (document.getElementById("myTable").style.visibility === "collapse") {
    document.getElementById("myTable").style.visibility = "visible";
    document.getElementById("kafelki").style.visibility = "collapse";
    document.getElementById("kafelki").innerHTML = "";
  } else {
    document.getElementById("myTable").style.visibility = "collapse";
    document.getElementById("kafelki").style.visibility = "visible";
    for (let i = 1; i < document.getElementById("myTable").rows.length; i++) {
      var name = document.getElementById("myTable").rows[i].cells[0].innerHTML;
      var netto = document.getElementById("myTable").rows[i].cells[2].innerHTML;
      var brutto = document.getElementById("myTable").rows[i].cells[4]
        .innerHTML;
      var image = document.getElementById("myTable").rows[i].cells[8].innerHTML;
      document.getElementById(
        "kafelki"
      ).innerHTML += `<div class="col-xl-3 col-lg-4 col-sm-3 col-6" style="padding: 10px;">
    ${image}<br>${name}<br>${netto}zł (${brutto}zł)</div>`;
    }
  }
}

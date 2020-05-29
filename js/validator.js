//walidacja
function sprawdzName(){
    var formularz_obj=document.getElementById("name");
    var t_name = formularz_obj.value;
    var blad = document.getElementById("name_blad");
    var blad_danych;

    if (t_name === "") {
        blad.innerHTML = "Podaj nazwę towaru"; 
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=true; 
    }
    else if (t_name.length > 10){
        blad.innerHTML = "Zadługa nazwa (max 10 znakow)"; 
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=true; 
    }
    else if(t_name.match(/^[0-9]+$/)){
        blad.innerHTML = "W nazwie nie mogą znajdować się cyfry."; 
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=true; 
    }
    else{
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = ""; 
        blad_danych=false;
    }
    return blad_danych;
}
function sprawdzNumber(){
    var formularz_obj=document.getElementById("number");
    var t_number = formularz_obj.value;
    var blad = document.getElementById("number_blad");
    var blad_danych;

    if (t_number === ""){
        blad.innerHTML = "Podaj kod towaru"; 
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=true; 
    }
    else if (!(t_number.match(/^[a-zA-Z0-9]{2}-[a-zA-Z0-9]{2}$/))){
        blad.innerHTML = "Zły format kodu"; 
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=true; 
    }
    else{
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = ""; 
        blad_danych=false;
    }
    return blad_danych;
}
function sprawdzNetto(){
    var formularz_obj=document.getElementById("netto");
    var t_netto = formularz_obj.value;
    var blad = document.getElementById("netto_blad");
    var blad_danych;

    if (t_netto === ""){
        blad.innerHTML = "Podaj cenę towaru"; 
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=true; 
    }
    else if (!t_netto.match(/^[0-9]+(\.[0-9]{1,2})?$/)){
        blad.innerHTML = "Źle wpisana kwota"; 
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=true; 
    }
    else if(t_netto.match(/^[0-9]+$/)){
        formularz_obj.value = formularz_obj.value+".00";
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych=false;
    }
    else{
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych=false;
    }
    return blad_danych;
}
function sprawdzVat(){
    var formularz_obj=document.getElementById("vat");
    var t_vat = formularz_obj.value;
    var blad = document.getElementById("vat_blad");
    var blad_danych;

    if (t_vat === ""){
        blad.innerHTML = "Podaj wartość vat"; 
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=true; 
    }
    else if (!t_vat.match(/^[0-9]+$/)){
        blad.innerHTML = "Źle wpisana kwota"; 
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=true; 
    }
    else{
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych=false;
    }
    return blad_danych;
}
function dodajBrutto(){
    var formularz_obj=document.getElementById("brutto");
    var t_brutto = formularz_obj.value;

    var formularz_obj2=document.getElementById("netto");
    var t_netto = formularz_obj2.value;

    var formularz_obj3=document.getElementById("vat");
    var t_vat = formularz_obj3.value;

    t_vat = ((t_vat * 0.01)+1);
    t_brutto = (t_netto * t_vat);
    
    //zaokraglanie do 2 miejsc
    var factor = Math.pow(10, 2);
    t_brutto = Math.round(t_brutto*factor)/factor;

    formularz_obj.value = t_brutto;
}
function sprawdzKategoria(){
    var formularz_obj=document.getElementById("kategoria");
    var t_kategoria = formularz_obj.value;
    var blad = document.getElementById("kategoria_blad");
    var blad_danych;

    if (t_kategoria === "Wybierz..."){
        blad.innerHTML = "Wybierz kategorie"; 
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=true; 
    }
    else{
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych=false;
    }
    return blad_danych;
}
function sprawdzOpcje(){
    var formularz_obj=document.getElementsByName("opcja");
    var blad = document.getElementById("opcje_blad");
    var blad_danych;
    var licznik=0;

    for(var i=0; i<formularz_obj.length;i++){
        formularz_obj[i].classList.remove("is-valid");
        formularz_obj[i].classList.remove("is-invalid");
        if (formularz_obj[i].checked){
            licznik++;
        }
    }
    if(licznik<2){
        for(var i=0; i<formularz_obj.length;i++){
            if (formularz_obj[i].checked){
                formularz_obj[i].classList.add("is-invalid");
            }
        }
        blad.innerHTML = "Zaznacz conajmniej 2 opcje"; 
        blad.classList.add("invalid-feedback");
        blad.classList.remove("valid-feedback");
        blad_danych=true;
    }
    else{
        for(var i=0; i<formularz_obj.length;i++){
            if (formularz_obj[i].checked){
                formularz_obj[i].classList.add("is-valid");
            }
        }
        blad.classList.remove("invalid-feedback");
        blad.classList.add("valid-feedback");
        blad.innerHTML = "";
        blad_danych=false;
    }
    return blad_danych;
}
function sprawdzOcene(){
    var formularz_obj=document.getElementsByName("rate");
    var blad_danych=true;

    for(var i=0; i<formularz_obj.length;i++){
        formularz_obj[i].classList.remove("is-valid");
        if (formularz_obj[i].checked){
            formularz_obj[i].classList.add("is-valid");
            blad_danych=false;
        }
    }
    return blad_danych;
}
function sprawdzImage(){
    var formularz_obj=document.getElementById("image");
    var t_img = formularz_obj.value;
    var blad = document.getElementById("image_blad");
    var blad_danych;

    if (t_img === "") {
        blad.innerHTML = "Wpisz ściężkę do pliku"; 
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=true; 
    }
    else{
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = ""; 
        blad_danych=false;
    }
    return blad_danych;
}
function sprawdzWszystko(){
    var name = sprawdzName();
    var number = sprawdzNumber();
    var netto = sprawdzNetto();
    var vat = sprawdzVat();
    var kategoria = sprawdzKategoria();
    var opcje = sprawdzOpcje();
    var ocena = sprawdzOcene();
    var image = sprawdzImage();
    //console.log(name, number, netto, vat, kategoria, opcje, ocena, image)
    if(!(name || number || netto || vat || kategoria || opcje || ocena || image)){
        obslugaTabeli();
    }
}
function sprawdzIloscSztuk(){
    var razem=0;
    var tabSztuki = document.getElementsByName("iloscSztuk");
    var tabCeny = document.getElementsByClassName("cena");
    var factor = Math.pow(10, 0);
    for(var i=0;i<tabSztuki.length;i++){
        tabSztuki[i].value = Math.round(tabSztuki[i].value)/factor;
        razem += tabCeny[i].innerHTML*tabSztuki[i].value;
    }
    
    if(document.getElementById("dostawa").options.selectedIndex==0){
        document.getElementById("razem").innerHTML = razem + 10 + " zł";
    }
    else if(document.getElementById("dostawa").options.selectedIndex==1){
        document.getElementById("razem").innerHTML = razem + 15 + " zł";
    }
    else{
        document.getElementById("razem").innerHTML = razem + 0 + " zł";
    }
}
//koniec walidacji **********************************************************************************

$("#myTable").tablesorter({ sortList: [[0,0]] });

function obslugaTabeli(){
    var name = document.getElementById("name").value;
    var istniejaceProdukty = document.getElementsByClassName("nameInTable");
    for(var i=0; i<istniejaceProdukty.length; i++){
        if(istniejaceProdukty[i].innerHTML==name){
            alert("Taki produkt już istnieje!");
            return false;
        }
    }

    var number = document.getElementById("number").value;
    var netto = document.getElementById("netto").value;
    var vat = document.getElementById("vat").value;
    var brutto =  document.getElementById("brutto").value;
    var kategoria = document.getElementById("kategoria").value;
    var opcje = document.getElementsByName("opcja");
    var ocena = document.getElementsByName("rate");
    var image = document.getElementById("image").value;
    var wybraneOpcje="";
    var wybranaOcena="";
    for(var i=0; i<opcje.length;i++){
        if (opcje[i].checked){
            wybraneOpcje += "Opcja " + (i+1) + "<br/>";
        }
        if (ocena[i].checked){
            wybranaOcena += (i+1) + "/5";
        }
    }

    var row = '<tr><td class="nameInTable">'+name+'</td><td>'+number+'</td><td>'+netto+'</td><td>'+vat+'</td><td>'+brutto+'</td><td>'+kategoria+'</td><td>'+wybraneOpcje+'</td><td>'+wybranaOcena+'</td> <td>'+image+'</td><td><button type="button" class="removeRow btn btn-danger" style="margin-bottom: 5px;" title="Usuń wiersz"><i class="icon-cancel"></i></button>'+" "+'<button type="button" class="edit btn btn-warning" style="margin-bottom: 5px;" title="Edytuj wiersz"><i class="icon-pencil"></i></button>'+" "+'<button type="button" class="koszyk btn btn-success" style="margin-bottom: 5px;" title="Dodaj do koszyka"><i class="icon-basket"></i></button></td></tr>';
    $row = $(row),
    resort = true;

    //dodaj produk
    $('#myTable')
        .find('tbody').append($row)
        .trigger('addRow', [$row, resort])
        .trigger('update');

    //usun produkt
    $('#myTable').delegate('button.removeRow', 'click',
    function() {
        var t = $('#myTable');
        $(this).closest('tr').remove();
        t.trigger('update');
    });
    //usun produkt
    $('#tableKoszyk').delegate('button.removeProduct', 'click',
    function() {
        var t = $('#tableKoszyk');
        $(this).closest('tr').remove();
        localStorage.removeItem('koszyk', );
        t.trigger('update');
    });

    //edytuj produkt
    $('button.edit').click(function() {
        var thisRow = $(this).closest('tr').find('td');
        document.getElementById("name").value = thisRow[0].innerHTML;
        document.getElementById("number").value = thisRow[1].innerHTML;
        document.getElementById("netto").value = thisRow[2].innerHTML;
        document.getElementById("vat").value = thisRow[3].innerHTML;
        document.getElementById("brutto").value = thisRow[4].innerHTML;
        document.getElementById("kategoria").value = thisRow[5].innerHTML;
        document.getElementById("image").value = thisRow[8].innerHTML;

        for(var i=0;i<document.getElementsByName("opcja").length;i++){
            document.getElementsByName("opcja")[i].checked=false
        }
        if(thisRow[6].innerHTML.indexOf("1")!=-1)
            document.getElementsByName("opcja")[0].checked=true;
        if (thisRow[6].innerHTML.indexOf("2")!=-1)
            document.getElementsByName("opcja")[1].checked=true;
        if (thisRow[6].innerHTML.indexOf("3")!=-1)
            document.getElementsByName("opcja")[2].checked=true;
        if (thisRow[6].innerHTML.indexOf("4")!=-1)
            document.getElementsByName("opcja")[3].checked=true;
        if (thisRow[6].innerHTML.indexOf("5")!=-1)
            document.getElementsByName("opcja")[4].checked=true;
        sprawdzOpcje()

        switch (thisRow[7].innerHTML){
            case "1/5":
                document.getElementsByName("rate")[0].checked=true;
                break;
            case "2/5":
                document.getElementsByName("rate")[1].checked=true;
                break;
            case "3/5":
                document.getElementsByName("rate")[2].checked=true;
                break;
            case "4/5":
                document.getElementsByName("rate")[3].checked=true;
                break;
            case "5/5":
                document.getElementsByName("rate")[4].checked=true;
                break;
        }
        sprawdzOcene()
        document.getElementById("buttonAdd").style.visibility = "hidden";
        document.getElementById("buttonEdit").style.visibility = "visible";
        $('#buttonEdit').click(function() {
            document.getElementById("buttonAdd").style.visibility = "visible";
            document.getElementById("buttonEdit").style.visibility = "hidden";
            var r = document.getElementById("myTable").rows;
            for(var i=1; i<r.length; i++){
                var c = r[i].cells;
                if(c[0].innerHTML===document.getElementById("name").value){
                    r[i].remove();
                    break;
                }
            }
            $('#myTable').trigger('update');
            sprawdzWszystko();
        });
    });

    //dodaj do koszyka
    $('button.koszyk').click(function() {
        var komorka = $(this).closest('tr').find('td');
        var produkt = [komorka[0].innerHTML, komorka[4].innerHTML]
        for(var i=0;i<nazwaICena.length;i++){
            if(produkt[0]===nazwaICena[i][0]){
                alert("Ten produkt jest już w koszyku")
                return false;
            }
        }
        nazwaICena.push(produkt);
        var zebraneDane = JSON.stringify(nazwaICena);
        localStorage.setItem('koszyk', zebraneDane);

        var koszykAktualny = localStorage.getItem('koszyk');
        var daneDoTabelki = JSON.parse(koszykAktualny);

        $("#tableKoszyk").tablesorter({ sortList: [[0,0]] });
        var row = '<tr><td>'+daneDoTabelki[daneDoTabelki.length-1][0]+'</td><td class="cena">'+daneDoTabelki[daneDoTabelki.length-1][1]+'</td><td><input name="iloscSztuk" type="number" onChange="sprawdzIloscSztuk()" value="1"></td></tr>'
        $row = $(row),
        resort = true;
        $("#tableKoszyk")
            .find('tbody').append($row)
            .trigger('addRow', [$row, resort])
            .trigger('update');
        sprawdzIloscSztuk()
        $("#myModal").modal()
    });

    $("#kup").click(function() {
        localStorage.clear();
        $('#tableKoszyk').find('tbody tr').remove();
        $('#tableKoszyk').trigger('update');
        document.getElementById("razem").innerHTML = 0 + " zł";
        alert("Zakup przebiegł pomyślnie!");
    });
    return false;
}
var nazwaICena = [];

function funSortowanie(){
    var obj=document.getElementById("sortowanie");
    var sort = obj.value;
    if(sort == "cena od najniższej"){
        $('#myTable').trigger("sorton", [ [[2,0]] ]);
    }
    if(sort == "cena od najwyższej"){
        $('#myTable').trigger("sorton", [ [[2,1]] ]);
    }
    if(sort == "ocena od najniższej"){
        $('#myTable').trigger("sorton", [ [[7,0]] ]);
    }
    if(sort == "ocena od najwyższej"){
        $('#myTable').trigger("sorton", [ [[7,1]] ]);
    }
    if(sort == "nazwa od A do Z"){
        $('#myTable').trigger("sorton", [ [[0,0]] ]);
    }
    if(sort == "nazwa od Z do A"){
        $('#myTable').trigger("sorton", [ [[0,1]] ]);
    }
    
}
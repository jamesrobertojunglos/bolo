$("#bBater,#bAssar,#bCobertura,#bApresentar").css("display", "none");

function fIngrediente() {
    console.log("Ingredientes");
    $("#iIngrediente").removeClass("ingrediente");
    $("#iIngrediente").addClass("ingrediente-add");
    $("#bBater").css("display", "inline");
  }

  function fBater() {
    console.log("Bater");
    $("#iBatedeira,#iMassa").css("display", "block");
    $("#bAssar").css("display", "inline");
    $("#iForma,#iIngrediente").css("display", "none");
  }

  function fAssar() {
    console.log("Assar");
    $("#iBatedeira,#iMassa").css("display", "none");
    $("#iForno,#iBoloAssado").css("display", "block");
    $("#bCobertura").css("display", "inline");
  }

  function fCobertura() {
    console.log("Cobertura");
    $("#dFornecedor").load("cobertura.php", function(response,status,xhr){
        console.log(status);
    });
    $("#iForno").css("display", "none");
    $("#bApresentar").css("display", "inline");
  }

  function fApresentar() {
    $("#dCozinha").css("display", "none");
    $("#dBolo").css("display", "Block");
  }
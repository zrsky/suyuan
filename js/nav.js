  console.log($("#main li"))
    $(".search i").on("click", function(e) {
        $("#drop").css({ 'display': 'block' })
        // alert(111)
        e.stopPropagation();
        e.returnValue = false;
    })
    $(".search #main li").on("click", function(e) {
        $("#drop").css({ 'display': 'block' })
        // alert(111)
        e.stopPropagation();
        e.returnValue = false;
    })
    $(document).on("click", function(e) {
        $("#drop").css({ 'display': 'none' })
        e.stopPropagation();
        e.returnValue = false;
    })
    $("#drop li").on("click", function(e) {
        $("#main li").eq(0).html($(this).html())
        $("#drop").css({ 'display': 'none' })
        e.stopPropagation();
        e.returnValue = false;
    })
function validate(gdgform)
{
    var messages = [];
    if (document.gdgform.name.value=="")
    {
        messages.push("Compilare il campo nome.");
    }
    if (document.gdgform.surname.value=="")
    {
        messages.push("Compilare il campo cognome.");
    }
    if (document.gdgform.email.value==""){
        messages.push("Compilare il campo email.");
    }
    if (messages.length > 0) {
        window.alert(messages.join("\n"));
        return false;
    } else {
        return true;
    }
}

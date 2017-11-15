$(document).ready(function () {

    
    const fnid: String = "#firstName";
    const fnmand: String = "#firstNameMandatory";
    const lnid: String = "#lastName";
    const lnmand: String = "#lastNameMandatory";
    const email: String = "#email";
    const emailmand: String = "#emailMandatory";
    const medchansel: String = "#mediaChannelSelect";
    const othmedchansel: String = "#otherMediaChannel";
    const newsl: String = "#newsletter";
    let sbm: number = -1;
    let emailnwscond: Boolean = false;



    createForm();



    function createForm() {
        $(':input[type="submit"]').prop('disabled', true);        
        $(othmedchansel).hide();
        $(emailmand).hide();
        
    }



    $(document).change(function() 
    {
        let corr: Boolean = sbm ? true : false;            
        $(':input[type="submit"]').prop('disabled', !!!corr); 
    }
    );



    $(fnid).change(function()
    {
        let cond: Boolean = $(fnid).val() === "";
        alert(fnmand, cond);
        cond ? sbm-- : sbm++;
    }
    );



    $(lnmand).change(function()
    {
        let cond: Boolean = $(lnid).val() === "";
        alert(lnmand, cond);
        cond ? sbm-- : sbm++;
    }
    );



    $(email + ',' + newsl).change(function()
    {
        let cond1: Boolean = $(email).val() === "";
        let cond2: Boolean = $(newsl).is(':checked');
        alert(emailmand, cond1 && cond2);
        if(cond1 && cond2){
            sbm = sbm-1;
        }else if((!!!cond1 || !!!cond2) && emailnwscond){
            sbm = sbm+1;
        }        
        emailnwscond = cond1 && cond2;        
    }
    );



    $(medchansel).change(function()
    {
        let cond: Boolean = $(medchansel).val() === "Other";
        alert(othmedchansel, cond);
    }
    );

    

    function alert(str: String, cond: Boolean)
    {
        cond ? $(str).show() : $(str).hide();
    }

});
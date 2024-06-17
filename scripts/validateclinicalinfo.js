try {
    function validateclinicalinfo() {
        let clinicdate = document.forms.clinicalinfo.clinicdate.value;
        let personcompletingf = document.forms.clinicalinfo.personcompletingf.value;
        let healthprovider = document.forms.clinicalinfo.healthprovider.value;
        let contactphone = document.forms.clinicalinfo.contactphone.value;
        let name = document.forms.clinicalinfo.name.value;
        let dob = document.forms.clinicalinfo.dob.value;
        let gender = document.forms.clinicalinfo.gender.value;
        let ethnicity = document.forms.clinicalinfo.ethnicity.value;
        let race = document.forms.clinicalinfo.race.value;
        let partnergender = document.forms.clinicalinfo.partner-gender.value;
        let testresult = document.forms.clinicalinfo.test-result.value;
        let examreason = document.forms.clinicalinfo.exam-reason.value;
        let diagnosis = document.forms.clinicalinfo.diagnosis.value;
        let sites = document.forms.clinicalinfo.sites.value;

        // input forms  validation
        if(!clinicdate){
            document.getElementById('clinicdateErr').innerHTML = "<br/>Clinic date is required";
            document.forms.clinicalinfo.clinicdate.focus();
            return false;
        }
        else {
            document.getElementById('clinicdateErr').innerHTML = ""; // clears error message
        }

        if(!personcompletingf){
            document.getElementById('personcompletingfErr').innerHTML = "Person's name completing the form is required";
            document.forms.clinicalinfo.personcompletingf.focus();
            return false;
        }
        else {
            document.getElementById('personcompletingfErr').innerHTML = "";
        }

        if(!healthprovider){
            document.getElementById('healthproviderErr').innerHTML = "Health provider is required";
            document.forms.clinicalinfo.healthprovider.focus();
            return false;
        }
        else {
            document.getElementById('healthproviderErr').innerHTML = "";
        }

        if(!contactphone){
            document.getElementById('contactphoneErr').innerHTML = "Contact's phone number is required";
            document.forms.clinicalinfo.contactphone.focus();
            return false;
        }
        else {
            document.getElementById('contactphoneErr').innerHTML = "";
        }

        if(!name){
            document.getElementById('patient-nameErr').innerHTML = "<br/>Patient name is required";
            document.forms.clinicalinfo.name.focus();
            return false;
        }
        else {
            document.getElementById('patient-nameErr').innerHTML = "";
        }

        if(!dob){
            document.getElementById('patient-dobErr').innerHTML = "<br/>Date of Birth is required";
            document.forms.clinicalinfo.dob.focus();
            return false;
        }
        else {
            document.getElementById('patient-dobErr').innerHTML = "";
        }

        if(!gender){
            document.getElementById('genderErr').innerHTML = "<br/>Gender is required";
            document.forms.clinicalinfo.gender.focus();
            return false;
        }
        else {
            document.getElementById('genderErr').innerHTML = "";
        }

        if(!ethnicity){
            document.getElementById('ethnicityErr').innerHTML = "<br/>Ethnicity is required";
            document.forms.clinicalinfo.ethnicity.focus();
            return false;
        }
        else {
            document.getElementById('ethnicityErr').innerHTML = "";
        }

        if(!race){
            document.getElementById('raceErr').innerHTML = "<br/>Race is required";
            document.forms.clinicalinfo.race.focus();
            return false;
        }
        else {
            document.getElementById('raceErr').innerHTML = "";
        }

        if(!partnergender){
            document.getElementById('partner-genderErr').innerHTML = "<br/>Partner's gender is required";
            document.forms.clinicalinfo.partner-gender.focus();
            return false;
        }
        else {
            document.getElementById('partner-genderErr').innerHTML = "";
        }

        if(!testresult){
            document.getElementById('test-resultErr').innerHTML = "<br/>Test result is required";
            document.forms.clinicalinfo.test-result.focus();
            return false;
        }
        else {
            document.getElementById('test-resultErr').innerHTML = "";
        }

        if(!examreason){
            document.getElementById('exam-reasonErr').innerHTML = "<br/>Exam reason is required";
            document.forms.clinicalinfo.exam-reason.focus();
            return false;
        }
        else {
            document.getElementById('exam-reasonErr').innerHTML = "";
        }

        if(!diagnosis){
            document.getElementById('diagnosisErr').innerHTML = "<br/>Diagnosis is required";
            document.forms.clinicalinfo.diagnosis.focus();
            return false;
        }
        else {
            document.getElementById('diagnosisErr').innerHTML = "";
        }

        if(!sites){
            document.getElementById('sitesErr').innerHTML = "<br/>Sites is required";
            document.forms.clinicalinfo.sites.focus();
            return false;
        }
        else {
            document.getElementById('sitesErr').innerHTML = "";
        }
    }
    function validatecdate() {
        // Regular expression for dd/mm/yyyy format (with leap year support)
        let datePattern = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
    
        let clinicdate = document.forms.clinicalinfo.clinicdate.value;
    
        if (clinicdate) {
            // Check if the date matches the pattern
            let isValid = datePattern.test(clinicdate);
    
            if (!isValid) {
                document.getElementById('clinicdateErr').innerHTML = "<br/>Date can only be in the dd/mm/yyyy pattern";
                document.forms.clinicalinfo.clinicdate.focus();
            } else {
                // Additional leap year validation (check if February has 29 days in leap years)
                let [day, month, year] = clinicdate.split('/');
                day = parseInt(day, 10);
                month = parseInt(month, 10);
                year = parseInt(year, 10);
    
                if (month === 2 && day === 29 && !isLeapYear(year)) {
                    document.getElementById('clinicdateErr').innerHTML = "<br/>Invalid date: February cannot have 29 days in this year.";
                    document.forms.clinicalinfo.clinicdate.focus();
                } else {
                    document.getElementById('clinicdateErr').innerHTML = "";
                }
            }
        }
    }
    
    // Helper function to check if a year is a leap year
    function isLeapYear(year) {
        return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
    }
    

    function validatepn() {
        //Regular Expression for name
        let namepattern = /^[A-Za-z\s]*$/;
        let name = document.forms.clinicalinfo.name.value;
        if(name) {
            // check if the name matches the pattern
            let x = namepattern.test(name);
            if(x==false) {
                document.getElementById('patient-nameErr').innerHTML = "<br/> Patient name should only contain letters and whitespace";
                document.forms.clinicalinfo.name.focus();
            }
            else {
                document.getElementById('patient-nameErr').innerHTML = "";
            }
        }
    }

}
catch(err) {
    window.alert(err.message)
}
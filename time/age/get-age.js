function updateTimer() {

    var today = new Date();
    var birthDate = new Date('2014/07/03');
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    var da = today.getDate() - birthDate.getDate();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (m < 0) {
        m += 12;
    }
    if (da < 0) {
        da += 30;
    }
    var age_years = age;
    var age_months = Math.abs(m);
    var age_days = Math.abs(da);

    document.getElementById("timer")
        .innerHTML =
        '<div>' + age_years + '<span>Years</span></div>' +
        '<div>' + age_months + '<span>Months</span></div>' +
        '<div>' + age_days + '<span>Days</span></div>';
        updateTimer()
}

function CalculateAge(DobString) {


    $("#age").val(getAge(DobString));
}

 function getAge(dateString) {
        var now = new Date('2019/01/20');
        var today = new Date(now.getYear(), now.getMonth(), now.getDate());

        var yearNow = now.getYear();
        var monthNow = now.getMonth();
        var dateNow = now.getDate();

        var dob = new Date(dateString.substring(6, 10),
                           dateString.substring(3, 5) - 1,
                           dateString.substring(0, 2) 
                           );

        var yearDob = dob.getYear();
        var monthDob = dob.getMonth();
        var dateDob = dob.getDate();
        var age = {};
        var ageString = "";
        var yearString = "";
        var monthString = "";
        var dayString = "";


        yearAge = yearNow - yearDob;

        if (monthNow >= monthDob)
            var monthAge = monthNow - monthDob;
        else {
            yearAge--;
            var monthAge = 12 + monthNow - monthDob;
        }

        if (dateNow >= dateDob)
            var dateAge = dateNow - dateDob;
        else {
            monthAge--;
            var dateAge = 31 + dateNow - dateDob;

            if (monthAge < 0) {
                monthAge = 11;
                yearAge--;
            }
        }

        age = {
            years: yearAge,
            months: monthAge,
            days: dateAge
        };

        if (age.years > 1) yearString = " years";
        else yearString = " year";
        if (age.months > 1) monthString = " months";
        else monthString = " month";
        if (age.days > 1) dayString = " days";
        else dayString = " day";


        if ((age.years > 0) && (age.months > 0) && (age.days > 0))
            ageString = age.years + yearString + ", " + age.months + monthString + " " + age.days + dayString + " ";
        else if ((age.years == 0) && (age.months == 0) && (age.days > 0))
            ageString = " " + age.days + dayString + " ";
        else if ((age.years > 0) && (age.months == 0) && (age.days == 0))
            ageString = age.years + yearString + " ";
        else if ((age.years > 0) && (age.months > 0) && (age.days == 0))
            ageString = age.years + yearString + "  " + age.months + monthString + " ";
        else if ((age.years == 0) && (age.months > 0) && (age.days > 0))
            ageString = age.months + monthString + " " + age.days + dayString + " ";
        else if ((age.years > 0) && (age.months == 0) && (age.days > 0))
            ageString = age.years + yearString + " " + age.days + dayString + " ";
        else if ((age.years == 0) && (age.months > 0) && (age.days == 0))
            ageString = age.months + monthString + " ";
        else ageString = "Oops! Could not calculate age!";

        return ageString;
    }
 







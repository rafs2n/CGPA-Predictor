var counter = 1;

var current_sum;
var current_credit;
var total_sum;
var total_credit;
var est_cgpa;

$(document).ready(function () {
  $("#result").hide();
  $("#current_sem").hide();
  $("#course_1").hide();
  $("#course_2").hide();
  $("#course_3").hide();
  $("#course_4").hide();
  $("#course_5").hide();
  $("#course_6").hide();
  $("#course_7").hide();
  $("#course_8").hide();
  $("#calculate_btn").hide();
  $("#again_btn").hide();
  $("#back_btn").hide();
});

$("#next_btn").click(function () {
  if (counter == 1) {
    if ($("#credit_completed").val() != "" && $("#current_cgpa").val() != "") {
      $("#previous_sem").slideUp();
      $("#current_sem").show();
      $("#back_btn").show();
      counter++;
    } else {
      alert("Oopss! Seems you forgot to fill up the fields!");
    }
  } else if (counter == 2) {
    if ($("#course_selector").val() != "") {
      $("#current_sem").slideUp();
      $("#calculate_btn").show();
      $("#back_btn").show();
      $("#next_btn").hide();

      if ($("#course_selector").val() == 1) {
        $("#course_1").show();
      } else if ($("#course_selector").val() == 2) {
        $("#course_1").show();
        $("#course_2").show();
      } else if ($("#course_selector").val() == 3) {
        $("#course_1").show();
        $("#course_2").show();
        $("#course_3").show();
      } else if ($("#course_selector").val() == 4) {
        $("#course_1").show();
        $("#course_2").show();
        $("#course_3").show();
        $("#course_4").show();
      } else if ($("#course_selector").val() == 5) {
        $("#course_1").show();
        $("#course_2").show();
        $("#course_3").show();
        $("#course_4").show();
        $("#course_5").show();
      } else if ($("#course_selector").val() == 6) {
        $("#course_1").show();
        $("#course_2").show();
        $("#course_3").show();
        $("#course_4").show();
        $("#course_5").show();
        $("#course_6").show();
      } else if ($("#course_selector").val() == 7) {
        $("#course_1").show();
        $("#course_2").show();
        $("#course_3").show();
        $("#course_4").show();
        $("#course_5").show();
        $("#course_6").show();
        $("#course_7").show();
      } else if ($("#course_selector").val() == 8) {
        $("#course_1").show();
        $("#course_2").show();
        $("#course_3").show();
        $("#course_4").show();
        $("#course_5").show();
        $("#course_6").show();
        $("#course_7").show();
        $("#course_8").show();
      }
    } else {
      alert("Oopss! Seems you forgot to choose!");
    }
  }
  $("#back_btn").click(function () {
    location.reload();
  });
});

/*Input Data Finish*/

$("#calculate_btn").click(function () {
  var credit_completed = $("#credit_completed").val();
  var current_cgpa = $("#current_cgpa").val();

  credit_completed = parseFloat(credit_completed);
  current_cgpa = parseFloat(current_cgpa);

  if ($("#course_selector").val() == 1) {
    if ($("#credit_1").val() != "" && $("#grade_1").val() != "") {
      var c1_credit = $("#credit_1").val();
      var c1_grade = $("#grade_1").val();

      c1_credit = parseFloat(c1_credit);
      c1_grade = parseFloat(c1_grade);

      current_sum = c1_credit * c1_grade;
      current_credit = c1_credit;

      total_sum = current_sum + credit_completed * current_cgpa;
      total_credit = credit_completed + c1_credit;

      est_cgpa = total_sum / total_credit;

      $("#est_cgpa").val(Math.round(est_cgpa * 100) / 100);
      $("#total_credit").val(total_credit);
      $("#course_1").hide();
      $("#result").show();
      $("#calculate_btn").hide();
      $("#back_btn").hide();
      $("#again_btn").show();
    } else {
      alert("Oopss! Kindly fill up all the fields!");
    }
  } else if ($("#course_selector").val() == 2) {
    if (
      $("#credit_1").val() != "" &&
      $("#grade_1").val() != "" &&
      $("#credit_2").val() != "" &&
      $("#grade_2").val() != ""
    ) {
      var c1_credit = $("#credit_1").val();
      var c1_grade = $("#grade_1").val();

      var c2_credit = $("#credit_2").val();
      var c2_grade = $("#grade_2").val();

      c1_credit = parseFloat(c1_credit);
      c1_grade = parseFloat(c1_grade);

      c2_credit = parseFloat(c2_credit);
      c2_grade = parseFloat(c2_grade);

      current_sum = c1_credit * c1_grade + c2_credit * c2_grade;
      current_credit = c1_credit + c2_credit;

      total_sum = current_sum + credit_completed * current_cgpa;
      total_credit = credit_completed + current_credit;

      est_cgpa = total_sum / total_credit;

      $("#est_cgpa").val(Math.round(est_cgpa * 100) / 100);
      $("#total_credit").val(total_credit);
      $("#course_1").hide();
      $("#course_2").hide();
      $("#result").show();
      $("#calculate_btn").hide();
      $("#back_btn").hide();
      $("#again_btn").show();
    } else {
      alert("Oopss! Kindly fill up all the fields!");
    }
  } else if ($("#course_selector").val() == 3) {
    if (
      $("#credit_1").val() != "" &&
      $("#grade_1").val() != "" &&
      $("#credit_2").val() != "" &&
      $("#grade_2").val() != "" &&
      $("#credit_3").val() != "" &&
      $("#grade_3").val() != ""
    ) {
      var c1_credit = $("#credit_1").val();
      var c1_grade = $("#grade_1").val();

      var c2_credit = $("#credit_2").val();
      var c2_grade = $("#grade_2").val();

      var c3_credit = $("#credit_3").val();
      var c3_grade = $("#grade_3").val();

      c1_credit = parseFloat(c1_credit);
      c1_grade = parseFloat(c1_grade);

      c2_credit = parseFloat(c2_credit);
      c2_grade = parseFloat(c2_grade);

      c3_credit = parseFloat(c3_credit);
      c3_grade = parseFloat(c3_grade);

      current_sum =
        c1_credit * c1_grade + c2_credit * c2_grade + c3_credit * c3_grade;
      current_credit = c1_credit + c2_credit + c3_credit;

      total_sum = current_sum + credit_completed * current_cgpa;
      total_credit = credit_completed + current_credit;

      est_cgpa = total_sum / total_credit;

      $("#est_cgpa").val(Math.round(est_cgpa * 100) / 100);
      $("#total_credit").val(total_credit);
      $("#course_1").hide();
      $("#course_2").hide();
      $("#course_3").hide();
      $("#result").show();
      $("#calculate_btn").hide();
      $("#back_btn").hide();
      $("#again_btn").show();
    } else {
      alert("Oopss! Kindly fill up all the fields!");
    }
  } else if ($("#course_selector").val() == 4) {
    if (
      $("#credit_1").val() != "" &&
      $("#grade_1").val() != "" &&
      $("#credit_2").val() != "" &&
      $("#grade_2").val() != "" &&
      $("#credit_3").val() != "" &&
      $("#grade_3").val() != "" &&
      $("#credit_4").val() != "" &&
      $("#grade_4").val() != ""
    ) {
      var c1_credit = $("#credit_1").val();
      var c1_grade = $("#grade_1").val();

      var c2_credit = $("#credit_2").val();
      var c2_grade = $("#grade_2").val();

      var c3_credit = $("#credit_3").val();
      var c3_grade = $("#grade_3").val();

      var c4_credit = $("#credit_4").val();
      var c4_grade = $("#grade_4").val();

      c1_credit = parseFloat(c1_credit);
      c1_grade = parseFloat(c1_grade);

      c2_credit = parseFloat(c2_credit);
      c2_grade = parseFloat(c2_grade);

      c3_credit = parseFloat(c3_credit);
      c3_grade = parseFloat(c3_grade);

      c4_credit = parseFloat(c4_credit);
      c4_grade = parseFloat(c4_grade);

      current_sum =
        c1_credit * c1_grade +
        c2_credit * c2_grade +
        c3_credit * c3_grade +
        c4_credit * c4_grade;
      current_credit = c1_credit + c2_credit + c3_credit + c4_credit;

      total_sum = current_sum + credit_completed * current_cgpa;
      total_credit = credit_completed + current_credit;

      est_cgpa = total_sum / total_credit;

      $("#est_cgpa").val(Math.round(est_cgpa * 100) / 100);
      $("#total_credit").val(total_credit);
      $("#course_1").hide();
      $("#course_2").hide();
      $("#course_3").hide();
      $("#course_4").hide();
      $("#result").show();
      $("#calculate_btn").hide();
      $("#back_btn").hide();
      $("#again_btn").show();
    } else {
      alert("Oopss! Kindly fill up all the fields!");
    }
  } else if ($("#course_selector").val() == 5) {
    if (
      $("#credit_1").val() != "" &&
      $("#grade_1").val() != "" &&
      $("#credit_2").val() != "" &&
      $("#grade_2").val() != "" &&
      $("#credit_3").val() != "" &&
      $("#grade_3").val() != "" &&
      $("#credit_4").val() != "" &&
      $("#grade_4").val() != "" &&
      $("#credit_5").val() != "" &&
      $("#grade_5").val() != ""
    ) {
      var c1_credit = $("#credit_1").val();
      var c1_grade = $("#grade_1").val();

      var c2_credit = $("#credit_2").val();
      var c2_grade = $("#grade_2").val();

      var c3_credit = $("#credit_3").val();
      var c3_grade = $("#grade_3").val();

      var c4_credit = $("#credit_4").val();
      var c4_grade = $("#grade_4").val();

      var c5_credit = $("#credit_5").val();
      var c5_grade = $("#grade_5").val();

      c1_credit = parseFloat(c1_credit);
      c1_grade = parseFloat(c1_grade);

      c2_credit = parseFloat(c2_credit);
      c2_grade = parseFloat(c2_grade);

      c3_credit = parseFloat(c3_credit);
      c3_grade = parseFloat(c3_grade);

      c4_credit = parseFloat(c4_credit);
      c4_grade = parseFloat(c4_grade);

      c5_credit = parseFloat(c5_credit);
      c5_grade = parseFloat(c5_grade);

      current_sum =
        c1_credit * c1_grade +
        c2_credit * c2_grade +
        c3_credit * c3_grade +
        c4_credit * c4_grade +
        c5_credit * c5_grade;
      current_credit =
        c1_credit + c2_credit + c3_credit + c4_credit + c5_credit;

      total_sum = current_sum + credit_completed * current_cgpa;
      total_credit = credit_completed + current_credit;

      est_cgpa = total_sum / total_credit;

      $("#est_cgpa").val(Math.round(est_cgpa * 100) / 100);
      $("#total_credit").val(total_credit);
      $("#course_1").hide();
      $("#course_2").hide();
      $("#course_3").hide();
      $("#course_4").hide();
      $("#course_5").hide();
      $("#result").show();
      $("#calculate_btn").hide();
      $("#back_btn").hide();
      $("#again_btn").show();
    } else {
      alert("Oopss! Kindly fill up all the fields!");
    }
  } else if ($("#course_selector").val() == 6) {
    if (
      $("#credit_1").val() != "" &&
      $("#grade_1").val() != "" &&
      $("#credit_2").val() != "" &&
      $("#grade_2").val() != "" &&
      $("#credit_3").val() != "" &&
      $("#grade_3").val() != "" &&
      $("#credit_4").val() != "" &&
      $("#grade_4").val() != "" &&
      $("#credit_5").val() != "" &&
      $("#grade_5").val() != "" &&
      $("#credit_6").val() != "" &&
      $("#grade_6").val() != ""
    ) {
      var c1_credit = $("#credit_1").val();
      var c1_grade = $("#grade_1").val();

      var c2_credit = $("#credit_2").val();
      var c2_grade = $("#grade_2").val();

      var c3_credit = $("#credit_3").val();
      var c3_grade = $("#grade_3").val();

      var c4_credit = $("#credit_4").val();
      var c4_grade = $("#grade_4").val();

      var c5_credit = $("#credit_5").val();
      var c5_grade = $("#grade_5").val();

      var c6_credit = $("#credit_6").val();
      var c6_grade = $("#grade_6").val();

      c1_credit = parseFloat(c1_credit);
      c1_grade = parseFloat(c1_grade);

      c2_credit = parseFloat(c2_credit);
      c2_grade = parseFloat(c2_grade);

      c3_credit = parseFloat(c3_credit);
      c3_grade = parseFloat(c3_grade);

      c4_credit = parseFloat(c4_credit);
      c4_grade = parseFloat(c4_grade);

      c5_credit = parseFloat(c5_credit);
      c5_grade = parseFloat(c5_grade);

      c6_credit = parseFloat(c6_credit);
      c6_grade = parseFloat(c6_grade);

      current_sum =
        c1_credit * c1_grade +
        c2_credit * c2_grade +
        c3_credit * c3_grade +
        c4_credit * c4_grade +
        c5_credit * c5_grade +
        c6_credit * c6_grade;
      current_credit =
        c1_credit + c2_credit + c3_credit + c4_credit + c5_credit + c6_credit;

      total_sum = current_sum + credit_completed * current_cgpa;
      total_credit = credit_completed + current_credit;

      est_cgpa = total_sum / total_credit;

      $("#est_cgpa").val(Math.round(est_cgpa * 100) / 100);
      $("#total_credit").val(total_credit);
      $("#course_1").hide();
      $("#course_2").hide();
      $("#course_3").hide();
      $("#course_4").hide();
      $("#course_5").hide();
      $("#course_6").hide();
      $("#result").show();
      $("#calculate_btn").hide();
      $("#back_btn").hide();
      $("#again_btn").show();
    } else {
      alert("Oopss! Kindly fill up all the fields!");
    }
  } else if ($("#course_selector").val() == 7) {
    if (
      $("#credit_1").val() != "" &&
      $("#grade_1").val() != "" &&
      $("#credit_2").val() != "" &&
      $("#grade_2").val() != "" &&
      $("#credit_3").val() != "" &&
      $("#grade_3").val() != "" &&
      $("#credit_4").val() != "" &&
      $("#grade_4").val() != "" &&
      $("#credit_5").val() != "" &&
      $("#grade_5").val() != "" &&
      $("#credit_6").val() != "" &&
      $("#grade_6").val() != "" &&
      $("#credit_7").val() != "" &&
      $("#grade_7").val() != ""
    ) {
      var c1_credit = $("#credit_1").val();
      var c1_grade = $("#grade_1").val();

      var c2_credit = $("#credit_2").val();
      var c2_grade = $("#grade_2").val();

      var c3_credit = $("#credit_3").val();
      var c3_grade = $("#grade_3").val();

      var c4_credit = $("#credit_4").val();
      var c4_grade = $("#grade_4").val();

      var c5_credit = $("#credit_5").val();
      var c5_grade = $("#grade_5").val();

      var c6_credit = $("#credit_6").val();
      var c6_grade = $("#grade_6").val();

      var c7_credit = $("#credit_7").val();
      var c7_grade = $("#grade_7").val();

      c1_credit = parseFloat(c1_credit);
      c1_grade = parseFloat(c1_grade);

      c2_credit = parseFloat(c2_credit);
      c2_grade = parseFloat(c2_grade);

      c3_credit = parseFloat(c3_credit);
      c3_grade = parseFloat(c3_grade);

      c4_credit = parseFloat(c4_credit);
      c4_grade = parseFloat(c4_grade);

      c5_credit = parseFloat(c5_credit);
      c5_grade = parseFloat(c5_grade);

      c6_credit = parseFloat(c6_credit);
      c6_grade = parseFloat(c6_grade);

      c7_credit = parseFloat(c7_credit);
      c7_grade = parseFloat(c7_grade);

      current_sum =
        c1_credit * c1_grade +
        c2_credit * c2_grade +
        c3_credit * c3_grade +
        c4_credit * c4_grade +
        c5_credit * c5_grade +
        c6_credit * c6_grade +
        c7_credit * c7_grade;
      current_credit =
        c1_credit +
        c2_credit +
        c3_credit +
        c4_credit +
        c5_credit +
        c6_credit +
        c7_credit;

      total_sum = current_sum + credit_completed * current_cgpa;
      total_credit = credit_completed + current_credit;

      est_cgpa = total_sum / total_credit;

      $("#est_cgpa").val(Math.round(est_cgpa * 100) / 100);
      $("#total_credit").val(total_credit);
      $("#course_1").hide();
      $("#course_2").hide();
      $("#course_3").hide();
      $("#course_4").hide();
      $("#course_5").hide();
      $("#course_6").hide();
      $("#course_7").hide();
      $("#result").show();
      $("#calculate_btn").hide();
      $("#back_btn").hide();
      $("#again_btn").show();
    } else {
      alert("Oopss! Kindly fill up all the fields!");
    }
  } else if ($("#course_selector").val() == 8) {
    if (
      $("#credit_1").val() != "" &&
      $("#grade_1").val() != "" &&
      $("#credit_2").val() != "" &&
      $("#grade_2").val() != "" &&
      $("#credit_3").val() != "" &&
      $("#grade_3").val() != "" &&
      $("#credit_4").val() != "" &&
      $("#grade_4").val() != "" &&
      $("#credit_5").val() != "" &&
      $("#grade_5").val() != "" &&
      $("#credit_6").val() != "" &&
      $("#grade_6").val() != "" &&
      $("#credit_7").val() != "" &&
      $("#grade_7").val() != "" &&
      $("#credit_8").val() != "" &&
      $("#grade_8").val() != ""
    ) {
      var c1_credit = $("#credit_1").val();
      var c1_grade = $("#grade_1").val();

      var c2_credit = $("#credit_2").val();
      var c2_grade = $("#grade_2").val();

      var c3_credit = $("#credit_3").val();
      var c3_grade = $("#grade_3").val();

      var c4_credit = $("#credit_4").val();
      var c4_grade = $("#grade_4").val();

      var c5_credit = $("#credit_5").val();
      var c5_grade = $("#grade_5").val();

      var c6_credit = $("#credit_6").val();
      var c6_grade = $("#grade_6").val();

      var c7_credit = $("#credit_7").val();
      var c7_grade = $("#grade_7").val();

      var c8_credit = $("#credit_8").val();
      var c8_grade = $("#grade_8").val();

      c1_credit = parseFloat(c1_credit);
      c1_grade = parseFloat(c1_grade);

      c2_credit = parseFloat(c2_credit);
      c2_grade = parseFloat(c2_grade);

      c3_credit = parseFloat(c3_credit);
      c3_grade = parseFloat(c3_grade);

      c4_credit = parseFloat(c4_credit);
      c4_grade = parseFloat(c4_grade);

      c5_credit = parseFloat(c5_credit);
      c5_grade = parseFloat(c5_grade);

      c6_credit = parseFloat(c6_credit);
      c6_grade = parseFloat(c6_grade);

      c7_credit = parseFloat(c7_credit);
      c7_grade = parseFloat(c7_grade);

      c8_credit = parseFloat(c8_credit);
      c8_grade = parseFloat(c8_grade);

      current_sum =
        c1_credit * c1_grade +
        c2_credit * c2_grade +
        c3_credit * c3_grade +
        c4_credit * c4_grade +
        c5_credit * c5_grade +
        c6_credit * c6_grade +
        c7_credit * c7_grade +
        c8_credit * c8_grade;
      current_credit =
        c1_credit +
        c2_credit +
        c3_credit +
        c4_credit +
        c5_credit +
        c6_credit +
        c7_credit +
        c8_credit;

      total_sum = current_sum + credit_completed * current_cgpa;
      total_credit = credit_completed + current_credit;

      est_cgpa = total_sum / total_credit;

      $("#est_cgpa").val(Math.round(est_cgpa * 100) / 100);
      $("#total_credit").val(total_credit);
      $("#course_1").hide();
      $("#course_2").hide();
      $("#course_3").hide();
      $("#course_4").hide();
      $("#course_5").hide();
      $("#course_6").hide();
      $("#course_7").hide();
      $("#course_8").hide();
      $("#result").show();
      $("#calculate_btn").hide();
      $("#back_btn").hide();
      $("#again_btn").show();
    } else {
      alert("Oopss! Kindly fill up all the fields!");
    }
  }

  $("#again_btn").click(function () {
    location.reload();
  });
});

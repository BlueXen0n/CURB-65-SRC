import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {
  Points: number = 0; /* Default Points */

  ngOnInit(): void {
    this.Reset() /* Runs Reset on page load */
  }

  Print() { /* Prints the website to PDF */
    window.print();
  }

  Reset() { /* Resets radio buttons to default*/
    (<HTMLInputElement>document.getElementById("confusion-no")).checked = true;
    (<HTMLInputElement>document.getElementById("bun-no")).checked = true;
    (<HTMLInputElement>document.getElementById("respiratory_rate-no")).checked = true;
    (<HTMLInputElement>document.getElementById("bp-no")).checked = true;
    (<HTMLInputElement>document.getElementById("age-no")).checked = true;

    /*(<HTMLInputElement>document.getElementById("pneumonia-yes")).checked = true;  Not sure if i want this ? */

    this.Points = 0; /* Resets score to default*/
    this.CheckPneumonia()
  }

  CheckPneumonia() { /* Checks if Pneumonia or AnyInfection radio button is checked and hides/shows the approproate text */
    if ((<HTMLInputElement>document.getElementById("pneumonia-no")).checked === true)
  {
    (<HTMLInputElement>document.getElementById("Pneumonia")).style.display = 'none';
    (<HTMLInputElement>document.getElementById("AnyInfection")).style.display = 'block';
    this.CheckTxtAnyInfection()
    this.CheckS()
  }
  else
  {
    (<HTMLInputElement>document.getElementById("Pneumonia")).style.display = 'block';
    (<HTMLInputElement>document.getElementById("AnyInfection")).style.display = 'none';
    this.CheckTxtPneumonia()
    this.CheckS()
  }}

  Add() { /* For Addition of points, Prints new result and starts check */
    this.Points++;
    this.CheckPneumonia()
  }

  Sub() { /* For Subtracting points, Prints new result and starts check */
    this.Points--;
    this.CheckPneumonia()
  }

  CheckTxtPneumonia() { /* Comparing points to the approproate text for Pneumonia and prints */
    switch (this.Points) {
      case 0: this.PneumoniaTxt0()
        break;
      case 1: this.PneumoniaTxt1()
        break;
      case 2: this.PneumoniaTxt2()
        break;
      case 3: this.PneumoniaTxt3()
        break;
      case 4: this.PneumoniaTxt4()
        break;
      case 5: this.PneumoniaTxt4()
        break;
    }
  }

  CheckTxtAnyInfection() { /* Comparing points to the approproate text for Any Infection and prints */
    switch (this.Points) {
      case 0: this.AnyInfectionTxt0()
        break;
      case 1: this.AnyInfectionTxt0()
        break;
      case 2: this.AnyInfectionTxt1()
        break;
      case 3: this.AnyInfectionTxt1()
        break;
      case 4: this.AnyInfectionTxt2()
        break;
      case 5: this.AnyInfectionTxt2()
        break;
    }
  }

  CheckS() { /* Comparing points and prints "S" if approproate */
    switch (this.Points) {
      case 1: document.getElementById("Point").innerHTML = "Point";
        break;
      default: document.getElementById("Point").innerHTML = "Points";
        break;
    }
  }

  PneumoniaTxt0() { /* Pneumonia text for 0 Points */
    document.getElementById("Mortality").innerHTML = "Low risk group: 0.6% 30-day mortality.";
    document.getElementById("Treatment").innerHTML = "Consider outpatient treatment.";
  }

  PneumoniaTxt1() { /* Pneumonia text for 1 Point */
    document.getElementById("Mortality").innerHTML = "Low risk group: 2.7% 30-day mortality.";
    document.getElementById("Treatment").innerHTML = "Consider outpatient treatment.";
  }

  PneumoniaTxt2() { /* Pneumonia text for 2 Points */
    document.getElementById("Mortality").innerHTML = "Moderate risk group: 6.8% 30-day mortality.";
    document.getElementById("Treatment").innerHTML = "Consider inpatient treatment or outpatient with close followup.";
  }

  PneumoniaTxt3() { /* Pneumonia text for 3 Points */
    document.getElementById("Mortality").innerHTML = "Severe risk group: 14.0% 30-day mortality.";
    document.getElementById("Treatment").innerHTML = "Consider inpatient treatment with possible intensive care admission.";
  }

  PneumoniaTxt4() { /* Pneumonia text for 4-5 Points */
    document.getElementById("Mortality").innerHTML = "Highest risk group: 27.8% 30-day mortality.";
    document.getElementById("Treatment").innerHTML = "Consider inpatient treatment with possible intensive care admission.";
  }


  AnyInfectionTxt0() { /* Any Infection text for 0-1 Points */
    document.getElementById("Mortality").innerHTML = "Low risk group: < 5% mortality.";
    document.getElementById("Treatment").innerHTML = "Consider outpatient treatment.";
  }

  AnyInfectionTxt1() { /* Any Infection text for 2-3 Points */
    document.getElementById("Mortality").innerHTML = "Moderate risk group: < 10% mortality.";
    document.getElementById("Treatment").innerHTML = "Consider inpatient treatment or outpatient with close followup.";
  }

  AnyInfectionTxt2() { /* Any Infection text for 4-5 Points */
    document.getElementById("Mortality").innerHTML = "Highest risk group: 15-30% mortality.";
    document.getElementById("Treatment").innerHTML = "Consider inpatient treatment with possible intensive care admission.";
  }
}

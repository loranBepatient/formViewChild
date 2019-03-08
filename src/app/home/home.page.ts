import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { FormulaireComponent } from "./components/formulaire/formulaire.component";
import { FormsService } from "./services/forms.service";
import { Activity } from "../models/dynamicForm";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements AfterViewInit {
  questions;
  submittedValues: Activity; // demo purpose only
  @ViewChild("dynamicForm")
  private formAsChildComponent: FormulaireComponent;

  ngAfterViewInit() {
    this.service.next();
    this.formAsChildComponent.dynamicForm.patchValue(this.service.activity);
  }

  onNext() {
    this.service.next();
    this.formAsChildComponent.dynamicForm.patchValue(this.service.activity);
  }

  onSubmit() {
    this.submittedValues = this.service.save(
      this.formAsChildComponent.dynamicForm.value
    );
  }
  constructor(private service: FormsService) {
    this.questions = this.service.questions;
  }
}

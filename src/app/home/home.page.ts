import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { FormulaireComponent } from "./components/formulaire/formulaire.component";
import { FormsService } from "./services/forms.service";
import { Activity, Question } from "../models/dynamicForm";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements AfterViewInit {
  questions: Question[];
  submittedValues: Activity; // demo purpose only
  @ViewChild("dynamicForm")
  private formAsChildComponent: FormulaireComponent;

  ngAfterViewInit(): void {
    this.service.next();
    this.formAsChildComponent.patchForm(this.service.activity);
  }

  onNext(): void {
    this.service.next();
    this.formAsChildComponent.patchForm(this.service.activity);
  }

  onSubmit(): void {
    this.submittedValues = this.service.save(this.formAsChildComponent.values);
  }
  constructor(private service: FormsService) {
    this.questions = this.service.questions;
  }
}

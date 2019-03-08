import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Question } from "src/app/models/dynamicForm";
@Component({
  selector: "app-formulaire",
  templateUrl: "./formulaire.component.html",
  styleUrls: ["./formulaire.component.scss"]
})
export class FormulaireComponent implements OnInit {
  private dynamicForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  @Input() questions: Question[];
  // @Input() readonly: boolean;

  createFormControlsFromQuestions(questions: Question[]) {
    return questions.reduce((formControls, question) => {
      formControls[question.inputName] = [
        "",
        question.required ? Validators.required : null
      ];
      return formControls;
    }, {});
  }

  get values() {
    return this.dynamicForm.value;
  }

  get invalid() {
    return this.dynamicForm.invalid;
  }

  public patchForm(values) {
    this.dynamicForm.patchValue(values);
  }

  ngOnInit() {
    const formControls = this.createFormControlsFromQuestions(this.questions);
    this.dynamicForm = this.fb.group(formControls);
  }
}

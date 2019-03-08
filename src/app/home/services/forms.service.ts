import { Injectable } from "@angular/core";
import { Question, Activity } from "src/app/models/dynamicForm";

@Injectable({
  providedIn: "root"
})
export class FormsService {
  private _currentActivity: Activity;

  // should be fetched from API or Store
  private _activities: Activity[] = [
    { id: 1, label: "Activity 1", age: null },
    { id: 2, label: "Activity 2", age: 34 },
    { id: 3, label: null, age: null }
  ];

  private _questions: Question[] = [
    { inputName: "label", required: true },
    { inputName: "age" }
  ];
  //

  get questions(): Question[] {
    return this._questions;
  }

  get activity(): Activity {
    return this._currentActivity;
  }

  next(): void {
    if (this._currentActivity === undefined) {
      this._currentActivity = this._activities[0];
      return;
    }
    const nextIndex =
      1 +
      this._activities.findIndex(
        activy => activy.id === this._currentActivity.id
      );
    this._currentActivity = !this._activities[nextIndex]
      ? this._activities[0]
      : this._activities[nextIndex];
  }

  save(values): Activity {
    const savedActivity = { id: this._currentActivity.id, ...values };
    return savedActivity;
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  private question_answer_array = [];

  // @ViewChild(NgForm) questionAnswerForm: NgForm;

  constructor() { }

  ngOnInit() { }

  addQuestionAnswer(question, answer) {
    var question_answer = {};
    question_answer["question"] = question;
    question_answer["answer"] = answer;
    this.question_answer_array.push(question_answer)
    // console.log(this.question_answer_array)
    // this.questionAnswerForm.resetForm();
  }

  submitForm(question, answer) {
    if (question!="" && answer!="") {
      var question_answer = {};
      question_answer["question"] = question;
      question_answer["answer"] = answer;
      this.question_answer_array.push(question_answer)
      console.log(this.question_answer_array)
    }
  }

}

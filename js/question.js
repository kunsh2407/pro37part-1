class Question{
constructor(){
this.title=createElement("h1")
this.question=createElement("h2")
this.option1=createElement("h2")
this.option2=createElement("h2")
this.input1=createInput("Answer")
}
display(){
this.title.html("My Quiz Game")
this.title.position(350,0)

this.question.html("Question is: what starts and end with letter'E',but has only one letter? ")
this.question.position(150,80)
this.option1.html("1: Everyone")
this.option1.position(150,100)
this.option2.html("2: Envelope ")
this.option2.position(150,120)
this.input1.position(150,220)
}
hide(){
this.input1,hide()
this.question.hide()
this.option1.hide()
this.option2.hide()

}
}
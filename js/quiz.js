class Quiz {
    constructor() {

    }
    getState() {
        database.ref("gameState").on("value", function (data) {
            gameState = data.val()

        })

    }
    update(num) {
        database.ref("/").update({
            gameState: num

        })

    }
    async start() {
        if (gameState === 0) {

            contestant = new Contestant()
            var contestantCountRef = await database.ref("contestantCount").once("value")
            if (contestantCountRef.exists()) {

                contestantCount = contestantCountRef.val();
                contestant.getCount();

            }
        }
        question = new Question()
        question.display();
    }
}